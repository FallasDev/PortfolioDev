import Project from "./Project";

function getProjects(isEnglish: boolean): Array<Project> {
  return [
      {
        id: 1,
        title: "Despacho Castillo&Asociados",
        description: isEnglish
          ? "TCU project, currently under development by a team of four programmers, where I fulfill a fullstack role. In this project, I had the experience of working with a real client for the first time and participated in the requirements gathering process. This project consists of an internal management system for the SME DespachoCastillo&Asociados, located in Turrialba."
          : "Proyecto de TCU, actualmente en desarrollo por un equipo de cuatro programadores, donde cumplo un rol fullstack. En este proyecto tuve la experiencia de trabajar por primera vez con un cliente real y participé en el levantamiento de requisitos. Este proyecto consiste en un sistema de gestión interno para la pyme DespachoCastillo&Asociados, ubicada en Turrialba.",
        image: "/DespachoCastillo.webp",
        github: "",
        url: "https://castilloyaso.com",
        date: "28-06-2025",
        disabledUrl: false,
        disabledGithub: true,
        isInProgress: false,
        tecnologies: ["SpringBoot", "TypeScript", "TailwindCSS", "MySQL", "Angular"],
    },
    {
        id: 2,
        title: "Zybus",
        description: isEnglish
          ? "System currently under development for the Software Engineering course, developed collaboratively by all classmates. The system is based on a SaaS-style platform for bus companies and includes four internal subsystems: administration, bus companies, drivers, and passengers."
          : "Sistema actualmente en desarrollo para el curso de Ingeniería de Software, desarrollado de forma colaborativa por todos los compañeros del curso. El sistema está basado en una plataforma estilo SaaS para empresas de autobuses e incluye cuatro subsistemas internos: administración, empresas de buses, conductores y pasajeros.",
        image: "/zybus.webp",
        github: "",
        url: "https://zybusapp.com",
        date: "30-06-2025",
        isInProgress: false,
        disabledGithub: true,
        disabledUrl: false,
        tecnologies: ["VueJS", "TypeScript", "TailwindCSS", "FastAPI", "MySQL"],
    }
  ];
}

export default getProjects;
