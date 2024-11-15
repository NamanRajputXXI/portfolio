import profilePic from "../assets/heroProfile.jpg";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
const containerVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};
const childVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap items-center justify-center lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilePic}
              alt="Naman Rajput"
              className="border border-stone-900 sm:h-[700px] h-[400px] rounded-3xl"
              width={650}
              height={650}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariant}
            className="flex flex-col items-center lg:items-start"
          >
            <motion.h2
              variants={childVariant}
              className="pb-2 sm:mt-0 mt-5 text-4xl tracking-tighter lg:text-8xl"
            >
              Naman Rajput
            </motion.h2>
            <motion.span
              variants={childVariant}
              className="bg-gradiant-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={childVariant}
              className="my-2 max-w-lg py-6 text=xl leading-relaxed tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={childVariant}
              href="https://drive.google.com/file/d/120YHn2Nh9YCGD26vtHV9iqvR43L-3h5C/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
