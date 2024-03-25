import { motion } from "framer-motion";
import { useState } from "react";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const heroText = "Currently, a DevOps Engineer".split(" ");
  const [showPopup, setShowPopup] = useState(false);

  const handleCanvasClick = () => {
    setShowPopup(true);
  };

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Yew Kong</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {heroText.map((word, index) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index / 10,
                }}
                key={index}
              >
                {word}{" "}
              </motion.span>
            ))}
            <br className="sm:block" />{" "}
            <span className="md:block hidden">
              with past experiences in Web Dev & AI.
            </span>
          </p>
        </div>
      </div>
      <ComputersCanvas onClick={handleCanvasClick} />

      {/* setting onClick to close modal popup when click happens on the outer div (not on the modal div) */}
      {showPopup && (
        <div
          onClick={() => setShowPopup(false)}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300"
        >
          {/* e.stopPropagation is to prevent modal to close with clicks inside the modal */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white bg-opacity-80 rounded-lg shadow-md p-6 text-center space-y-4 transition-transform duration-300 transform scale-95"
          >
            <h2 className="text-2xl font-semibold text-gray-700 select-none">
              Download CV
            </h2>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => window.open("https://bit.ly/ngyewkong-cv")}
                className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-300 select-none"
              >
                Download
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors duration-300 select-none"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
