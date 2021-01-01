import React from "react";

import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaNodeJs  } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiPostgresql, SiJest, SiAirbnb, SiJquery, SiTypescript } from "react-icons/si";
import nextjs from "../svg/raw/nextjs.svg"

export const SkillList = [
  {
    name: "React",
    logo: <FaReact className="w-16 h-16" style={{ color: "#00b7ff" }} />,
  },
  {
    name: "JavaScript",
    logo: <DiJavascript className="w-16 h-16" style={{ color: "#ddb440" }} />,
  },
  {
    name: "NodeJS",
    logo: <FaNodeJs className="w-16 h-16" style={{ color: "#6cc24a" }} />,
  },
  {
    name: "NextJS",
    logo: <img className="w-16 h-16" src={nextjs} alt="nextjs icon" />,
  },
  {
    name: "TypeScript",
    logo: <SiTypescript className="w-16 h-16" style={{ color: "#007ACC" }} />,
  },
  {
    name: "Jest",
    logo: <SiJest className="w-16 h-16" style={{ color: "A0475A" }} />,
  },
  {
    name: "Enzyme",
    logo: <SiAirbnb className="w-16 h-16" style={{ color: "#FF585D" }} />,
  },
  {
    name: "PostgreSQL",
    logo: <SiPostgresql className="w-16 h-16" style={{ color: "#008bb9" }} />
  },
  {
    name: "CSS3",
    logo: <FaCss3Alt className="w-16 h-16" style={{ color: "#258ec8" }} />,
  },
  {
    name: "HTML 5",
    logo: <FaHtml5 className="w-16 h-16" style={{ color: "#dc4d25" }} />,
  },
  {
    name: "jQuery",
    logo: <SiJquery className="w-16 h-16" style={{ color: " #0769AD" }} />,
  },
  {
    name: "GitHub",
    logo: <FaGithub className="w-16 h-16" style={{ color: "#ffffff" }} />,
  },
];
