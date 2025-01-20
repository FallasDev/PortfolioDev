import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Hero() {
  return (
    <div className=" flex w-full h-[70%] mt-32 items-center justify-between flex-col lg:flex-row">
      <div className="w-[80%] flex flex-col  gap-4 lg:w-[60%] text-center lg:text-left">
        <h1 className="text-primaryText font-poppins text-6xl flex font-semibold flex-col">
          Hey 👋🏻,<span className="">I am Sebastián Fallas</span>
        </h1>
        <p className="text-secondaryText font-poppins font-medium text-lg">
          Frontend Developer specializing in React, TypeScript, and responsive
          design.{" "}
          <span className="text-accent">I focus on writing clean code</span>,
          creating accessible experiences, and building modern web solutions
          that prioritize usability.
        </p>
        <ul className="flex gap-4 items-center">
          <li>
            <Link
              href="https://www.linkedin.com/in/sebas-fallas-33ba81256/"
              target="_blank"
            >
              <FaLinkedin
                size={40}
                className="text-white hover:text-blue-600 hover:scale-110 transition-all duration-300"
              />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/FallasDev" target="_blank">
              <FaGithub
                size={40}
                className="text-white hover:text-purple-600 hover:scale-110 transition-all duration-300"
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-[300px] h-[300px] relative rounded-full bg-[url('/Avatar.webp')] bg-bottom bg-cover"></div>
    </div>
  );
}

export default Hero;
