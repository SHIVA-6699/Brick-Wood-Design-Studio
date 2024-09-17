const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-4 flex-col lg:flex-row gap-y-4 flex justify-between items-center px-6">
      <div>
        <p>
          Copyright &copy; 2024 Brick Wood Design Studio - All Rights Reserved.
        </p>
      </div>
      <div>
        {/* <Link
          to="https://brickwooddesignstudio.com"
          className="hover:text-yellow-400 transition-colors duration-300"
        > */}
          Brickwooddesignstudio@gmail.com
        {/* </Link> */}
      </div>
    </footer>
  );
};

export default Footer;
