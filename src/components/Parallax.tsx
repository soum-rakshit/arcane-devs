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
  },
  {
    type: "profile",
    title: "NITAPlacementConnect",
    link: "https://nita-placement-connect.vercel.app/",
    thumbnail:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/3b360d202712531.668b04d6cbcf0.png",
  },
  {
  type: "profile",
    title: "Dhruv Rohatgi",
    linkedin: "https://www.linkedin.com/in/dhruvrohatgi28/",
    thumbnail:
      "https://media.licdn.com/dms/image/D5603AQFBsGawUE3ZzA/profile-displayphoto-shrink_800_800/0/1693196895781?e=1726099200&v=beta&t=YYdPO8_kU6OnMovGoHR_vIFy7gVZx3FCl9Cbc5ZZBro",
    mail: "mailto:dhruv@gmail.com",
    github: "https://github.com/soum-rakshit",
  },

  {
    type: "profile",
    title: "Aditya Kanu",
    linkedin: "https://www.linkedin.com/in/adityakanu/",
    thumbnail:
      "https://media.licdn.com/dms/image/D4D03AQFu7Blgr4MeTg/profile-displayphoto-shrink_800_800/0/1711030949439?e=1726099200&v=beta&t=VwPqjP_DcPwkk_yjYINxcQ_jeg9khZ6PyiFOfg3xvAg",
      mail: "mailto:aditya@gmail.com",
      github: "https://github.com/soum-rakshit",
      portfolio: "https://www.adityakanu.com",
  },
  {
    type: "website",
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    type: "website",
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
  type: "website",
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    type: "website",
    title: "Soumyajit Das",
    linkedin: "https://www.linkedin.com/in/soumyajit-das-cse/",
    thumbnail:
      "https://media.licdn.com/dms/image/C4E03AQEO9e9KytWVdw/profile-displayphoto-shrink_800_800/0/1647408006963?e=1726099200&v=beta&t=vgEi6JvOlJPhBocGBCNXT2siJ0lIZGSfk_h0S34VodM",
    mail: "mailto:soumyajit@gmail.com",
    github: "https://github.com/soum-rakshit",
  },
  {
    type: "website",
    title: "Soumyadeep Rakshit",
    linkedin: "https://www.linkedin.com/in/soumrakshit/",
    thumbnail:
      "https://media.licdn.com/dms/image/D5603AQGxNLlQL5G5uQ/profile-displayphoto-shrink_400_400/0/1713888600488?e=1726099200&v=beta&t=k0fIDgwrPCBAe-ng4rf883tgDBR2F-uLGhMbtP9uG3I",
    mail: "mailto:rakshit@gmail.com",
    github: "https://github.com/soum-rakshit",
  },
  {
    type: "profile",
    title: "Ankit Patnaik",
    linkedin: "https://www.linkedin.com/in/ankit-patnaik/",
    thumbnail:
      "https://media.licdn.com/dms/image/D4D35AQHDUYBPZzUXqA/profile-framedphoto-shrink_800_800/0/1689437210417?e=1720998000&v=beta&t=3xWyQMzVYsoCvFYZa-RgYLVHDQB_b_eDR1xUQzGPnVM",
    mail: "mailto:patnaik@gmail.com",
    github: "https://github.com/soum-rakshit",
  },
  
  {
    type: "website",
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    type: "website",
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    type: "website",
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    type: "website",
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    type: "website",
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];
