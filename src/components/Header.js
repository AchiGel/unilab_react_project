import Navbar from "./Navbar";

import { useEffect, useState } from "react";
import SignPopUp from "./SignPopUp";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [signClicked, setSignClicked] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function openSignPopUp() {
    setSignClicked(!signClicked);
  }

  return (
    <>
      <Navbar scrolled={scrolled} openSignPopUp={openSignPopUp} />
      {signClicked && <SignPopUp />}
    </>
  );
}

export default Header;
