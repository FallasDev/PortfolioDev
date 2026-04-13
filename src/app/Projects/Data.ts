import Project from "./Project";

function getProjects(): Array<Project> {
  return [
      {
        id: 1,
        title: "Despacho Castillo&Asociados",
        description: "TCU project, currently under development by a team of four programmers, where I fulfill a fullstack role. In this project, I had the experience of working with a real client for the first time and participated in the requirements gathering process. This project consists of an internal management system for the SME DespachoCastillo&Asociados, located in Turrialba.",
        image: "/DespachoCastillo.webp",
        github: "https://github.com/FallasDev/Backend_Despacho_Castillo-Asociados.git",
        url: "",
        disabledUrl: true,
        disabledGithub: false,
        date: "In Progress",
        tecnologies: ["SpringBoot", "TypeScript", "TailwindCSS", "MySQL", "Angular"],
    },
    {
        id: 2,
        title: "Zybus",
        description:
          "System currently under development for the Software Engineering course, developed collaboratively by all classmates. The system is based on a SaaS-style platform for bus companies and includes four internal subsystems: administration, bus companies, drivers, and passengers.",
        image: "/zybus.webp",
        github: "",
        url: "",
        date: "In Progress",
        disabledGithub: true,
        disabledUrl: true,
        tecnologies: ["VueJS", "TypeScript", "TailwindCSS", "FastAPI", "MySQL"],
    }
  ];
}

export default getProjects;
