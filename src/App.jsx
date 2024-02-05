import React from "react";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

// Avatar
function Avatar() {
  return (
    <img className="avatar" src="/images/ken1.jpg" alt="Bandipo Kehinde" />
  );
}

// Intro
function Intro() {
  return (
    <div>
      <h1>Bandipo, Kehinde Olushola</h1>
      <p>
        I am a versatile professional with expertise in both Frontend
        Development and Quality Assurance Engineering. My adeptness in
        translating design concepts into interactive interfaces, combined with a
        meticulous attention to detail, positions me to make substantial
        contributions to the creation of visually appealing and functionally
        robust software. With a background in front-end development, I bring a
        unique perspective to user interactions, enabling me to offer a profound
        understanding of end-user expectations during the testing process. Eager
        to leverage my coding skills, meticulous attention to detail, and
        collaborative mindset, I am committed to enhancing comprehensive
        software testing practices.
      </p>
    </div>
  );
}

// SkillList
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML" emoji="👌" color="#55FF00" />
      <Skill skill="CSS" emoji="👌" color="#FF3B00" />
      <Skill skill="JavaScript" emoji="👌" color="#E85F90" />
      <Skill skill="React" emoji="👌" color="#DA2399" />
      <Skill skill="Tailwind" emoji="👌" color="#44dddd" />
      <Skill skill="Bootstrap" emoji="🌱" color="#F0DAF8" />
      <Skill skill="Web Development" emoji="👍" color="#e84f99" />
      <Skill skill="Git and Github" emoji="👍" color="#55FFCC" />
      <Skill skill="SASS" emoji="🌱" color="#DAdddd" />
      <Skill skill="QA Testing" emoji="👍" color="#FF3F" />
      <Skill skill="SQL" emoji="👍" color="#66ff" />
      <Skill skill="Postman" emoji="👍" color="#99aa55" />
      <Skill skill="Gira" emoji="👍" color="#44dd" />
    </div>
  );
}

// Skill is component of SkillList
function Skill({ skill, emoji, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{emoji}</span>
    </div>
  );
}

export default App;
