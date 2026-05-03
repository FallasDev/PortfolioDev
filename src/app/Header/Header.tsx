"use client";

import MobileHeader from "./MobileHeader";
import DestktopHeader from "./DestktopHeader";

function Header() {
  return (
    <header className="w-full">
      <div className="hidden lg:block">
        <DestktopHeader />
      </div>
      <div className="lg:hidden">
        <MobileHeader />
      </div>
    </header>
  );
}

export default Header;
