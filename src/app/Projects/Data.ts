import Project from "./Project";

function getProjects(): Array<Project> {
  return [
      {
        id: 1,
        title: "DevOrbit",
        description: "DevOrbit is a platform focused on continuous learning of web programming. It offers high-quality resources that enable users to develop their skills in a practical and comprehensive way.",
        image: "/devOrbitAvatar.webp",
        github: "https://github.com/FallasDev/DevOrbit",
        url: "https://dev-orbit-eta.vercel.app/",
        date: "11-5-2025",
        tecnologies: ["SpringBoot", "JavaScript", "Boostrap"]
    },
    {
        id: 2,
        title: "News App",
        description:
          "A real-time news platform leveraging the GNews API. Built with hexagonal architecture for scalability and maintainability.",
        image: "/newsAppAvatar.webp",
        github: "https://github.com/FallasDev/NewsApp",
        url: "https://news-ln433dprv-fallasdevs-projects.vercel.app/",
        date: "11-8-2024",
        tecnologies: ["React", "TypeScript", "TailwindCSS"],
    }
  ];
}

export default getProjects;
