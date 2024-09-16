import  { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary border-b border-black px-6 py-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg lg:text-2xl text-secondary font-bold font-heading duration-700">
          Brick Wood Design Studio
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-xl">
          <a href="/" className="hover:text-black text-sm lg:text-lg text-secondary">
            HOME
          </a>

          <a href="/projects" className="hover:text-black text-sm lg:text-lg text-secondary">
            PROJECTS
          </a>
          <a href="/ourstory" className="hover:text-black text-sm lg:text-lg text-secondary">
            OUR STORY
          </a>
          <a href="/contact" className="hover:text-black text-sm lg:text-lg text-secondary">
            CONTACT
          </a>
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
        <a href="/" className="block py-2 px-4 text-white hover:bg-rise">
          Home
        </a>
        <a href="/about" className="block py-2 px-4 text-white hover:bg-rise">
          About
        </a>
        <a
          href="/ourstory"
          className="block py-2 px-4 text-white hover:bg-rise"
        >
          Our Story
        </a>
        <a href="/contact" className="block py-2 px-4 text-white hover:bg-rise">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
