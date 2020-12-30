import React from "react";
import DefaultProject from "../../components/Projects/DefaultProject";
import { Text } from "../../components/Multilanguage/Text";

//Icons
import { FaReact, FaCss3Alt, FaHtml5, FaNodeJs } from "react-icons/fa";
import { SiPostgresql, SiJest, SiAirbnb, SiJquery, SiGooglemaps, SiTypescript, SiAndroid } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import Sanity from "../pictures/Sanity.jpg";
import NextJS from "../pictures/NextJS.png";
import Chakra from "../pictures/Chakra.jpg";
import ReactNative from "../pictures/ReactNative.png";
import Redux from "../pictures/Redux.png";
import d3js from "../pictures/d3JS.jpg";

//Pictures
import travelist from "../pictures/Travelist/Travelist.png";
import travelistgithub from "../pictures/Travelist/TravelistGithub.png";
import stocked from "../pictures/Stocked/Stocked.png";
import stockedgithub from "../pictures/Stocked/StockedGithub.png";
import quizapp from "../pictures/QuizApp/QuizApp.jpg"
import quizgithub from "../pictures/QuizApp/QuizGithub.png";
import livable from "../pictures/Livable/Livable.jpg";
import livablegithub from "../pictures/Livable/LivableGithub.png";
import onboardlist from "../pictures/OnboardList/OnboardList.png"
import onboardlistblog from "../pictures/OnboardList/OnboardListBlog.png"
import growoplogin from "../pictures/GrowOp/GrowOPLogin.png";
import growopplant from "../pictures/GrowOp/GrowOpPlant.png";


const projectList = [
  <DefaultProject
    name="OnboardList"
    imageFront={onboardlist}
    imageBack={onboardlistblog}
    liveVersionLink={
      "https://www.onboardlist.com/"
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
        name: "Sanity",
        logo: <img src={Sanity} className="w-12 h-12" alt="Sanity Logo" />,
      },
      {
        name: "NextJS",
        logo: <img src={NextJS} className="w-12 h-12" alt="NextJS Logo" />,
      },
      {
        name: "React 16",
        logo: <FaReact className="w-12 h-12" style={{ color: "#00b7ff" }} />,
      },
      {
        name: "TypeScript",
        logo: <SiTypescript className="w-12 h-12" style={{ color: "#007ACC" }} />,
      },
      {
        name: "Chakra",
        logo: <img src={Chakra} className="w-12 h-12" alt="Chakra Logo" />,
      },
      {
        name: "PostgreSQL",
        logo: <SiPostgresql className="w-12 h-12" style={{ color: "#008bb9" }} />
      }
    ]}
  />,

  <DefaultProject
    name="Grow Op"
    imageFront={growoplogin}
    imageBack={growopplant}
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
        name: "React Native",
        logo: <FaReact className="w-12 h-12" style={{ color: "#00b7ff" }} />,
      },
      {
        name: "Redux",
        logo: <img src={Redux} className="w-12 h-12" alt="Redux Logo" />,
      },
      {
        name: "D3.js",
        logo: <img src={d3js} className="w-12 h-12" alt="D3.js logo" />,
      },
      {
        name: "Android",
        logo: <SiAndroid className="w-12 h-12" style={{ color: "#78C257" }} />,
      },
    ]}
  />,

  <DefaultProject
    name={"Travelist"}
    imageFront={travelist}
    imageBack={travelistgithub}
    githubLink={"https://github.com/jclk86/travelist-client"}
    githubLink2={"https://github.com/jclk86/travelist-server"}
    liveVersionLink={"https://travelist-client-clfox97sa.vercel.app/"}
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
          href="https://travelist-client-clfox97sa.vercel.app/"
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
    imageFront={stocked}
    imageBack={stockedgithub}
    githubLink={"https://github.com/jclk86/Stocked-Client"}
    githubLink2={"https://github.com/jclk86/Stocked-server"}
    liveVersionLink={
      "https://stocked-client-end.vercel.app"
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
    imageFront={livable}
    imageBack={livablegithub}
    githubLink={
      "https://github.com/jclk86/Livable"
    }
    liveVersionLink={"https://jclk86.github.io/Livable/"}
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
        name: "JavaScript",
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
    imageFront={quizapp}
    imageBack={quizgithub}
    githubLink={
      "https://github.com/jclk86/quiz-app"
    }
    liveVersionLink={"https://jclk86.github.io/quiz-app/"}
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
        name: "JavaScript",
        logo: <DiJavascript className="w-12 h-12" style={{ color: "#F0DB4F" }} />,
      },
    ]}
  />
];

export default projectList;
