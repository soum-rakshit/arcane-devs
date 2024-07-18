"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import Link from "next/link";

export default function Parallax() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    type: "website",
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
    linkedin: "",
      github:"",
      portfolio:"",
  },
  {
    type: "website",
    title: "NITAPlacementConnect",
    link: "https://nita-placement-connect.vercel.app/",
    thumbnail:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/3b360d202712531.668b04d6cbcf0.png",
      linkedin: "",
      github:"",
      portfolio:"",
  },
  {
  type: "profile",
    title: "Dhruv Rohatgi",
    linkedin: "https://www.linkedin.com/in/dhruvrohatgi28/",
    thumbnail:
      "https://media.licdn.com/dms/image/D5603AQFBsGawUE3ZzA/profile-displayphoto-shrink_800_800/0/1693196895781?e=1726099200&v=beta&t=YYdPO8_kU6OnMovGoHR_vIFy7gVZx3FCl9Cbc5ZZBro",
      portfolio:"https://courage003.github.io/Personal-Portfolio/",
      link:"",
    github: "https://github.com/Courage003",
  },

  {
    type: "profile",
    title: "Aditya Kanu",
    linkedin: "https://www.linkedin.com/in/adityakanu/",
    thumbnail:
      "https://media.licdn.com/dms/image/D4D03AQFu7Blgr4MeTg/profile-displayphoto-shrink_800_800/0/1711030949439?e=1726099200&v=beta&t=VwPqjP_DcPwkk_yjYINxcQ_jeg9khZ6PyiFOfg3xvAg",
      link:"",
      github: "https://github.com/adityakanu",
      portfolio: "https://www.adityakanu.com",
  },
  {
    type: "website",
    title: "Velovista",
    link: "https://velovista.vercel.app",
    thumbnail:
      "https://i.postimg.cc/Fspt1PLj/image-2024-07-18-163836010.png",
      linkedin: "",
      github:"",
      portfolio:"",
  },
  {
    type: "website",
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
      linkedin: "",
      github:"",
      portfolio:"",
  },

  {
  type: "website",
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
      linkedin: "",
      github:"",
      portfolio:"",
  },
  {
    type: "profile",
    title: "Soumyajit Das",
    linkedin: "https://www.linkedin.com/in/soumyajit-das-cse/",
    thumbnail:
      "https://i.postimg.cc/6QVnvZzk/Whats-App-Image-2024-07-18-at-5-16-52-PM.jpg",
    link: "",
    portfolio: "https://github.com/samSoumyajitD",
    github: "https://github.com/samSoumyajitD",
  },
  {
    type: "profile",
    title: "Soumyadeep Rakshit",
    linkedin: "https://www.linkedin.com/in/soumrakshit/",
    thumbnail:
      "https://media.licdn.com/dms/image/D5603AQGxNLlQL5G5uQ/profile-displayphoto-shrink_400_400/0/1713888600488?e=1726099200&v=beta&t=k0fIDgwrPCBAe-ng4rf883tgDBR2F-uLGhMbtP9uG3I",
      link: "",
      portfolio: "",
    github: "https://github.com/soum-rakshit",
  },
  {
    type: "profile",
    title: "Ankit Patnaik",
    linkedin: "https://www.linkedin.com/in/ankit-patnaik/",
    thumbnail:
      "https://i.postimg.cc/L6hQTgBG/Whats-App-Image-2024-07-18-at-5-07-49-PM.jpg",
      link: "",
      portfolio: "https://ankitpatnaik.vercel.app",
    github: "https://github.com/patnaikankit",
  },
  
  {
    type: "website",
    title: "NITAPlacementConnect",
    link: "https://nita-placement-connect.vercel.app/",
    thumbnail:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/3b360d202712531.668b04d6cbcf0.png",
      linkedin: "",
      github:"",
      portfolio:"",
  },

  {
    type: "website",
    title: "Landing Page by rakshit",
    link: "https://arcane-devs.vercel.app",
    thumbnail:
      "https://i.postimg.cc/NMLjBpk4/image-2024-07-18-170418431.png",
      linkedin: "",
      github:"",
      portfolio:"",
  },
  {
    type: "website",
    title: "Portfolio Website by Aditya",
    link: "https://www.adityakanu.com",
    thumbnail:
      "https://i.postimg.cc/Gmyc74hM/image-2024-07-18-165620687.png",
      linkedin: "",
      github:"",
      portfolio:"",
  },
  {
    type: "website",
    title: "Portfolio Website by Ankit",
    link: "https://ankitpatnaik.vercel.app",
    thumbnail:
      "https://i.postimg.cc/hPTf3ZjW/image-2024-07-18-170023783.png",
      linkedin: "",
      github:"",
      portfolio:"",
  },
  {
    type: "website",
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://i.postimg.cc/NMLjBpk4/image-2024-07-18-170418431.png",
      linkedin: "",
      github:"",
      portfolio:"",
  },
];
