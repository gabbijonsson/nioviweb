import nioviWordmark from "../assets/word_mark-gray.png";
import nioviPrimary from "../assets/primary_silver.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useFeature } from "@/useFeature";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { features } = useFeature();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-black text-white py-6 px-4 sm:px-6 lg:px-8 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home">
          <img
            src={nioviWordmark}
            alt=""
            className="w-24 h-auto hidden md:block"
          />
          <img src={nioviPrimary} alt="" className="w-32 h-auto md:hidden" />
        </a>
        <h1 className="sr-only text-2xl font-bold">Niovi</h1>
        <div className="md:hidden flex justify-center align-center">
          <button
            onClick={toggleMenu}
            className="text-gray-400 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <ul
          className={`md:flex md:space-x-6 ${
            isMenuOpen ? "block" : "hidden"
          } absolute md:relative top-full left-0 right-0 bg-black md:bg-transparent md:p-0`}
        >
          {features.map((feature) =>
            feature.displayName !== "" && feature.enabled ? (
              <li
                key={feature.name}
                className="leading-[4rem] px-6 hover:bg-gray-900 transition-colors md:border-b md:border-black md:hover:bg-black md:hover:text-gray-400 md:hover:border-b md:hover:border-gray-400"
              >
                <a
                  href={`#${feature.name}`}
                  className="block md:py-0"
                  onClick={toggleMenu}
                >
                  {feature.displayName}
                </a>
              </li>
            ) : null
          )}
        </ul>
      </nav>
    </header>
  );
}
