"use client";

import Hero from "@Hero/Hero";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function MobileHeader({width} : {width: number}) {
  const [showHeader, setShowHeader] = useState(false);

  return (
    <header className="w-full xl:mt-4 xl:w-1/2 flex flex-col gap-4 items-center h-[50%]">
      <GiHamburgerMenu
        size={30}
        className="text-white fixed top-4 right-4 z-[101] cursor-pointer"
        onClick={() => setShowHeader(!showHeader)}
      />
      {showHeader && (
        <nav className="flex fixed text-white top-0 h-full w-full z-[100] bg-blue-600 items-center justify-center">
          <ul className=" text-4xl text-center flex flex-col gap-6">
            <li>
              <Link
                href="#"
                onClick={() => setShowHeader(false)}
                className="hover:text-accent font-poppins font-bold"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                onClick={() => setShowHeader(false)}
                className="hover:text-accent font-poppins font-bold"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#AboutMe"
                onClick={() => setShowHeader(false)}
                className="hover:text-accent font-poppins font-bold"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                href="mailto:sebasfallas92@correo.com?Subject=Buenas%20FallasDev%20estamos%20interesados%20en%20contactar"
                className="hover:text-accent font-poppins font-bold"
                onClick={() => setShowHeader(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
      <Hero width={width}/>
    </header>
  );
}

export default MobileHeader;
