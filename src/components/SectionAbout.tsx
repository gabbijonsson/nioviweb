import { useTextResources } from "@/useTextResources";
import { motion, useAnimation } from "framer-motion";
import { MapPin } from "lucide-react";

export default function SectionAbout() {
  const { copy } = useTextResources();
  const controls = useAnimation();

  return (
    <section
      id="about"
      className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-baseline gap-1 sm:gap-4">
          <motion.h2
            className="text-4xl font-bold mb-4 text-gray-200"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.1, y: 0, duration: 0.5, ease: "linear" },
            }}
            viewport={{ once: true, amount: 0.5 }}
            animate={controls}
            custom={0}
          >
            {copy.sectionAboutTitle}
          </motion.h2>
          <motion.div
            className="flex items-baseline text-gray-50 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                bounce: 0.5,
                delay: 0.1,
                y: 0,
                duration: 1,
              },
            }}
            viewport={{ once: true, amount: 0.5 }}
            animate={controls}
            custom={2}
          >
            <MapPin className="w-5 h-5 mr-1" />
            <span>{copy.sectionAboutLocation}</span>
          </motion.div>
        </div>
        <motion.p
          className="text-xl text-gray-50 mb-2 leading-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.1, y: 0, duration: 0.5, ease: "linear" },
          }}
          viewport={{ once: true, amount: 0.5 }}
          animate={controls}
          custom={1}
        >
          {copy.sectionAboutText}
        </motion.p>
      </div>
    </section>
  );
}
