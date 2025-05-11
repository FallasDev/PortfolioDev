interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    github: string;
    url: string;
    date: string;
    tecnologies: Array<tecnologies>;
}

export type tecnologies = "React" | "TypeScript" | "TailwindCSS" | "Flask" | "Python" | "SpringBoot" | "Boostrap" | "JavaScript";

export default Project;


