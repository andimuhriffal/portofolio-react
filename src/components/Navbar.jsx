import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

const Navbar = () => {
  return ( 
  <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <FaReact className="text-4xl text-white"/>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/andi-muhammad-riffal-a00036251" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
        <FaLinkedin />
      </a>
      <a href="https://github.com/andimuhriffal" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/andimuhriffal" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
        <FaInstagram />
      </a>
      <a href="https://www.facebook.com/Rival.Cyber4rt" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
        <FaSquareFacebook />
      </a>
    </div>
  </nav>
  );
};

export default Navbar;