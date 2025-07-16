import { useMemo, memo } from "react";
import { motion } from "framer-motion";
import bca from "@/assets/general/BCA.webp";
import btech from "@/assets/general/btech.webp";
import bba from "@/assets/general/bba.webp";
import mba from "@/assets/general/mba.webp";

const AdmissionCard = memo(({ card, index, total }) => {
  return (
    <motion.div
      className="w-full sm:w-1/2 lg:w-1/4 px-0 md:px-2 mb-4 group"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.3,
        ease: "easeOut",
      }}
    >
      <a href={card.href} className="block relative">
        <div className="relative">
          <figure className="relative overflow-hidden cursor-pointer">
            <img
              src={card.image || "/placeholder.svg"}
              alt={card.alt}
              width={400}
              height={256}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="absolute bottom-[-20px] left-[-10px] right-[-10px] max-w-[75%] mx-auto bg-cusBlue py-3 px-4 transition-all duration-300 group-hover:bg-cusBlueDark group-hover:pb-8 z-10">
            <div className="relative flex items-center justify-center">
              <h3 className="text-white text-center font-serif font-medium text-lg">
                {card.caption}
              </h3>
              <span className="absolute top-full left-1/2 -translate-x-1/2 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 text-sm">
                Learn →
              </span>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
});

export default function UndergraduateAdmissions() {
  const admissionsCards = useMemo(
    () => [
      {
        id: 1,
        image: btech,
        alt: "Students walking in university hallway",
        href: "/programs/btech",
        caption: "B.Tech (CSE / AIML)",
      },
      {
        id: 2,
        image: bca,
        alt: "Student studying at desk",
        href: "/programs/bca",
        caption: "BCA",
      },
      {
        id: 3,
        image: bba,
        alt: "Students in common area",
        href: "/programs/bba",
        caption: "BBA",
      },
      {
        id: 4,
        image: mba,
        alt: "Students collaborating around computer",
        href: "/programs/mba",
        caption: "MBA",
      },
    ],
    []
  );

  return (
    <div className="w-full max-w-9xl mx-auto p-0">
      <div className="max-w-9xl mx-auto p-0">
        <div className="flex flex-wrap mx-0 md:mx-2 gap-6 md:gap-0">
          {admissionsCards.map((card, index) => (
            <AdmissionCard
              key={card.id}
              card={card}
              index={index}
              total={admissionsCards.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
