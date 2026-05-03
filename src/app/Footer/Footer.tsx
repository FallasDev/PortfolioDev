"use client";

import { useLandingLanguage } from "@/app/LandingProvider";

function Footer() {
  const { isEnglish } = useLandingLanguage();

  const phrase = isEnglish
    ? '"The only way to do great work is to love what you do"'
    : '"La única forma de hacer un gran trabajo es amar lo que haces"';

  return (
    <footer className="p-8 font-poppins">
      <p className="text-primaryText">
        {phrase} <span className="text-secondaryText block italic">– Steve Jobs</span>
      </p>
    </footer>
  );
}

export default Footer;
