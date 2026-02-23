import { ChevronDown } from "lucide-react";
import logo from "./logo.png";
import profile from "./profile.png";
import work from "./work.webp";
import work1 from "./work1.webp";
import work2 from "./work2.webp";
import marketing from "./marketing.svg";
import website from "./website.svg";
import tools from "./tools.svg";

import Instagram from "./instagram.svg?react";
import LinkedIn from "./linkedin.svg?react";
import Email from "./email.svg?react";

import astro from "./Background.png";

export const img = {
  logo,
  profile,
  work,
  work1,
  work2,
  astro,
};

export const icons = {
  chevronDown: ChevronDown,
};

export const svg = {
  marketing,
  website,
  tools,
  Instagram,
  LinkedIn,
  Email,
};

export const services = [
  {
    id: 1,
    card: {
      icon: website,
      header: "Building or redesigning your website",
      description:
        "Your website, unique and designed to present you perfectly.",
      buttonText: "Build My Website",
      image: work,
    },
  },
  {
    id: 2,
    card: {
      icon: tools,
      header: "Continuous support and care for your website.",
      description:
        "Keeping your website updated, protected, and running smoothly.",
      buttonText: "Testimonials",
      image: work2,
    },
  },
  {
    id: 3,
    card: {
      icon: marketing,
      header: "Logo design, marketing, and other services.",
      description:
        "I can assist with proper social media setup and managing your advertising campaigns.",
      buttonText: "Prices",
      image: work1,
    },
  },
];
