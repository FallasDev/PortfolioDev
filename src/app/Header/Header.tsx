"use client";

import MobileHeader from "./MobileHeader";
import DestktopHeader from "./DestktopHeader";
import { useState } from "react";

function Header() {

  const [screen, setScreen] = useState(1124);

  window.addEventListener("resize",() => {
    console.log(window.screen.width);
    setScreen(window.screen.width);
  })


  return (
    screen < 1256 ? <MobileHeader width={screen}/> : <DestktopHeader width={screen}/>
  );
}

export default Header;
