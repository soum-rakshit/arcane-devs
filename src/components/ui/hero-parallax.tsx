"use client";
import React, { useState, useEffect } from "react";
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
import { products } from "../Parallax";

function useParallaxAnimations() {
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

  return { ref, translateX, translateXReverse, rotateX, opacity, rotateZ, translateY };
}

// Custom hook for window width
function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState(0);
  
    useEffect(() => {
      function handleResize() {
        setWindowWidth(window.innerWidth);  // Use window.innerWidth, not windowWidth
      }
      
      // Set initial width
      handleResize();
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []); // Remove windowWidth from the dependency array
  
    console.log(windowWidth);
    return windowWidth;
  }

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
    const { ref, translateX, translateXReverse, rotateX, opacity, rotateZ, translateY } = useParallaxAnimations();
  const firstRow = products.slice(1, 5);
  const secondRow = products.slice(6, 10);
  const thirdRow = products.slice(10, 15);
  
  return (
    <div
      ref={ref}
      className="h-[250vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
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
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 mb-10">
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
    github: string;
    portfolio: string;
    type: string;
    
  };
  translate: MotionValue<number>;
}) => {
const windowWidth = useWindowWidth();
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className={`group/product ${
    windowWidth > 600 
      ? `relative flex-shrink-0 hover:scale-125 ${product.type === 'website' ? 'h-72 w-[30rem]' : 'h-72 w-72'}` 
      : `${product.type === 'website' ? 'relative flex-shrink-0 h-32 w-[15rem]' : 'relative flex-shrink-0 h-30 w-32'}`
  }`}
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
      <div className="cardGradient absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none "></div>
      <h2 className = {`absolute font-semibold left-5 opacity-0 opacity-100 text-white text-2xl  ${windowWidth > 600 ? 'bottom-12 text-bold' : 'bottom-6 text-xs'}`}>
        {product.title}
      </h2>
      {/* {product.mail &&<a href={product.mail} target="_blank" rel="noopener noreferrer">
      <EnvelopeClosedIcon className={ `absolute bottom-4 right-10 opacity-0 opacity-100 text-white ${windowWidth > 600 ? 'w-6 h-6 ' : ''}`} />
</a>} */}
<div className={`absolute  flex left-5 justify-items-start  ${windowWidth > 600 ? 'bottom-4 space-x-4' : 'bottom-2 space-x-2'} `}>
      { product.linkedin && <a href={product.linkedin} target="_blank" rel="noopener noreferrer">
  <LinkedInLogoIcon className={ `right-4 opacity-0 opacity-100 text-white  ${windowWidth > 600 ? 'w-6 h-6 ' : ''}`} />
</a>}
      { product.github && <a href={product.github} target="_blank" rel="noopener noreferrer">
  <GitHubLogoIcon className={ `flex justify opacity-0 opacity-100 text-white  ${windowWidth > 600 ? 'w-6 h-6 ' : ''}`} />
</a>}
      { product.portfolio && <a href={product.portfolio} target="_blank" rel="noopener noreferrer">
  <RocketIcon className={ `flex justify opacity-0 opacity-100 text-white  ${windowWidth > 600 ? 'w-6 h-6 ' : ''}`} />
</a>}
      { product.link && <a href={product.link} target="_blank" rel="noopener noreferrer">
  <RocketIcon className={ `flex justify opacity-0 opacity-100 text-white  ${windowWidth > 600 ? 'w-6 h-6 ' : ''}`} />
</a>}
</div>
    </motion.div>
  );
};
