import { Code, Database, Globe, Cpu } from "lucide-react";

export type Person = {
  name: string;
  specialty: string;
  description: string;
  imgUrl: string;
  skills: string[];
  contact: {
    linkedin: string;
    email: string;
  };
};

const people: Person[] = [
  {
    name: "Mommo Tabatabai",
    specialty: "Tech Recruiter and Talent Acquisition Specialist",
    description: "Can find a needle in a haystack, blindfolded.",
    imgUrl: "https://niovi.se/img/Mommo-web.png",
    skills: ["Talent Sourcing", "Interviewing", "Networking"],
    contact: {
      linkedin: "https://linkedin.com/",
      email: "mailto:hello@niovi.se",
    },
  },
  {
    name: "Martin Woxneryd",
    specialty: "Software Craftsman",
    description: "Writes code so clean, you could eat off it.",
    imgUrl: "https://niovi.se/img/Martin-web.png",
    skills: ["Clean Code", "Refactoring", "Test-Driven Development"],
    contact: {
      linkedin: "https://linkedin.com/",
      email: "mailto:hello@niovi.se",
    },
  },
  {
    name: "Magnus Härlin",
    specialty: "Über senior developer",
    description: "Knows more languages than a UN translator.",
    imgUrl: "https://niovi.se/img/Magnus-web.png",
    skills: ["JavaScript", "Python", "C++", "Java"],
    contact: {
      linkedin: "https://linkedin.com",
      email: "mailto:hello@niovi.se",
    },
  },
  {
    name: "Lars Göransson",
    specialty: "Epic senior developer",
    description: "Writes code so efficient, it runs on good vibes alone.",
    imgUrl: "https://niovi.se/img/Lars-web.png",
    skills: ["Performance Optimization", "System Architecture", "Scalability"],
    contact: {
      linkedin: "https://linkedin.com",
      email: "mailto:hello@niovi.se",
    },
  },
  {
    name: "Kristoffer Norén",
    specialty: "Financial WIZARD",
    description: "Turns coffee into secure financial systems.",
    imgUrl: "https://niovi.se/img/Koffe-web.png",
    skills: ["Financial Modeling", "Risk Management", "Blockchain"],
    contact: {
      linkedin: "https://linkedin.com",
      email: "mailto:hello@niovi.se",
    },
  },
];

const menuItems = [
  { name: "about", displayName: "About", enabled: true },
  { name: "expertise", displayName: "Expertise", enabled: true },
  { name: "team", displayName: "Team", enabled: true },
  { name: "contact", displayName: "Contact", enabled: true },
];

const copy = {
  heroFirstLine: "Elevate your team",
  heroSecondLine: "- with Niovi",
  heroSubtext:
    "Niovi brings together a team of seasoned software development professionals, dedicated to driving your projects forward with industry-leading expertise and tailored solutions.",
  heroBtnContact: "Let's Connect",
  heroBtnExpertise: "Our Expertise",
  sectionAboutTitle: "About Niovi",
  sectionAboutText:
    "We are a network of Gothenburg's most senior developers, bringing vast experience from diverse technology fields to solve your most complex challenges. Our team is dedicated to delivering high-quality solutions that drive your projects forward. We are passionate about technology and committed to helping you succeed.",
  sectionAboutLocation: "Gothenburg, Sweden",
  sectionExpertiseTitle: "Our Expertise",
  sectionExpertiseItems: [
    {
      name: "Software Achitecture",
      description: "Designing scalable and maintainable systems",
      icon: <Code size={32} />,
    },
    {
      name: "Big Data Solutions",
      description: "Handling and analyzing large-scale data",
      icon: <Database size={32} />,
    },
    {
      name: "Web Technologies",
      description: "Building modern, responsive web applications",
      icon: <Globe size={32} />,
    },
    {
      name: "AI & Machine Learning",
      description: "Implementing intelligent solutions",
      icon: <Cpu size={32} />,
    },
  ],
  sectionTeamTitle: "We are Niovi",
  sectionTeamFooterTitle: "Key Skills 🪄✨",
  sectionContactTitle: "Get in Touch",
  sectionContactText:
    "We would love to hear from you! Reach out to us to discuss how we can help you with your next project.",
  sectionContactEmail: "hello@niovi.se",
  sectionFooterCopyright: "2024 Niovi. All rights reserved.",
};

export const useTextResources = () => {
  return { people, menuItems, copy };
};
