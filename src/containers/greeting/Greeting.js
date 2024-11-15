import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title} <span className="wave-emoji">{"😄"}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="연락처 확인" href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href={require("./resume.pdf")}
                    download="Resume.pdf"
                    className="download-link-button"
                  >
                    <Button text="이력서 다운로드" />
                  </a>
                )}
              </div>
            </div>
          </div>
          {/* <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div> */}
          <div className="greeting-image-div">
            <img
              alt="man sitting on table"
              src={require("../../assets/images/study.jpg")}
              style={{
                width: "50%", // 이미지 너비
                height: "auto", // 비율 유지
                borderRadius: "15px", // 둥근 모서리
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // 그림자 효과
                transition: "transform 0.3s ease, box-shadow 0.3s ease", // 애니메이션 효과
                transform: "scale(1)", // 기본 상태
                marginLeft: "20%"
              }}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
