import React from "react";
import "./index.css";

const skills = [
  { skill: "HTML", level: "advance", color: "#55FF00" },
  { skill: "CSS", level: "advance", color: "#FF3B00" },
  { skill: "JavaScript", level: "intermediate", color: "#E85F90" },
  { skill: "Tailwind", level: "advance", color: "#DA2399" },
  { skill: "Bootstrap", level: "intermediate", color: "#44dddd" },
  { skill: "React", level: "intermediate", color: "#F0DAF8" },
  { skill: "Git and Github", level: "intermediate", color: "#e84f99" },
  { skill: "Web Development", level: "intermediate", color: "#55FFCC" },
  { skill: "SASS", level: "beginner", color: "#DAdddd" },
  { skill: "QA Testing", level: "intermediate", color: "#FF3F" },
  { skill: "SQL", level: "intermediate", color: "#66ff" },
  { skill: "Postman", level: "intermediate", color: "#99aa55" },
  { skill: "Gira", level: "intermediate", color: "#44dd" },
];

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
      <h1>Bandipo, Kehinde</h1>
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
    // <div className="skill-list">
    //   <Skill skill="HTML" emoji="👌" color="#55FF00" />
    //   <Skill skill="CSS" emoji="👌" color="#FF3B00" />
    //   <Skill skill="JavaScript" emoji="👌" color="#E85F90" />
    //   <Skill skill="React" emoji="👌" color="#DA2399" />
    //   <Skill skill="Tailwind" emoji="👌" color="#44dddd" />
    //   <Skill skill="Bootstrap" emoji="🌱" color="#F0DAF8" />
    //   <Skill skill="Web Development" emoji="👍" color="#e84f99" />
    //   <Skill skill="Git and Github" emoji="👍" color="#55FFCC" />
    //   <Skill skill="SASS" emoji="🌱" color="#DAdddd" />
    //   <Skill skill="QA Testing" emoji="👍" color="#FF3F" />
    //   <Skill skill="SQL" emoji="👍" color="#66ff" />
    //   <Skill skill="Postman" emoji="👍" color="#99aa55" />
    //   <Skill skill="Gira" emoji="👍" color="#44dd" />
    // </div>
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skillObj={skill} />
      ))}
    </div>
  );
}

// Skill is component of SkillList
function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>Obj{skillObj.skill}</span>
      <span>{skillObj.emoji}</span>
    </div>
  );
}

export default App;
