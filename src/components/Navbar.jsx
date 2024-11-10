import React from "react";
import logo from "../assets/raviKumarLogo.webp";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <svg
            width="70"
            height="70"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 50 150 L 50 50 L 75 50 L 125 125 L 125 50 L 150 50 L 150 150 L 125 150 L 75 75 L 75 150 Z"
              fill="#FFFFFF"
            />

            <path
              d="M 160 50 L 160 150 L 185 150 L 185 110 Q 185 80 160 80 Z"
              fill="#FFFFFF"
            />
            <path
              d="M 160 50 Q 180 50 180 70 Q 180 90 160 90 Z"
              fill="#FFFFFF"
            />
          </svg>
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
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
    </div>
  );
};

export default Navbar;
