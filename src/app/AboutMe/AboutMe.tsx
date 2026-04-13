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

          <div className="w-full h-full relative bg-[url('/AvatarThree.webp')] bg-center bg-cover"></div>
        </div>

        <div className="w-[80%] xl:w-[60%]">
          <h3 className="font-semibold font-poppins text-primaryText text-2xl">
            Who am I?
          </h3>
          <div className="flex gap-2 flex-col text-lg">
            <p className="font-medium font-poppins text-secondaryText">
              I focus on developing APIs that comply with RESTful standards. 
              <span className="text-accent">
                {" "} I have knowledge of the main concepts involved in building a solid backend system
              </span>,
              which allows me to adapt to different technologies as required.
            </p>
            <p className="font-medium font-poppins text-secondaryText">
                Additionally, I have experience working in frontend development, where I prioritize building interfaces with strong UX/UI.
              
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
