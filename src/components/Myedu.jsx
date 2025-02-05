import { motion } from "framer-motion";
import { EDUCATIONS } from "../constants";

const MyEdu = () => {
  return (
    <div className="border-b border-neutral-900 pb-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl font-semibold">
        My <span className="text-neutral-500">Education</span>
      </motion.h2>

      <motion.p 
      whileInView={{ opacity:1, x: 0  }}
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="text-center text-neutral-400 mb-10">
        Diploma in Computer Engineering, with advanced studies in software
        engineering and emerging technology trends.
      </motion.p>

      <div className="relative max-w-3xl mx-auto">
        {/* Garis Vertical */}
        <div className="absolute left-4 top-0 h-full w-1 bg-gray-700 rounded-md"></div>

        {EDUCATIONS.map((edu, index) => (
          <div key={index} className="mb-8 flex items-start space-x-6">
            {/* Bullet Point */}
            <div className="relative z-10">
              <div className="w-4 h-4 bg-purple-800 rounded-full border-2 border-gray-800"></div>
            </div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full">
              <p className="text-sm text-neutral-400">{edu.year}</p>
              <h6 className="font-semibold text-white">{edu.institution}</h6>
              <p className="text-lg font-semibold text-gray-300">
                {edu.degree}
              </p>
              <p className="text-neutral-400 text-sm">{edu.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEdu;
