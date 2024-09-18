import  { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary  px-6 py-5">
      <div className="container mx-auto flex justify-between items-center">
          <Link
            to={"/"}
            className="text-lg flex items-center gap-x-3 lg:text-2xl text-secondary font-bold font-heading duration-700"
          >
            <img
              src="/logo.png"
              alt="IMGAE LOGO PNG"
              className="w-10 h-10 bg-white rounded-full"
            />
            Brick Wood Design Studio
          </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-xl">
          <Link
            to="/"
            className="hover:text-black text-sm lg:text-lg text-secondary"
          >
            HOME
          </Link>

          <Link
            to="/projects"
            className="hover:text-black text-sm lg:text-lg text-secondary"
          >
            PROJECTS
          </Link>
          <Link
            to="/ourstory"
            className="hover:text-black text-sm lg:text-lg text-secondary"
          >
            OUR STORY
          </Link>
          <Link
            to="/contact"
            className="hover:text-black text-sm lg:text-lg text-secondary"
          >
            CONTACT
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-rise duration-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden duration-500 ${isOpen ? "block" : "hidden"} mt-4`}
      >
        <Link to="/" className="block py-2 px-4 text-white hover:bg-rise">
          Home
        </Link>
        <Link
          to="/projects"
          className="block py-2 px-4 text-white hover:bg-rise"
        >
          Projects
        </Link>
        <Link
          to="/ourstory"
          className="block py-2 px-4 text-white hover:bg-rise"
        >
          Our Story
        </Link>
        <Link
          to="/contact"
          className="block py-2 px-4 text-white hover:bg-rise"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
