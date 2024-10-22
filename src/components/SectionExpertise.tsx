import { motion, useAnimation } from "framer-motion";
import ExpertiseItem from "./ExpertiseItem";
import { useTextResources } from "@/useTextResources";

export default function SectionExpertise() {
  const { copy } = useTextResources();
  const controls = useAnimation();

  return (
    <section
      id="expertise"
      className="bg-gray-900 pt-16 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 0.1, y: 10, duration: 0.5, ease: "linear" },
          }}
          viewport={{ once: true }}
          animate={controls}
          custom={0}
        >
          {copy.sectionExpertiseTitle}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {copy.sectionExpertiseItems.map((item, i) => (
            <ExpertiseItem
              key={item.name}
              icon={item.icon}
              title={item.name}
              description={item.description}
              customDelay={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
