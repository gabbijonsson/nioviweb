import { motion, useAnimation } from "framer-motion";
import { Mail } from "lucide-react";
import { Person } from "@/useTextResources";
import LinkedInIcon from "./LinkedInIcon";

export default function PersonItem({
  person,
  sectionTeamFooterTitle,
  i,
}: {
  person: Person;
  sectionTeamFooterTitle: string;
  i: number;
}) {
  const controls = useAnimation();

  return (
    <motion.div
      key={person.name}
      className="sm:mx-0 bg-white p-6 rounded-lg shadow-md shadow-gray-700 flex flex-row items-start gap-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.1, duration: 0.8, ease: "linear" },
      }}
      viewport={{ once: true }}
      animate={controls}
      custom={i + 1}
    >
      <div className="sm:w-40 h-60 flex-shrink-0 overflow-hidden rounded-lg relative group">
        <img
          src={person.imgUrl}
          alt={person.name}
          className="w-[160px] h-[240px] sm:w-full sm:h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-4">
            <a
              href={person.contact.linkedin}
              className="text-white hover:text-gray-200"
            >
              <LinkedInIcon />
            </a>
            <a
              href={person.contact.email}
              className="text-white hover:text-gray-200"
            >
              <Mail size={32} />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between h-full w-full sm:w-auto">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-700">
            {person.name}
          </h3>
          <p className="text-gray-600 mb-4 font-medium">{person.specialty}</p>
          <p className="text-sm text-gray-500 mb-4">{person.description}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-2 text-gray-600">
            {sectionTeamFooterTitle}
          </h4>
          <div className="flex flex-wrap gap-2">
            {person.skills
              ? person.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))
              : null}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
