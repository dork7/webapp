exports.useUserDataSet = () => {
  // fetch user data from somewhere
  const userData = {
    name: "Hamza Mehmood",
    email: "hamzameh122@gmail.com",
    address: "House No 66, Street No 1 ",
    city: "Islamabad",
    country: "Pakistan",
    phone: "+923455293564",
    description: `I'm a Islamabad, Pakistan based MERN Stack Developer. `,
    profileImage:
      "https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=",
    links: {
      facebook: "#",
      instagram: "#",
      linkedin: "https://www.linkedin.com/in/hamzameh",
      github: "https://github.com/dork7",
    },
    aboutMe: `Diligent software engineer with 3+ years
      experience in commercial application
      development. I’m focused, committed and
      capable of learning new technology stacks.`,

    resumeLink:
      "https://drive.google.com/file/d/1Zv7jcvq4LNS22QV5DnSpxjLYLccSyubX/view?usp=sharing",

    education: [
      {
        title: "University",
        degree: "Bachelors in Software Engineering",
        place: "NUML, Islamabad",
        year: "'18",
      },
      {
        title: "Collage",
        degree: "FSC Pre-Engineering",
        place: "Global Collage, Rawalpindi",
        year: "'14",
      },
    ],

    experience: [
      {
        designation: "Full Stack Engineer",
        company: "ISSM.Ai",
        place: "Blue Area, Islamabad",
        description: "descp",
        year: "2021 - Present",
      },
      {
        designation: "Senior Software Design Engineer",
        company: "Teresol",
        place: "DHA, Islamabad",
        description: "descp",
        year: "2018 - 2021",
      },
    ],
    skills: [
      "JavaScript",
      "Express",
      "ReactJs",
      "C/C++",
      "Qt",
      "Redux",
      "MapBox",
      "Google Maps",
      "Full Calendar",
      "PubNub",
      "Docker",
      "Docker-compose",
      "Kafka",
      "Restful api",
      "Storybook",
      "QGIS",
      "GDAL",
      "Mongodb",
      "MySQL",
      "SQLite",
      "Redis",
      "Ubuntu",
      "Raspbian",
      "L4T",
      "Jira",
      "Trello",
      "Github",
      "Gitlab",
    ],
    projects: [
      {
        name: "Business 360",
        description: `Business 360 is a microservice architecture based comprehensive system with a wide range of features
        including FSM, CRM, MRP, order dispatching and tracking, service creation, provision and tracking, creating
        and sales analytics. 
        `,
        link: "",
      },
      {
        name: "Sublo",
        description: `Sublo is a service provision platform. It provides vendors a platform to showcase their products and
        services to the consumer marketplace. Consumers can place orders, quote prices, schedule orders and track
        order`,
        link: "http://web.sublo.co/store/ptn",
      },
      {
        name: "NIFT EPayment",
        description: `NIFT epay is an online payment platform, this project allows integration of NIFT ePay gateway with core banking system using micro-service architecture. Micro-services are responsible for validating users, generating OTP, and transferring funds from user account to respective bank account.`,
        link: "",
      },
      {
        name: "1Link",
        description: `1Link is a payment gateway for PSW (Pakistan Single Window), 1link service allows the user of PSW to process their financial transaction using PSW portal. This project integrates 1link with core banking system to perform financial transactions into core banking system.`,
        link: "",
      },
      {
        name: "LG Option",
        description: `LG option allows the user to create a letter of guarantee for the users,it is one of the key features of the core banking application of Bank Alhabib. LG option validates user’s account conditions and generate LG for trading.`,
        link: "",
      },
      {
        name: "DMP",
        description: `DMP is a digital map processing application for air crafts, which displays tactical raster maps, vector maps, geo-strategic vector layers and geographical information on MFD (Multi-functional Display), that assist the pilot during the flight, in real-time. Another key feature of this application is to generate critical warnings for pilots,  based on the altitude of the aircraft. Basically, it scans the height of the area ahead of the aircraft from DEM ( Digital Elevation Models) and generates critical warnings based on current altitude.The application is developed using Qt C++ framework for NVIDIA Jetson TK1 development kit.`,
        link: "",
      },
      {
        name: "CDU",
        description: `CDU (Control Display Unit) is a configuration unit present in aircrafts which keeps the count of weapons, missiles, fuel and also performs system testing of the aircraft's various modules.`,
        link: "",
      },
      {
        name: "Air-bill",
        description: `Air-bill is an aircraft booking and scheduling website. The main purpose of the site is to show the available and booked slots on a fully interactive calendar, which also allows the users to book flights on the empty slots. Notify users with an automatically generated mail in case of a flight delay, or maintenance issues.`,
        link: "",
      },
    ],
  };
  return userData;
};
