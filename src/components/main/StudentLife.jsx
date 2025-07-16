import { ArrowRight } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/magicui/text-animate";
import banner1 from "@/assets/general/ArtsAndCulture.webp";
import banner2 from "@/assets/banner/bannerTwo.webp";
import sports from "@/assets/general/sports_new.webp";

const studentLifeData = [
  {
    title: "Arts and Culture",
    image: {
      src: banner1,
      alt: "Arts and Culture - Gallery exhibition with people viewing displays",
    },
    description:
      "GLA University fosters creativity in all its forms — be it art, music, drama, or dance. Our vibrant cultural scene provides endless opportunities to explore and express yourself.",
    className: "",
  },
  {
    title: "Campus Life",
    image: {
      src: banner2,
      alt: "Campus Life - Students studying in a library area with bookshelves",
    },
    description:
      "Experience the dynamic campus life at GLA University with countless opportunities for personal growth, leadership development, and memorable experiences.",
    className: "md:mt-16",
  },
  {
    title: "Sports and Athletics",
    image: {
      src: sports,
      alt: "Sports and Athletics - Students in sports uniforms playing a team sport",
    },
    description:
      "GLA University provides excellent sporting facilities and programs, encouraging students to maintain an active lifestyle while competing at various levels.",
    className: "",
  },
];

export default function StudentLife() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 overflow-x-hidden md:overflow-x-visible">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <Heading
          level={2}
          align="center"
          subtext="A vibrant ecosystem of learning and growth"
          className="text-cusBlue"
        >
          <TextAnimate
            as="span"
            by="word"
            delay={0.2}
            duration={0.5}
            animation="slideUp"
            className="inline-flex flex-wrap"
          >
            Campus Life at GLA Noida
          </TextAnimate>
        </Heading>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {studentLifeData.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              x: index === 0 ? -50 : index === 1 ? 0 : 50,
              y: index === 0 ? 0 : index === 1 ? 50 : 0,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              y: 0,
              opacity: 1,
            }}
            viewport={{ once: false }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            className={`flex flex-col ${item.className}`}
          >
            <motion.div
              className="mb-4 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                src={item.image.src}
                alt={item.image.alt}
                className="w-full h-auto aspect-square object-cover"
              />
            </motion.div>

            <Heading level={3} className="text-cusBlue mb-3">
              <TextAnimate
                as="span"
                by="word"
                delay={0.4 + index * 0.2}
                duration={0.5}
                animation="slideUp"
                className="inline-flex flex-wrap"
              >
                {item.title}
              </TextAnimate>
            </Heading>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
              className="text-gray-600 mb-4"
            >
              {item.description}
            </motion.p>

            <motion.a
              href="#"
              whileHover={{ x: 5 }}
              className="text-cusGreen font-medium flex items-center group"
            >
              Learn more
              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
