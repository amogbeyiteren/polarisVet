import React, { useEffect, useState } from "react";
import { assets } from "../assets";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  const [showMobile, setShowMobile] = useState(false);

  useEffect(() => {
    if (showMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobile]);

  return (
    <div className=" fixed top-0 left-0 w-full z-40">
      <div
        className={`container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32  bg-white rounded-md ${
          sticky ? "bg-opacity-70 backdrop-blur-md" : ""
        }`}
      >
        <img className="w-20" src={assets.polarisLogo} alt="logo" />
        <ul className="hidden md:flex gap-7 text-black font-semibold">
          <HashLink smooth to="/#" className="cursor-pointer hover:text-gray-400">
            Home
          </HashLink>
          <HashLink smooth to="/#About" className="cursor-pointer hover:text-gray-400">
            About
          </HashLink>
          <HashLink smooth to="/Services#" className="cursor-pointer hover:text-gray-400">
            Services
          </HashLink>
          <HashLink smooth to="/#Testimonials" className="cursor-pointer hover:text-gray-400">
            Testimonials
          </HashLink>
        </ul>
        <button className="hidden md:block bg-green-900 text-white px-8 font-semibold rounded-full py-2">
          <HashLink smooth to="/#Contact">Contact Us</HashLink>
        </button>
        <img
          src={assets.hamburger}
          alt="menu"
          className="md:hidden w-7"
          onClick={() => setShowMobile(true)}
        />
      </div>

      {/* mobile menu */}
      <div
        className={`${
          showMobile ? "fixed w-full" : "h-0 w-0"
        } md:hidden fixed w-full right-0 top-0 bottom-0 overflow-hidden mt-4 px-4 bg-white transition-all `}
      >
        <div className="flex justify-between items-center">
          <img src={assets.polarisLogo} className="w-20" alt="logo" />
          <img
            src={assets.close}
            alt="menu"
            className="w-7 cursor-pointer duration-300"
            onClick={() => setShowMobile(false)}
          />
        </div>
        <ul className="flex flex-col items-start gap-2 mt-16 px-5 text-lg font-medium">
          <HashLink
            smooth to="/#"
            className="py-2 border-gray-300 border-b-2 w-full"
            onClick={() => setShowMobile(false)}
          >
            Home
          </HashLink>
          <HashLink
            smooth to="/About#"
            className="border-gray-300 border-b-2 w-full py-2"
            onClick={() => setShowMobile(false)}
          >
            About
          </HashLink>
          <HashLink
            smooth to="/Services#"
            className="border-gray-300 border-b-2 w-full py-2"
            onClick={() => setShowMobile(false)}
          >
            Services
          </HashLink>
          <HashLink
            smooth to="/#Testimonials"
            className="border-gray-300 border-b-2 w-full py-2"
            onClick={() => setShowMobile(false)}
          >
            Testimonials
          </HashLink>
          <HashLink
            smooth to="/#Contact"
            className="border-gray-300 border-b-2 w-full py-2"
            onClick={() => setShowMobile(false)}
          >
            Contact
          </HashLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
