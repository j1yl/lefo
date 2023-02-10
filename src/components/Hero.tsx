import HeroText from "../components/HeroText";
import HeroDescriptionText from "./HeroDescriptionText";
import HeroButton from "./HeroButton";
import type { Dispatch, SetStateAction } from "react";
import Hover from "./Hover";
import Terminal from "./Terminal";
import { motion } from "framer-motion";

const Hero = ({
  setCursorVariant,
}: {
  setCursorVariant: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <main className="fullpage p-4">
      <div className="flex h-full w-full flex-col items-center justify-between gap-4 md:max-w-6xl md:flex-row">
        <div className="flex h-max w-full flex-col justify-center gap-2">
          <div className="flex flex-col gap-2">
            <p className="htmltag text-primary_red">{"<h1>"}</p>
            <HeroText text={"Hello! I'm Joe Lee,"} />
            <HeroText text={"Software Engineer"} />
            <p className="htmltag text-primary_red">{"</h1>"}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="htmltag text-primary_purple">{"<p>"}</p>
            <HeroDescriptionText
              text={
                "I am passionate and dedicated to elevating your web experience. Currently pursuing my undergraduate degree in Computer Science @ CSUF."
              }
            />
            <p className="htmltag text-primary_purple">{"</p>"}</p>
          </div>
          <HeroButton text={"Let's Connect"} to={"contact"} />
        </div>
        <motion.div
          initial={{
            opacity: 0,
            x: 200,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            type: "spring",
            damping: 50,
            stiffness: 200,
            delay: 0.5,
            duration: 1,
          }}
          className="hidden h-max w-full flex-col items-end justify-center gap-4 md:flex"
        >
          <Hover
            text={"Hover Me For A Random Quote"}
            selectVariant="qotd"
            setCursorVariant={setCursorVariant}
          />
          <Terminal setCursorVariant={setCursorVariant} />
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;
