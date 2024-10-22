import SectionAbout from "./components/SectionAbout";
import SectionContact from "./components/SectionContact";
import SectionExpertise from "./components/SectionExpertise";
import SectionHero from "./components/SectionHero";
import SectionTeam from "./components/SectionTeam";

export const useFeature = () => {
  const heroSection = {
    name: "hero",
    displayName: "",
    enabled: true,
    section: <SectionHero />,
  };
  const aboutSection = {
    name: "about",
    displayName: "About",
    enabled: true,
    section: <SectionAbout />,
  };
  const expertiseSection = {
    name: "expertise",
    displayName: "Expertise",
    enabled: true,
    section: <SectionExpertise />,
  };
  const teamSection = {
    name: "team",
    displayName: "Team",
    enabled: true,
    section: <SectionTeam />,
  };
  const contactSection = {
    name: "contact",
    displayName: "Contact",
    enabled: true,
    section: <SectionContact />,
  };

  const features = [
    heroSection,
    aboutSection,
    expertiseSection,
    teamSection,
    contactSection,
  ];

  return {
    heroSection,
    aboutSection,
    expertiseSection,
    teamSection,
    contactSection,
    features,
  };
};
