"use client";

import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useLandingLanguage } from "@/app/LandingProvider";

function Contact() {
  const { isEnglish } = useLandingLanguage();

  return (
    <section
      id="Contact"
      className="flex w-full flex-col items-center gap-6 rounded-[2rem] border border-white/10 bg-white/5 px-6 py-10 shadow-2xl shadow-black/20 sm:px-8 lg:items-start"
    >
      <header className="flex items-center gap-4">
        <FaEnvelope size={44} color="#fff" />
        <h2 className="font-poppins text-4xl font-semibold text-primaryText">
          {isEnglish ? "Contact" : "Contacto"}
        </h2>
      </header>

      <div className="flex w-full flex-col gap-4 text-center lg:text-left">
        <p className="max-w-3xl font-poppins text-lg font-medium leading-relaxed text-secondaryText">
          {isEnglish
            ? "If you want to get in touch, you can write to me or call me directly using the details below."
            : "Si quieres contactarme, puedes escribirme o llamarme directamente con los datos de abajo."}
        </p>

        <div className="grid w-full gap-4 sm:grid-cols-2">
          <a
            href="mailto:sebasfallas92@gmail.com"
            className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-4 font-poppins text-base font-semibold text-primaryText transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:text-accent"
          >
            <FaEnvelope size={20} />
            <span>sebasfallas92@gmail.com</span>
          </a>

          <a
            href="tel:+50663672840"
            className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-4 font-poppins text-base font-semibold text-primaryText transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:text-accent"
          >
            <FaPhoneAlt size={18} />
            <span>+506 6367 2840</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;