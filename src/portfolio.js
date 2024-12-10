/* 이 파일을 수정하여 개인 포트폴리오를 만드세요 */

// 포트폴리오의 색상을 전역적으로 변경하려면 _globalColor.scss 파일을 수정하세요.

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // 사용자 정의 애니메이션 파일 이름으로 변경

// 시작 화면(Splash Screen)

const splashScreen = {
  enabled: false, // 시작 화면을 비활성화하려면 false로 설정
  animation: splashAnimation,
  duration: 2000 // 애니메이션 지속 시간(밀리초)
};

// 요약 및 인사말 섹션(Summary And Greeting Section)

const illustration = {
  animated: true // 정적인 SVG를 사용하려면 false로 설정
};

const greeting = {
  username: "포트폴리오 💻",
  title: (
    <>
      안녕하세요! <br />
      성실한 유채화입니다.
    </>
  ),
  subTitle: (
    <>
      저는 성실함과 책임감을 바탕으로 맡은 일에 최선을 다하며, 꾸준히 성장하는
      것을 목표로 하고 있습니다. <br />잘 부탁드립니다! 😊
    </>
  ),
  resumeLink: "https://drive.google.com/file/d/1resume-link",
  displayGreeting: true // 이 섹션을 숨기려면 false로 설정
};

// Social Media Links

const socialMediaLinks = {
  // linkedin: "https://myinfo5330.tistory.com/",
  github: "https://github.com/coghkLove",
  gmail: "coghk66811@naver.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "성실과 책임으로 성장하는 유채화입니다.",
  skills: [
    <>
      저는 Java, Spring Boot, React, HTML5, CSS, Oracle SQL과 같은 기술을
      학습하며 개발 역량을 키워왔습니다. <br />
      특히, 서버 및 웹 개발과 데이터베이스에 관심이 많아, 다양한 프로젝트를 통해
      실무 감각을 익히고 있습니다.
      <br />
      문제를 깊이 이해하고 효율적인 해결책을 제시하는 데 집중하며, 맡은 일을
      책임감 있게 완수하기 위해 노력합니다. 또한, 항상 배우는 자세로 최적의
      결과를 도출하는 데 기여할 수 있는 인재가 되고자 합니다.
      <br />
      새로운 환경에서도 빠르게 적응하며 맡은 일에 최선을 다하는 자세로, 조직과
      함께 성장하며 가치 있는 결과를 만들어내겠습니다. <br />
    </>
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java" // fab (정확함)
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fas fa-leaf" // fas로 수정
    },
    {
      skillName: "Oracle SQL",
      fontAwesomeClassname: "fas fa-database" // fas로 수정
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react" // fab (정확함)
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5" // fab (정확함)
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt" // fab (정확함)
    },
    {
      skillName: "Word",
      fontAwesomeClassname: "fas fa-file-alt" // 문서 작업 관련 아이콘
    },
    {
      skillName: "PowerPoint",
      fontAwesomeClassname: "fas fa-file-powerpoint" // 파워포인트 관련 아이콘
    },
    {
      skillName: "Excel",
      fontAwesomeClassname: "fas fa-file-excel" // 엑셀 관련 아이콘
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "무선 망 설계 및 최적화 경력",
      // logo: require("./assets/images/design.png"),
      logo: require("./assets/images/Design2.png"),
      subHeader: "2019 - 2024년 (6년)",
      desc: "무선 망 설계 프로그램(Ranplan)을 활용한 무선 망 설계",
      descBullets: [
        "SK ONS (오송역 이음 5G) 망 설계 프로젝트 참여",
        "SK TNS (올림픽체조경기장 5G, 의왕효성백운밸리 LTE 무선 망 설계) POC 참여",
        "LG Uplus (마곡 M시그니처 5G) POC 참여",
        "LG CNS (정부세종청사, 경희대학교 이음5G) 망 설계 프로젝트 참여",
        "삼성 SDS (삼성SDS 빌딩, 한강공원 28GHz) 망 설계 및 검증 프로젝트 참여",
        "HFR (대구테크노파크, 중앙해양중공업, 대공에코텍, 성균관대학교 이음5G) 망 설계 프로젝트 참여",
        "KCA, ETRI, 한전KDN, 벨루션네트웍스 등 다수 업체 무선망 설계 및 검증 지원"
      ]
    },
    {
      schoolName: "5G 및 NB-IoT 통신 프로토콜 분석 경력",
      // logo: require("./assets/images/NetworkAnalyzer.png"),
      logo: require("./assets/images/NetworkAnalyzer2.png"),

      subHeader: "",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "OA",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "프로젝트",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/project1.png"),
      projectName: "매출관리 시스템",
      projectDesc:
        "브랜드 본사의 지점 관리, 매출 관리를 제공하는 그룹웨어 개발",
      footerLink: [
        {
          name: "View",
          url: "https://drive.google.com/file/d/1w15D8gCkC7Xq9C7f6fNVmPAvkmgnIE3K/view?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/project2.png"),
      projectName: "도미노 피자 웹페이지",
      projectDesc:
        "도미노피자 웹사이트를 클론한 프로젝트로, 피자 정보 페이지와 사용자 주문 일부 구현.",
      footerLink: [
        {
          name: "View",
          url: "https://drive.google.com/file/d/1JDlB4HE0ZyEQ5oMbs_2PxXV5AVUTbtsC/view?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/project3.png"),
      projectName: "게시판",
      projectDesc:
        "커뮤니티의 게시판 글 작성, 수정, 삭제, 조회와 댓글 작성, 삭제 기능을 구현",
      footerLink: [
        {
          name: "View",
          url: "https://drive.google.com/file/d/1SM5CX2sIulz6EZccGmkjRvcTFgoDmifQ/view?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/project4.png"),
      projectName: "음원 스트리밍 웹페이지",
      projectDesc:
        "처음 제작한 웹사이트 프로젝트로, 음원 스트리밍 사이트를 제작한 프로젝트, 음원 목록과 간단한 UI를 구현.",
      footerLink: [
        {
          name: "View",
          url: "https://drive.google.com/file/d/1ohfLrIa0z6zgts7nArufvggt2Z_hYXaL/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("연락처 ☎️"),
  subtitle: "",
  number: "Phone: 010-3276-7712",
  email_address: "E-Mail: coghk66811@naver.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
