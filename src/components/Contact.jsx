import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl">
        Contact Me
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center gap-2 my-4">
          <CiLocationOn className="text-xl text-white" />
          {CONTACT.address}
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center gap-2 my-4">
          <FaWhatsapp className="text-xl text-white" />
          {CONTACT.phoneNo}
        </motion.p>

        <a href="#" className="flex items-center justify-center gap-2 my-4">
        <MdOutlineEmail className="text-xl text-white" />
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
