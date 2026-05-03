"use client";

import Hero from "@Hero/Hero";
import Link from "next/link";
import { useLandingLanguage } from "@/app/LandingProvider";

function DestktopHeader() {
  const { isEnglish, toggleLanguage } = useLandingLanguage();

  return (
    <header className="relative w-full flex flex-col items-center gap-12">
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 text-white backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <ul className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium sm:gap-8 sm:text-base">
            <li>
              <Link
                href="#"
                className="font-poppins transition-colors duration-200 hover:text-accent"
              >
                {isEnglish ? "Home" : "Inicio"}
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="font-poppins transition-colors duration-200 hover:text-accent"
              >
                {isEnglish ? "Projects" : "Proyectos"}
              </Link>
            </li>
            <li>
              <Link
                href="#AboutMe"
                className="font-poppins transition-colors duration-200 hover:text-accent"
              >
                {isEnglish ? "About Me" : "Sobre mí"}
              </Link>
            </li>
            <li>
              <Link
                href="#Contact"
                className="font-poppins transition-colors duration-200 hover:text-accent"
              >
                {isEnglish ? "Contact" : "Contacto"}
              </Link>
            </li>
          </ul>
          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-poppins text-sm font-semibold text-primaryText transition-all duration-200 hover:border-accent hover:text-accent"
          >
            {isEnglish ? "ES" : "EN"}
          </button>
        </div>
      </nav>
      <Hero />
    </header>
  );
}

export default DestktopHeader;
