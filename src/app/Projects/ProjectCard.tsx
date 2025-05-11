import { SiPython, SiTypescript,SiBoostrap,SiSpringboot,SiJavascript  } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiFlask } from "react-icons/si";

import Project from "./Project";
import { FaReact } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { MdPreview } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

function ProjectCard(project: Project) {
  const tecnologies = {
    React: {
      color: "#007ACC",
      icon: <FaReact size={30} color="#fff" />,
    },
    TypeScript: {
      color: "#1976D2",
      icon: <SiTypescript size={30} color="#fff" />,
    },
    TailwindCSS: {
      color: "#319795",
      icon: <SiTailwindcss size={30} />,
    },
    Flask: {
      color: "#000000",
      icon: <SiFlask size={30} color="#fff" />,
    },
    Python: {
      color: "#3776AB",
      icon: <SiPython size={30} />,
    }, 
    Boostrap: {
      color: "#7311F0",
      icon: <SiBoostrap size={30}/>
    },
    SpringBoot: {
      color: "#6AAD3D",
      icon: <SiSpringboot size={30}/>
    },
    JavaScript: {
      color: "#EFD81D",
      icon: <SiJavascript size={30}/>
    }
  };

  return (
    <li className="flex gap-8 w-full  relative  xl:max-h-[400px]  flex-col items-center xl:items-start xl:flex-row">
      <div className="w-[80%] xl:w-[50%] h-[340px]  relative">
        <div
          className={`w-full h-full bg-cover object-cover rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:opacity-80 ${
            project.github === "In Progress" && "blur-sm"
          }`}
          style={{ backgroundImage: `url('${project.image}')` }}
        ></div>
        {project.github === "In Progress" && (
          <Image
            className="absolute top-[0%] right-[15%]"
            src="/commingSoon.webp"
            alt="Comming Soon"
            width={300}
            height={300}
          />
        )}
      </div>

      <div className="w-[80%] xl:w-[50%] flex flex-col gap-4">
        <h2 className="text-primaryText font-poppins font-semibold text-4xl">
          {project.title}
        </h2>
        <ul className="flex items-center flex-wrap gap-x-4 gap-y-2">
          {project.tecnologies.map((tecnology) => (
            <li
              key={tecnology}
              className="max-w-36 py-1 px-4 flex gap-2 items-center justify-center rounded-md text-primaryText"
              style={{ backgroundColor: tecnologies[tecnology].color }}
            >
              <div>{tecnologies[tecnology].icon}</div>
              <span className="font-poppins text-xs font-semibold">
                {tecnology}
              </span>
            </li>
          ))}
        </ul>
        <p className="font-poppins text-secondaryText">
          Development: {project.date}
        </p>
        <p className="font-poppins text-sm text-primaryText font-medium">
          {project.description}
        </p>
        <div className="flex gap-4">
          {project.url !== "In Progress" ? (
            <Link
              target="_blank"
              className="flex items-center bg-secondary px-2 py-1 gap-2 rounded-md border-[1px] min-w-32 border-slate-500 text-white hover:scale-110 transition-all duration-300"
              href={project.github}
            >
              <LuGithub
                size={40}
                className="text-white"
              />
              <span>Repository</span>
            </Link>
          ) : null}
          {project.url !== "In Progress" ? (
            <Link
              target="_blank"
              href={project.url}
              className="flex items-center bg-secondary px-2 py-1 rounded-md border-[1px] min-w-24 gap-2 border-slate-500 text-white hover:scale-110 transition-all duration-300"
            >
              <MdPreview size={40} className="text-white" />
              <span>Live</span>
            </Link>
          ) : null}
        </div>
      </div>
    </li>
  );
}

export default ProjectCard;
