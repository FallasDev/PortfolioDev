import Link from "next/link";
import Hero from "@Hero/Hero";

function Header() {
  return (
    <header className="w-full lg:mt-4 lg:w-1/2 flex flex-col gap-12  h-[50%] ">
      <nav className="w-full lg:rounded-md lg:h-[6%]">
        <ul className="w-full h-full flex flex-col items-center justify-center gap-8 text-xl  text-white md:flex-row">
          <li>
            <Link href="#" className="hover:text-accent font-poppins font-normal">
              Home
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-accent font-poppins font-normal">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#AboutMe" className="hover:text-accent font-poppins font-normal">
              About Me
            </Link>
          </li>
          <li>
            <Link href="mailto:sebasfallas92@correo.com?Subject=Buenas%20FallasDev%20estamos%20interesados%20en%20contactar" className="hover:text-accent font-poppins font-normal">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Hero />
    </header>
  );
}

export default Header;
