"use client";

import getProjects from "./Data";
import { FaCode } from 'react-icons/fa';
import ProjectCard from "./ProjectCard";
import { useLandingLanguage } from "@/app/LandingProvider";

function Projects(){

    const { isEnglish } = useLandingLanguage();
    const projects = getProjects(isEnglish);

    return (
        <section id="projects" className="flex w-full flex-col items-center justify-center gap-6 mt-32 xl:items-start">
            <header className="flex items-center gap-4 self-start">
                <FaCode size={50} color="#fff"/>
                <h2 className="text-primaryText font-poppins font-semibold font text-4xl">{isEnglish ? "Projects" : "Proyectos"}</h2>
            </header>
            <ul className="flex w-full flex-col gap-16 mt-6 h-fit items-center justify-center">
                {projects.map((project) => (
                    <ProjectCard key={project.id} {...project}/>
                ))}
            </ul>
        </section>
    )
}

export default Projects;