import { motion, useAnimation } from "framer-motion";
import PersonItem from "./PersonItem";
import { useTextResources } from "../useTextResources";

export default function SectionTeam() {
  const { people, copy } = useTextResources();
  const controls = useAnimation();

  return (
    <section
      id="team"
      className="pt-16 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12"
          whileInView={{
            opacity: 1,
            transition: { delay: 0.1, y: 0, duration: 0.5, ease: "linear" },
          }}
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 10 }}
          animate={controls}
          custom={0}
        >
          {copy.sectionTeamTitle}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {people.map((person, i) => (
            <PersonItem
              key={person.name}
              person={person}
              sectionTeamFooterTitle={copy.sectionTeamFooterTitle}
              i={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
