import { useTextResources } from "@/useTextResources";
import { motion, useAnimation } from "framer-motion";
import { Mail } from "lucide-react";

export default function SectionContact() {
  const { copy } = useTextResources();
  const controls = useAnimation();

  return (
    <section
      id="contact"
      className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-8"
          whileInView={{
            opacity: 1,
            transition: { delay: 0.1, y: 0, duration: 0.5, ease: "linear" },
          }}
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 10 }}
          animate={controls}
          custom={0}
        >
          {copy.sectionContactTitle}
        </motion.h2>
        <motion.p
          className="text-xl mb-8"
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
          {copy.sectionContactText}
        </motion.p>
        <motion.a
          href="mailto:contact@gothenburgtechexperts.se"
          className="inline-flex items-center text-lg font-semibold hover:underline"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.1, y: 0, duration: 0.5, ease: "linear" },
          }}
          viewport={{ once: true, amount: 0.5 }}
          animate={controls}
          custom={2}
        >
          <Mail className="w-5 h-5 mr-2" />
          {copy.sectionContactEmail}
        </motion.a>
      </div>
    </section>
  );
}
