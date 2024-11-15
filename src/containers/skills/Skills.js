import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        {/* <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie
                animationData={codingPerson}
                style={{width: "150px", height: "150px"}}
              />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/study.jpg")}
                style={{width: "150px", height: "150px"}}
              ></img>
            )}
          </div>
        </Fade> */}
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>

            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    style={{
                      color: isDark ? "white" : "black", // 다크모드: 흰색, 일반 모드: 검은색
                      lineHeight: "1.8" // 줄간격 설정 (1.6배)
                    }}
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
            <div style={{marginTop: "50px"}}>
              <SoftwareSkill />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
