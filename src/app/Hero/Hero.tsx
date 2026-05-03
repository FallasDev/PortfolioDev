"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useLandingLanguage } from "@/app/LandingProvider";


function Hero() {
  const { isEnglish } = useLandingLanguage();

  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-12 px-6 pb-12 pt-24 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-10 lg:pt-32">
      <div className="flex w-full max-w-2xl flex-col gap-4 text-center lg:w-3/5 lg:max-w-none lg:text-left">
        <div className="flex flex-col gap-3">
          <h1 className="flex flex-col text-4xl font-semibold text-primaryText sm:text-5xl lg:text-6xl">
            {isEnglish ? (
              <>
                Hey 👋🏻,<span>I am Sebastián Fallas</span>
              </>
            ) : (
              <>
                Hola 👋🏻,<span>Soy Sebastián Fallas</span>
              </>
            )}
          </h1>
          <p className="font-poppins text-base font-medium leading-relaxed text-secondaryText sm:text-lg">
            {isEnglish ? (
              <>
                Web application developer, currently in the fourth year of the
                Business Informatics degree at the
                <span className="text-cyan-500">
                  {" "}University of Costa Rica (UCR)
                </span>.
              </>
            ) : (
              <>
                Desarrollador de aplicaciones web, actualmente en el cuarto año
                de la carrera de Informática Empresarial en la
                <span className="text-cyan-500">
                  {" "}Universidad de Costa Rica (UCR)
                </span>.
              </>
            )}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
          <a
            href="/SebasFallas-CV-EN.pdf"
            download
            className="rounded-full border border-white/10 bg-slate-950/50 px-5 py-2 font-poppins text-sm font-semibold text-primaryText transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            {isEnglish ? "Download CV EN" : "Descargar CV EN"}
          </a>
          <a
            href="/SebasFallas-CV-ES.pdf"
            download
            className="rounded-full border border-white/10 bg-slate-950/50 px-5 py-2 font-poppins text-sm font-semibold text-primaryText transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            {isEnglish ? "Download CV ES" : "Descargar CV ES"}
          </a>
        </div>
        <ul className="flex items-center justify-center gap-4 lg:justify-start">
          <li>
            <Link
              href="https://www.linkedin.com/in/sebastian-fallas-33ba81256/"
              target="_blank"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin
                size={40}
                className="text-white transition-all duration-300 hover:scale-110 hover:text-blue-600"
              />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/FallasDev" target="_blank" aria-label="GitHub profile">
              <FaGithub
                size={40}
                className="text-white transition-all duration-300 hover:scale-110 hover:text-emerald-400"
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className="relative h-64 w-64 rounded-full border border-white/10 bg-[url('/Avatar.webp')] bg-cover bg-bottom shadow-2xl shadow-black/30 sm:h-80 sm:w-80 lg:h-[26rem] lg:w-[26rem]"></div>
    </section>
  );
}

export default Hero;
