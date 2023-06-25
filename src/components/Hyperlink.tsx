import Link from "next/link";
import React from "react";
import { MotionConfig, motion } from "framer-motion";

type Props = {
  newTab: boolean;
  url: string;
  text: string;
};

const underlineVariant = {
  hidden: {
    width: "0%",
  },
  show: {
    width: "100%",
  },
};

const Hyperlink = (props: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileHover="show"
      animate="hidden"
      className="w-max"
    >
      <Link
        passHref
        href={props.url}
        role="link"
        aria-label={props.text}
        className="flex items-center text-sm relative w-full"
        target={props.newTab ? "_blank" : ""}
      >
        <p className="text-primary duration-500 ease-in-out">{props.text}</p>
        <motion.span
          variants={underlineVariant}
          className="bg-primary h-[1px] w-full absolute bottom-0 left-0"
        />
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Icon"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Arrow"
              transform="translate(-816.000000, -98.000000)"
              fillRule="nonzero"
            >
              <g
                id="arrow_right_up_line"
                transform="translate(816.000001, 98.000001)"
              >
                <path
                  d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5935,23.2578 L12.5819,23.2595 L12.5109,23.295 L12.4919,23.2987 L12.4767,23.295 L12.4057,23.2595 C12.3958,23.2564 12.387,23.259 12.3821,23.2649 L12.378,23.2758 L12.3609,23.7031 L12.3659,23.7235 L12.3769,23.7357 L12.4805,23.8097 L12.4953,23.8136 L12.5071,23.8097 L12.6107,23.7357 L12.6233,23.7197 L12.6267,23.7031 L12.6096,23.2758 C12.6076,23.2657 12.601,23.2593 12.5935,23.2578 Z M12.8584,23.1453 L12.8445,23.1473 L12.6598,23.2397 L12.6499,23.2499 L12.6472,23.2611 L12.6651,23.6906 L12.6699,23.7034 L12.6784,23.7105 L12.8793,23.8032 C12.8914,23.8069 12.9022,23.803 12.9078,23.7952 L12.9118,23.7812 L12.8777,23.1665 C12.8753,23.1546 12.8674,23.147 12.8584,23.1453 Z M12.143,23.1473 C12.1332,23.1424 12.1222,23.1453 12.1156,23.1526 L12.1099,23.1665 L12.0758,23.7812 C12.0751,23.7927 12.0828,23.8019 12.0926,23.8046 L12.1083,23.8032 L12.3092,23.7105 L12.3186,23.7024 L12.3225,23.6906 L12.3404,23.2611 L12.3372,23.2485 L12.3278,23.2397 L12.143,23.1473 Z"
                  id="MingCute"
                ></path>
                <path
                  d="M17.9999,5 C18.5522,5 18.9999,5.44772 18.9999,6 L18.9999,14 C18.9999,14.5523 18.5522,15 17.9999,15 C17.4476,15 16.9999,14.5523 16.9999,14 L16.9999,8.41397 L7.04988,18.364 C6.65936,18.7545 6.02619,18.7545 5.63567,18.364 C5.24514,17.9735 5.24514,17.3403 5.63567,16.9498 L15.5855,7 L9.99992,7 C9.44763,7 8.99992,6.55228 8.99992,6 C8.99992,5.44771 9.44763,5 9.99992,5 L17.9999,5 Z"
                  className="fill-primary"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </Link>
    </motion.div>
  );
};

export default Hyperlink;
