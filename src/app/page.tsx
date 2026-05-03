import Header from "@Header/Header";
import Projects from "@Projects/Projects";
import AboutMe from "./AboutMe/AboutMe";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 overflow-x-hidden px-6 pb-12 sm:px-8 lg:px-10">
        <Projects />
        <AboutMe />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
