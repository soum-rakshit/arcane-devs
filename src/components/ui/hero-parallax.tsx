"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Flip } from "../Flip";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import {EnvelopeClosedIcon, GitHubLogoIcon, RocketIcon} from "@radix-ui/react-icons";                                                      


export const HeroParallax = ({
  products,
}: {
  products: {
    type: string,
    title: string;
    link: string;
    linkedin: string;
    github: string;
    thumbnail: string;
    portfolio: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-10 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div>
    {/* <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
       <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
         The Ultimate <br /> development studio
       </h1> */}
      <Flip />
      {/* <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p> */}
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    linkedin: string;
    thumbnail: string;
    mail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className={`group/product    ${window.innerWidth > 600 ? 'relative flex-shrink-0 hover:scale-125 h-72 w-[20rem]' : 'relative flex-shrink-0 h-32 w-32'}`}
    >
      {/* <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      > */}
        <Image
          src={product.thumbnail}
          height="200"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      {/* </Link> */}
      <div className="cardGradient absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className = {`absolute  left-5 opacity-0 opacity-100 text-white text-2xl  ${window.innerWidth > 600 ? 'bottom-12 text-bold' : 'bottom-6 text-xs'}`}>
        {product.title}
      </h2>
      {/* {product.mail &&<a href={product.mail} target="_blank" rel="noopener noreferrer">
      <EnvelopeClosedIcon className={ `absolute bottom-4 right-10 opacity-0 opacity-100 text-white ${window.innerWidth > 600 ? 'w-6 h-6 ' : ''}`} />
</a>} */}
<div className={`absolute  flex left-5 justify-items-start  ${window.innerWidth > 600 ? 'bottom-4 space-x-4' : 'bottom-2 space-x-2'} `}>
      { product.linkedin && <a href={product.linkedin} target="_blank" rel="noopener noreferrer">
  <LinkedInLogoIcon className={ `right-4 opacity-0 opacity-100 text-white  ${window.innerWidth > 600 ? 'w-6 h-6 ' : ''}`} />
</a>}
      { product.github && <a href={product.github} target="_blank" rel="noopener noreferrer">
  <GitHubLogoIcon className={ `flex justify opacity-0 opacity-100 text-white  ${window.innerWidth > 600 ? 'w-6 h-6 ' : ''}`} />
</a>}
      { product.portfolio && <a href={product.portfolio} target="_blank" rel="noopener noreferrer">
  <RocketIcon className={ `flex justify opacity-0 opacity-100 text-white  ${window.innerWidth > 600 ? 'w-6 h-6 ' : ''}`} />
</a>}
      { product.link && <a href={product.link} target="_blank" rel="noopener noreferrer">
  <RocketIcon className={ `flex justify opacity-0 opacity-100 text-white  ${window.innerWidth > 600 ? 'w-6 h-6 ' : ''}`} />
</a>}
</div>
    </motion.div>
  );
};
