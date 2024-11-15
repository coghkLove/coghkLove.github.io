import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <h3 className="skill-section-title">주요 기술</h3>
        <ul className="dev-icons">
          {skillsSection.softwareSkills.slice(0, 9).map((skills, i) => (
            <li
              key={i}
              className="software-skill-inline"
              name={skills.skillName}
            >
              <i className={skills.fontAwesomeClassname}></i>
              <p>{skills.skillName}</p>
            </li>
          ))}
        </ul>

        <h3 className="skill-section-title">부가 기술</h3>
        <ul className="dev-icons">
          {skillsSection.softwareSkills.slice(9).map((skills, i) => (
            <li
              key={i}
              className="software-skill-inline"
              name={skills.skillName}
            >
              <i className={skills.fontAwesomeClassname}></i>
              <p>{skills.skillName}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
