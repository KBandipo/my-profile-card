import React from "react";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
    for each web dev skill that you have,
    customized with props */}
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
      <Skill skill="CSS" emoji="👌" color="" />
      <Skill skill="JavaScript" emoji="👌" color="" />
      <Skill skill="React" emoji="👌" color="" />
      <Skill skill="Tailwind" emoji="👌" color="" />
      <Skill skill="Bootstrap" emoji="🌱" color="" />
      <Skill skill="Web Development" emoji="👍" color="" />
      <Skill skill="Git and Github" emoji="👍" color="" />
      <Skill skill="SASS" emoji="🌱" color="" />
      <Skill skill="QA Testing" emoji="👍" color="" />
      <Skill skill="SQL" emoji="👍" color="" />
      <Skill skill="Postman" emoji="👍" color="" />
      <Skill skill="Gira" emoji="👍" />
    </div>
  );
}

// Skill
function Skill({ skill, emoji, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{emoji}</span>
    </div>
  );
}

export default App;
