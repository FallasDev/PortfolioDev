import { FaRegUserCircle } from "react-icons/fa";

function AboutMe() {
  return (
    <section id="AboutMe" className="flex flex-col w-full items-center mt-32 gap-6 justify-center lg:items-start">
      <header className="flex items-center gap-4">
        <FaRegUserCircle size={50} color="#fff" />
        <h2 className="text-primaryText font-poppins font-semibold font text-4xl">
          About Me
        </h2>
      </header>
      <div className="flex gap-4">
        <img src="/collageAvatar.webp" className="bg-cover" width={450} height={500} alt="Collage" />
        <div>
          <h3 className="font-semibold font-poppins text-primaryText text-2xl">
            Who am I?
          </h3>
          <div className="flex gap-2 flex-col text-lg">
            <p className="font-medium font-poppins text-secondaryText">
                I am a young professional in training, passionate about software
                development and technology. With a solid academic background in
                Business Informatics from the <span className="text-cyan-500">University of Costa Rica.</span>
            </p>
            <p className="font-medium font-poppins text-secondaryText">
                I am a constant self-learner, always seeking new ways to grow both
                personally and professionally. Additionally, <span className="text-accent">I strive to implement
                best practices in software development</span> , ensuring that my projects
                are robust, efficient, and scalable.
            </p>
            <p className="font-medium font-poppins text-secondaryText">
                I dream of leaving a positive mark through technology, whether
                through the development of useful applications or innovative
                projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
