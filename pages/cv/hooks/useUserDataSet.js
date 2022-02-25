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
      linkedin: "https://www.linkedin.com/in/hamzameh/",
      github: "https://github.com/dork7",
    },
    aboutMe:
      "Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in.",

    resumeLink: "#",

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
        place: "FG Model School, Islamabad",
        year: "'14",
      },
    ],

    experience: [
      {
        designation: "Full Stack Engineer",
        company: "ISSM.Ai",
        place: "Blue Area, Islamabad",
        description: "descp",
        year: "2021 - Cont",
      },
    ],
  };
  return userData;
};
