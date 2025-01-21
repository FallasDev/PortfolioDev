function Footer() {

  const phrase = "\"The only way to do great work is to love what you do\". – SteveJobs";

  return (
    <footer className="p-8 font-poppins">
      <p className="text-primaryText">
        {phrase} <span className="text-secondaryText block italic">– SteveJobs</span>
      </p>
    </footer>
  );
}

export default Footer;
