"use client";

import Hero from "@Hero/Hero";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiX } from "react-icons/hi";
import { useLandingLanguage } from "@/app/LandingProvider";

function MobileHeader() {
  const [showHeader, setShowHeader] = useState(false);
  const { isEnglish, toggleLanguage } = useLandingLanguage();

  return (
    <header className="relative w-full flex flex-col items-center gap-6">
      <button
        type="button"
        aria-label={showHeader ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={showHeader}
        onClick={() => setShowHeader(!showHeader)}
        className="fixed right-4 top-4 z-[101] grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-slate-950/85 text-white shadow-lg shadow-black/30 backdrop-blur-xl transition-transform duration-200 active:scale-95"
      >
        {showHeader ? <HiX size={24} /> : <GiHamburgerMenu size={22} />}
      </button>
      <button
        type="button"
        onClick={toggleLanguage}
        className="fixed left-4 top-4 z-[101] rounded-full border border-white/10 bg-slate-950/85 px-4 py-3 font-poppins text-xs font-semibold text-primaryText shadow-lg shadow-black/30 backdrop-blur-xl transition-colors duration-200 hover:border-accent hover:text-accent"
      >
        {isEnglish ? "ES" : "EN"}
      </button>
      {showHeader && (
        <nav className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/85 px-4 text-white backdrop-blur-xl">
          <div className="w-full max-w-sm rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/40">
            <p className="mb-5 text-center text-xs uppercase tracking-[0.3em] text-secondaryText">
              {isEnglish ? "Navigation" : "Navegación"}
            </p>
            <ul className="flex flex-col gap-4 text-center text-2xl font-semibold">
              <li>
                <Link
                  href="#"
                  onClick={() => setShowHeader(false)}
                  className="block rounded-2xl border border-white/5 bg-white/5 px-4 py-3 font-poppins transition-colors duration-200 hover:text-accent"
                >
                  {isEnglish ? "Home" : "Inicio"}
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  onClick={() => setShowHeader(false)}
                  className="block rounded-2xl border border-white/5 bg-white/5 px-4 py-3 font-poppins transition-colors duration-200 hover:text-accent"
                >
                  {isEnglish ? "Projects" : "Proyectos"}
                </Link>
              </li>
              <li>
                <Link
                  href="#AboutMe"
                  onClick={() => setShowHeader(false)}
                  className="block rounded-2xl border border-white/5 bg-white/5 px-4 py-3 font-poppins transition-colors duration-200 hover:text-accent"
                >
                  {isEnglish ? "About Me" : "Sobre mí"}
                </Link>
              </li>
              <li>
                <Link
                  href="#Contact"
                  className="block rounded-2xl border border-white/5 bg-white/5 px-4 py-3 font-poppins transition-colors duration-200 hover:text-accent"
                  onClick={() => setShowHeader(false)}
                >
                  {isEnglish ? "Contact" : "Contacto"}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
      <Hero />
    </header>
  );
}

export default MobileHeader;
