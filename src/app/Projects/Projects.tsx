import getProjects from "./Data";
import { FaCode } from 'react-icons/fa';
import ProjectCard from "./ProjectCard";

function Projects(){

    const projects = getProjects();

    return (
        <section id="projects" className="flex flex-col  items-center mt-32 justify-center xl:items-start">
            <header className="flex items-center gap-4">
                <FaCode size={50} color="#fff"/>
                <h2 className="text-primaryText font-poppins font-semibold font text-4xl">Projects</h2>
            </header>
            <ul className="flex gap-12 mt-6 h-fit items-center justify-center flex-col">
                {projects.map((project) => (
                    <ProjectCard key={project.id} {...project}/>
                ))}
            </ul>
        </section>
    )
}

export default Projects;