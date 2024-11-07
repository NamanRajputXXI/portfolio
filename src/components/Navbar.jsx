import React from "react";
import logo from "../assets/raviKumarLogo.webp";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} width={50} height={33} alt="Logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl"></div>
      <a
        href="https://www.linkedin.com/in/namanrajput21/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={30} />
      </a>
      <a
        href="https://www.linkedin.com/in/namanrajput21/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github"
      >
        <FaGithub size={30} />
      </a>
      <a
        href="https://www.linkedin.com/in/namanrajput21/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram size={30} />
      </a>
      <a
        href="https://www.linkedin.com/in/namanrajput21/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTelegram size={30} />
      </a>
    </div>
  );
};

export default Navbar;
