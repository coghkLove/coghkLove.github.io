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
  username: "문현진",
  title: (
    <>
      안녕하십니까! <br />
      성실한 문현진입니다.
    </>
  ),
  subTitle: (
    <>
      저는 5G 무선망 설계와 Protocol, Physical Resource 분석에 대한 풍부한
      경험을 바탕으로 무선망의 구축, 설계 및 최적화 작업을 성공적으로 수행해
      왔습니다. <br />
    </>
  ),
  resumeLink: "https://drive.google.com/file/d/1resume-link",
  displayGreeting: true // 이 섹션을 숨기려면 false로 설정
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://myinfo5330.tistory.com/",
  // github: "https://github.com/saadpasta",
  gmail: "eheh0418@naver.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "안녕하세요. 성실과 책임으로 성장하는 문현진입니다.",
  skills: [
    <>
      저는 6년간 무선 망 설계, 5G 프로토콜 분석, 성능 최적화를 통해 다양한
      네트워크 프로젝트를 수행하며 전문성을 쌓아왔습니다. <br />
      특히, 5G와 LTE 설계, 최적화, 신호 처리 및 트러블슈팅 경험이 풍부합니다.{" "}
      이러한 경험을 바탕으로 무선 망 설계뿐만 아니라 프로토콜 최적화, 성능 개선,
      신호 분석 등 통신 전반적인 다양한 영역에서도 효율적이고 신뢰성 높은 결과를
      도출할 수 있는 전문성을 보유하고 있습니다. <br /> <br />
      또한, 워드, 엑셀, 파워포인트, 포토샵, 프리미어 프로 등 다양한 도구를
      능숙하게 활용해 업무 효율성을 높이고 완성도 높은 결과물을 만들어냈습니다.{" "}
      <br />
      퇴근 후에는 업무 관련 기술뿐만 아니라 Java, Spring Boot, Oracle SQL,
      React, HTML5, CSS 등 개발 기술을 포함한 다양한 역량을 꾸준히 계발하며
      스스로를 발전시켜 왔습니다. <br />
      어떠한 일을 맡더라도 책임감을 가지고 최선의 결과를 만들기 위해 노력하는
      자세로, 새로운 환경에서도 성과를 창출하며 성장하는 인재가 되겠습니다.
    </>
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Communication",
      fontAwesomeClassname: "fas fa-satellite-dish" // fas로 수정
    },
    {
      skillName: "5G Analysis",
      fontAwesomeClassname: "fas fa-microchip" // fas로 수정
    },
    {
      skillName: "Device Testing",
      fontAwesomeClassname: "fas fa-mobile" // fas로 수정
    },
    {
      skillName: "Wi-Fi",
      fontAwesomeClassname: "fas fa-wifi" // fas로 수정
    },
    {
      skillName: "Signal Analysis",
      fontAwesomeClassname: "fas fa-signal" // fas로 수정
    },
    {
      skillName: "Network Design",
      fontAwesomeClassname: "fas fa-project-diagram" // fas로 수정
    },
    {
      skillName: "Protocol Analysis",
      fontAwesomeClassname: "fas fa-cogs" // fas로 수정
    },
    {
      skillName: "Performance Analysis",
      fontAwesomeClassname: "fas fa-chart-line" // fas로 수정
    },
    {
      skillName: "Troubleshooting",
      fontAwesomeClassname: "fas fa-tasks" // fas로 수정
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
    },

    {
      skillName: "Photoshop",
      fontAwesomeClassname: "fas fa-image" // fab (정확함)
    },
    {
      skillName: "Premiere Pro",
      fontAwesomeClassname: "fas fa-film" // fas로 수정
    },
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
      skillName: "Computer Repair",
      fontAwesomeClassname: "fas fa-tools" // 컴퓨터 수리 관련 아이콘
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
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

      subHeader: "2019년 - 2021년 (3년)",
      desc: "무선 분석 계측기(WaveJudge)를 활용한 5G 및 NB-IoT 통신 프로토콜 분석 및 성능 최적화 프로젝트 수행",
      descBullets: [
        "삼성전자 SoC 사업팀 5G PHY(Physical Layer) 자원 관리 및 신호 처리 분석 프로젝트 참여",
        "삼성전자 네트워크 사업부 개발 단말, 기지국 간 에러 트러블슈팅 및 성능 개선 프로젝트 참여",
        "삼성전자 네트워크 사업부 NB-IoT 저전력 통신 최적화 및 네트워크 분석 프로젝트 참여",
        "삼성전자 Modem S/W 개발그룹 5G 통신 프로토콜 최적화 및 트러블슈팅 프로젝트 참여"
      ]
    },
    {
      schoolName: "OTA 챔버 및 안테나 성능 측정 경력",
      logo: require("./assets/images/Chamber.png"),
      subHeader: "2022년 - 2024년 (4년)",
      desc: "OTA 챔버 관련 업무 지원 및 안테나 성능 검증 및 분석",
      descBullets: [
        "삼성전자 안테나 개발그룹 802.11 a/b/g/n/ac/ax/6E 안테나 성능 측정 결과 검증 및 분석 지원",
        "삼성전자 스마트폰 개발그룹 TRP/TIS 측정 결과 데이터 분석 및 최적화 방안 도출 지원",
        "삼성전자 Connectivity 개발팀 상호 연동성 시험 결과 분석 및 문제 해결 방안 제시"
      ]
    },
    {
      schoolName: "추가 경력 및 프로젝트",
      // logo: require("./assets/images/5G.png"),
      logo: require("./assets/images/5G2.png"),

      subHeader: "기타 주요 프로젝트",
      duration: "2019년 - 현재",
      desc: "무선 망 구축, 최적화 및 단말기 시험 경험 다수",
      descBullets: [
        "무선 망 구축 - 에스넷아이씨티 이음 5G 테스트베드 망 설계, 구축, 최적화 프로젝트 수행",
        "무선 망 최적화 - ETRI 육군사관학교 훈련소 전파환경 측정 및 최적화 용역 주요 인력 참여",
        "단말기 시험 경험 - 테스트 베드(TTA, GERI) 단말기 성능 시험 경험 다수"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
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
  display: true // Set false to hide this section, defaults to true
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
  display: true // Set false to hide this section, defaults to true
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
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
