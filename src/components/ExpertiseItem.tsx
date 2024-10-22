import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function ExpertiseItem({
  icon,
  title,
  description,
  customDelay,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  customDelay: number;
}) {
  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: customDelay * 0.2, duration: 0.8, ease: "linear" },
      }}
      viewport={{ once: true }}
    >
      <div className="bg-gray-800 p-4 rounded-full mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-200">{title}</h3>
      <p className="text-gray-50">{description}</p>
    </motion.div>
  );
}
