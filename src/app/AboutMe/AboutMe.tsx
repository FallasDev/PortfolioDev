"use client";

import { FaRegUserCircle } from "react-icons/fa";
import { useLandingLanguage } from "@/app/LandingProvider";

function AboutMe() {
  const { isEnglish } = useLandingLanguage();

  return (
    <section
      id="AboutMe"
      className="flex flex-col w-full items-center mt-32 gap-6 justify-center xl:items-start"
    >
      <header className="flex items-center gap-4">
        <FaRegUserCircle size={50} color="#fff" />
        <h2 className="text-primaryText font-poppins font-semibold font text-4xl">
          {isEnglish ? "About Me" : "Sobre mí"}
        </h2>
      </header>
      <div className="flex gap-4 w-full h-full flex-col items-center xl:items-start xl:flex-row">
        <div className="grid grid-cols-[1fr_1fr] h-[400px] xl:h-[300px] w-[80%] xl:w-[40%]">
          <div className="w-full h-full row-span-2 relative bg-[url('/AvatarTwo.webp')] bg-top bg-cover"></div>

          <div className="w-full h-full relative bg-[url('/bandera.webp')] bg-top bg-cover"></div>

          <div className="w-full h-full relative bg-[url('/AvatarThree.webp')] bg-center bg-cover"></div>
        </div>

        <div className="w-[80%] xl:w-[60%]">
          <h3 className="font-semibold font-poppins text-primaryText text-2xl">
            {isEnglish ? "Who am I?" : "¿Quién soy?"}
          </h3>
          <div className="flex gap-2 flex-col text-lg">
            <p className="font-medium font-poppins text-secondaryText">
              {isEnglish ? (
                <>
                  I focus on developing APIs that comply with RESTful standards.
                  <span className="text-accent">
                    {" "}I have knowledge of the main concepts involved in
                    building a solid backend system
                  </span>
                  , which allows me to adapt to different technologies as
                  required.
                </>
              ) : (
                <>
                  Me enfoco en desarrollar APIs que cumplan con estándares
                  RESTful.
                  <span className="text-accent">
                    {" "}Tengo conocimiento de los conceptos principales para
                    construir un backend sólido
                  </span>
                  , lo que me permite adaptarme a distintas tecnologías según
                  se requiera.
                </>
              )}
            </p>
            <p className="font-medium font-poppins text-secondaryText">
              {isEnglish
                ? "Additionally, I have experience working in frontend development, where I prioritize building interfaces with strong UX/UI."
                : "Además, tengo experiencia trabajando en desarrollo frontend, donde priorizo construir interfaces con una UX/UI sólida."}
              
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
