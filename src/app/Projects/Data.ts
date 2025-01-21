import Project from "./Project";

function getProjects(): Array<Project> {
  return [
    {
      id: 1,
      title: "NASATUBE",
      description:
        "NasaTube is a web application that uses NASA’s API to display captivating space images and videos. Inspired by YouTube’s layout, it allows users to explore fascinating astronomical content, from planets and galaxies to historical space missions. ",
      image: "/nasatubeAvatar.webp",
      github: "https://github.com/FallasDev/NASATUBE",
      url: "https://nasatube-5gcwifh1q-fallasdevs-projects.vercel.app/",
      date: "5-12-2023",
      tecnologies: ["React", "TypeScript"],
    },
    {
        id: 2,
        title: "News App",
        description:
          "A real-time news platform leveraging the GNews API. Built with hexagonal architecture for scalability and maintainability.",
        image: "/newsAppAvatar.webp",
        github: "https://github.com/FallasDev/NewsApp",
        url: "https://news-app-eight-smoky.vercel.app/",
        date: "11-8-2024",
        tecnologies: ["React", "TypeScript", "TailwindCSS"],
    },
    {
        id: 3,
        title: "Taskify",
        description: "Taskify is a comprehensive project management application designed to streamline task and project organization.",
        image: "/taskifyAvatar.webp",
        github: "In Progress",
        url: "In Progress",
        date: "In Progress",
        tecnologies: ["React", "TypeScript", "TailwindCSS", "Flask", "Python"]
    }
  ];
}

export default getProjects;