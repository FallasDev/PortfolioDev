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
          "News App is a web-based application built using the GNews API to provide users with real-time news articles on various topics. Developed with a clean and hexagonal architecture, it emphasizes separation of concerns, scalability, and maintainability. ",
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