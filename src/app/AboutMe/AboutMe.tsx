import Image from "next/image";
import { FaRegUserCircle } from "react-icons/fa";

function AboutMe() {
  return (
    <section
      id="AboutMe"
      className="flex flex-col w-full items-center mt-32 gap-6 justify-center xl:items-start"
    >
      <header className="flex items-center gap-4">
        <FaRegUserCircle size={50} color="#fff" />
        <h2 className="text-primaryText font-poppins font-semibold font text-4xl">
          About Me
        </h2>
      </header>
      <div className="flex gap-4 w-full h-full flex-col items-center xl:items-start xl:flex-row">
        <div className="grid grid-cols-[1fr_1fr] h-[400px] xl:h-[300px] w-[80%] xl:w-[40%]">
          <div className="w-full h-full row-span-2 relative bg-[url('/AvatarTwo.webp')] bg-top bg-cover"></div>

          <div className="w-full h-full relative bg-[url('/bandera.webp')] bg-top bg-cover"></div>

          <div className="w-full h-full relative bg-[url('/Avatar.webp')] bg-center bg-cover"></div>
        </div>

        <div className="w-[80%] xl:w-[60%]">
          <h3 className="font-semibold font-poppins text-primaryText text-2xl">
            Who am I?
          </h3>
          <div className="flex gap-2 flex-col text-lg">
            <p className="font-medium font-poppins text-secondaryText">
              I am a young professional in training, passionate about software
              development and technology. With a solid academic background in
              Business Informatics from the{" "}
              <span className="text-cyan-500">University of Costa Rica.</span>
            </p>
            <p className="font-medium font-poppins text-secondaryText">
              I am a constant self-learner, always seeking new ways to grow both
              personally and professionally. Additionally,{" "}
              <span className="text-accent">
                I strive to implement best practices in software development
              </span>{" "}
              , ensuring that my projects are robust, efficient, and scalable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
