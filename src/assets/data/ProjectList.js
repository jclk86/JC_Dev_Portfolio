import React from "react";
import DefaultProject from "../../components/Projects/DefaultProject";
import { Text } from "../../components/Multilanguage/Text";

//Icons
import { SiTailwindcss } from "react-icons/si";
import { FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
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
import spFront from "../pictures/StartPage/spFront.png";
import spBack from "../pictures/StartPage/spBack.png";
import ppFront from "../pictures/PizzaPlace/ppFront.png";
import ppBack from "../pictures/PizzaPlace/ppBack.png";
import firebaseLogo from "../pictures/firebaseLogo.png";

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
        name: "React 16",
        logo: <FaReact className="w-12 h-12" style={{ color: "#00b7ff" }} />,
        subtexts: ["React Router", "Context API"],
      },
      {
        name: "Tailwind CSS",
        logo: (
          <SiTailwindcss className="w-12 h-12" style={{ color: "#38b2ac" }} />
        ),
        subtexts: ["Windmill UI", "Rainbow Components"],
      },
      {
        name: "Firebase",
        logo: <img className="w-12 h-12" src={firebaseLogo} alt="firebase" />,
        subtexts: ["Firebase Auth", "Firestore"],
      },
      {
        name: "ApexCharts",
        logo: (
          <img
            className="w-16 h-12"
            src="https://camo.githubusercontent.com/234f6fe1b4fdef71cd8e1f5fbad043093d023dba/68747470733a2f2f617065786368617274732e636f6d2f6d656469612f72656163742d617065786368617274732e706e67"
            alt="apexcharts"
          />
        ),
        subtexts: ["Custom Sorting Algorithm"],
      },
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
        name: "React 16",
        logo: <FaReact className="w-12 h-12" style={{ color: "#00b7ff" }} />,
        subtexts: ["React Router", "Context API"],
      },
      {
        name: "CSS 3",
        logo: <FaCss3Alt className="w-12 h-12" style={{ color: "#258ec8" }} />,
        subtexts: ["Custom CSS", "React-Bootstrap"],
      },
      {
        name: "Contentful",
        logo: (
          <img
            className="w-12 h-12"
            src="https://avatars1.githubusercontent.com/u/472182?s=280&v=4"
            alt="contentful"
          />
        ),
        subtexts: ["Database API"],
      },
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
        name: "React 16",
        logo: <FaReact className="w-12 h-12" style={{ color: "#00b7ff" }} />,
        subtexts: ["React Router", "Context API"],
      },
      {
        name: "CSS 3",
        logo: <FaCss3Alt className="w-12 h-12" style={{ color: "#258ec8" }} />,
        subtexts: ["Custom CSS"],
      },
      {
        name: "Contentful",
        logo: (
          <img
            className="w-12 h-12"
            src="https://avatars1.githubusercontent.com/u/472182?s=280&v=4"
            alt="contentful"
          />
        ),
        subtexts: ["Database API"],
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
        name: "React 16",
        logo: <FaReact className="w-12 h-12" style={{ color: "#00b7ff" }} />,
        subtexts: ["React Router", "Context API"],
      },
      {
        name: "CSS 3",
        logo: <FaCss3Alt className="w-12 h-12" style={{ color: "#258ec8" }} />,
      },
    ]}
  />
];

export default projectList;
