import { motion } from "framer-motion";
import nioviLogo from "../assets/symbol-silver.png";
import { useTextResources } from "@/useTextResources";

export default function SectionHero() {
  const { copy } = useTextResources();

  return (
    <section
      id="hero"
      className="bg-gradient-to-br to-gray-900 from-black text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 items-center">
          <div>
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {copy.heroFirstLine}
              <br />
              {copy.heroSecondLine}
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {copy.heroSubtext}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="#contact"
                className="inline-block bg-white text-black py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors mr-4 mb-4"
              >
                {copy.heroBtnContact}
              </a>
              <a
                href="#expertise"
                className="mb-10 inline-block bg-transparent border-2 border-white text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-colors"
              >
                {copy.heroBtnExpertise}
              </a>
            </motion.div>
          </div>
          <div className="relative">
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-700 to-purple-800 rounded-full filter blur-3xl opacity-20"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.2 }}
              transition={{
                duration: 1.5,
              }}
            ></motion.div>
            <motion.img
              src={nioviLogo}
              alt="Circular logo with stylized letters that spell Niovi"
              className="hidden md:block md:w-2/4 lg:w-2/5 h-auto relative z-10 m-auto pb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </div>
        </div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-100 to-gray-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
        ></motion.div>
      </div>
    </section>
  );
}
