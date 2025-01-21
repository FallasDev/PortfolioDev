import Header from "@Header/Header";
import Projects from "@Projects/Projects";
import AboutMe from "./AboutMe/AboutMe";
import Footer from "./Footer/Footer";

export default function Home() {
  return (
    <>
      <Header/>
      <main className="w-full xl:w-1/2 flex flex-col gap-12 items-center scroll-smooth">
        <Projects/>
        <AboutMe/>
        <Footer/>
      </main>
    </>
  );
}
