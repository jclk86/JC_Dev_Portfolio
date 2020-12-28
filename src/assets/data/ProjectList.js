import React from "react";
import DefaultProject from "../../components/Projects/DefaultProject";
import { Text } from "../../components/Multilanguage/Text";

//Icons
import { FaReact, FaCss3Alt, FaHtml5, FaNodeJs } from "react-icons/fa";
import { SiPostgresql, SiJest, SiAirbnb, SiJquery, SiGooglemaps } from "react-icons/si";
import { DiJavascript } from "react-icons/di";

//Pictures
import mmaLogin from "../pictures/MakeMeAwesome/mmaLogin.png";
import mmaOverview from "../pictures/MakeMeAwesome/mmaOverview.png";
import ksrOverview from "../pictures/KaufmannsRecipeSite/ksrOverview.png";
import ksrBack from "../pictures/KaufmannsRecipeSite/ksrBack.png";
import ltFront from "../pictures/LambertTravel/ltFront.png";
import ltBack from "../pictures/LambertTravel/ltBack.png";
import gcFront from "../pictures/GiphyClone/gcFront.png";
import gcBack from "../pictures/GiphyClone/gcBack.png";

const projectList = [
  <DefaultProject
    name={"Travelist"}
    imageFront={mmaOverview}
    imageBack={mmaLogin}
    githubLink={"https://github.com/th1rst/make-me-awesome"}
    liveVersionLink={"https://kochannek.com/portfolio/make-me-awesome/"}
    hasLoginCredentials={true}
    userLogin={"john@doe.com"}
    passwordLogin={"testuser123"}
    projectShortDescription={<Text tid="mmaSubheading" />}
    aboutProjectText={
      <div>
        <Text tid="aboutMma1" />
        <br /> <br />
        <Text tid="aboutMma2" />
        <br /> <br />
        <Text tid="aboutMma3" />{" "}
        <a
          className="text-blue-400 underline"
          href="https://kochannek.com/portfolio/make-me-awesome-ionic"
          rel="noopener noreferrer"
        >
          App-Version
        </a>{" "}
        <Text tid="aboutMma4" />
      </div>
    }
    features={[
      <Text tid="mmaFeature1" />,
      <Text tid="mmaFeature2" />,
      <Text tid="mmaFeature3" />,
      <Text tid="mmaFeature4" />,
      <Text tid="mmaFeature5" />,
      <Text tid="mmaFeature6" />,
      <Text tid="mmaFeature7" />,
      <Text tid="mmaFeature8" />,
      <Text tid="mmaFeature9" />,
    ]}
    techStack={[
      {
        name: "HTML5",
        logo: <FaHtml5 className="w-12 h-12" style={{ color: "#dc4d25" }} />,
      },
      {
        name: "CSS3",
        logo: <FaCss3Alt className="w-12 h-12" style={{ color: "#258ec8" }} />,
      },
      {
        name: "React 16",
        logo: <FaReact className="w-12 h-12" style={{ color: "#00b7ff" }} />,
      },
      {
        name: "NodeJS",
        logo: <FaNodeJs className="w-12 h-12" style={{ color: "#6cc24a" }} />,
      },
      {
        name: "Jest",
        logo: <SiJest className="w-12 h-12" style={{ color: "A0475A" }} />,
      },
      {
        name: "Enzyme",
        logo: <SiAirbnb className="w-12 h-12" style={{ color: "#FF585D" }} />,
      },
      {
        name: "PostgreSQL",
        logo: <SiPostgresql className="w-12 h-12" style={{ color: "#008bb9" }} />
      }
    ]}
  />,

  <DefaultProject
    name="Stocked"
    imageFront={ksrOverview}
    imageBack={ksrBack}
    githubLink={"https://github.com/th1rst/kaufmanns-recipe-site"}
    liveVersionLink={
      "https://kochannek.com/portfolio/kaufmanns-rezeptsammlung/"
    }
    hasLoginCredentials={false}
    projectShortDescription={<Text tid="krsSubheading" />}
    aboutProjectText={
      <div>
        <Text tid="aboutKrs1" />
        <br /> <br />
        <Text tid="aboutKrs2" />
      </div>
    }
    features={[
      <Text tid="krsFeature1" />,
      <Text tid="krsFeature2" />,
      <Text tid="krsFeature3" />,
      <Text tid="krsFeature4" />,
      <Text tid="krsFeature5" />,
      <Text tid="krsFeature6" />,
      <Text tid="krsFeature7" />,
      <Text tid="krsFeature8" />,
      <Text tid="krsFeature9" />,
    ]}
    techStack={[
      {
        name: "HTML5",
        logo: <FaHtml5 className="w-12 h-12" style={{ color: "#dc4d25" }} />,
      },
      {
        name: "CSS3",
        logo: <FaCss3Alt className="w-12 h-12" style={{ color: "#258ec8" }} />,
      },
      {
        name: "React 16",
        logo: <FaReact className="w-12 h-12" style={{ color: "#00b7ff" }} />,
      },
      {
        name: "NodeJS",
        logo: <FaNodeJs className="w-12 h-12" style={{ color: "#6cc24a" }} />,
      },
      {
        name: "Jest",
        logo: <SiJest className="w-12 h-12" style={{ color: "A0475A" }} />,
      },
      {
        name: "Enzyme",
        logo: <SiAirbnb className="w-12 h-12" style={{ color: "#FF585D" }} />,
      },
      {
        name: "PostgreSQL",
        logo: <SiPostgresql className="w-12 h-12" style={{ color: "#008bb9" }} />
      }
    ]}
  />,
  <DefaultProject
    name={"Livable"}
    imageFront={ltFront}
    imageBack={ltBack}
    githubLink={
      "https://github.com/th1rst/learning/tree/master/Projects/lamberttravel"
    }
    liveVersionLink={"https://kochannek.com/portfolio/lamberttravel/"}
    hasLoginCredentials={false}
    projectShortDescription={<Text tid="ltSubheading" />}
    aboutProjectText={
      <div>
        <Text tid="aboutLt1" />
        <br />
        <Text tid="aboutLt2" />
        <br />
        <Text tid="aboutLt3" />
        <br />
        <br />
        <Text tid="aboutLt4" />
      </div>
    }
    features={[
      <Text tid="ltFeature1" />,
      <Text tid="ltFeature2" />,
      <Text tid="ltFeature3" />,
    ]}
    techStack={[
      {
        name: "HTML5",
        logo: <FaHtml5 className="w-12 h-12" style={{ color: "#dc4d25" }} />,
      },
      {
        name: "CSS3",
        logo: <FaCss3Alt className="w-12 h-12" style={{ color: "#258ec8" }} />,
      },
      {
        name: "jQuery",
        logo: <SiJquery className="w-12 h-12" style={{ color: " #0769AD" }} />,
      },
      {
        name: "Vanilla JavaScript",
        logo: <DiJavascript className="w-12 h-12" style={{ color: "#F0DB4F" }} />,
      },
      {
        name: "Google Maps API",
        logo: <SiGooglemaps className="w-12 h-12" style={{ color: "#DD4B3E" }} />,
      },
    ]}
  />,
  <DefaultProject
    name={"Quiz App"}
    imageFront={gcBack}
    imageBack={gcFront}
    githubLink={
      "https://github.com/th1rst/learning/tree/master/Projects/giphyclone"
    }
    liveVersionLink={"https://kochannek.com/portfolio/giphyclone/"}
    hasLoginCredentials={false}
    projectShortDescription={<Text tid="gcSubheading" />}
    aboutProjectText={
      <div>
        <Text tid="aboutGc1" />
        <br />
        <Text tid="aboutGc2" />
        <br />
        <br />
        <Text tid="aboutGc3" />
      </div>
    }
    features={[
      <Text tid="gcFeature1" />,
      <Text tid="gcFeature2" />,
      <Text tid="gcFeature3" />,
    ]}
    techStack={[
      {
        name: "HTML5",
        logo: <FaHtml5 className="w-12 h-12" style={{ color: "#dc4d25" }} />,
      },
      {
        name: "CSS3",
        logo: <FaCss3Alt className="w-12 h-12" style={{ color: "#258ec8" }} />,
      },
      {
        name: "jQuery",
        logo: <SiJquery className="w-12 h-12" style={{ color: " #0769AD" }} />,
      },
      {
        name: "Vanilla JavaScript",
        logo: <DiJavascript className="w-12 h-12" style={{ color: "#F0DB4F" }} />,
      },
    ]}
  />
];

export default projectList;
