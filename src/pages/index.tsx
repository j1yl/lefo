import { type NextPage } from "next";
import Head from "next/head";
import { useRef, useState } from "react";

import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";

import Hero from "../components/Hero";
import About from "../components/About";
import Works from "../components/Works";
import Contact from "../components/Contact";

const Home: NextPage = () => {
  const ref = useRef(null);
  const [cursorVariant, setCursorVariant] = useState("default");

  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
    fps: 60,
  });

  let mouseXPosition: number = 0;
  let mouseYPosition: number = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX as number;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY as number;
  }

  const circleCSS =
    "hidden z-100 pointers-events-none font-xl fixed top-0 left-0 md:flex flex-row items-center justify-center rounded-full bg-black text-center";

  const variants = {
    default: {
      opacity: 1,
      height: 16,
      width: 16,
      x: mouseXPosition - 8,
      y: mouseYPosition - 8,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    herotext: {
      opacity: 1,
      height: 64,
      width: 64,
      x: mouseXPosition - 32,
      y: mouseYPosition - 32,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };
  return (
    <>
      <Head>
        <title>lefo.dev</title>
        <meta
          name="description"
          content="Personal website for Joe Lee, student at California State University, Fullerton."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div ref={ref}>
        <motion.div
          className={circleCSS}
          variants={variants}
          animate={cursorVariant}
          initial={{
            opacity: 0,
          }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 100,
          }}
        ></motion.div>
        <Hero />
        <About />
        <Works />
        <Contact />
      </div>
    </>
  );
};

export default Home;
