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
    projectShortDescription={<Text tid="oblSubheading" />}
    aboutProjectText={
      <div>
        <Text tid="aboutObl1" />
        <br /> <br />
        <Text tid="aboutObl2" />
        <br /> <br />
        <Text tid="aboutObl3" />
        <br /> <br />
        <Text tid="aboutObl4" />
      </div>
    }
    features={[
      <Text tid="oblFeature1" />,
      <Text tid="oblFeature2" />,
      <Text tid="oblFeature3" />,
      <Text tid="oblFeature4" />,
      <Text tid="oblFeature5" />,
      <Text tid="oblFeature6" />,
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
    projectShortDescription={<Text tid="growopSubheading" />}
    aboutProjectText={
      <div>
        <Text tid="aboutGrowOp1" />
        <br /> <br />
        <Text tid="aboutGrowOp2" />
        <br /> <br />
        <Text tid="aboutGrowOp3" />
      </div>
    }
    features={[
      <Text tid="growopFeature1" />,
      <Text tid="growopFeature2" />,
      <Text tid="growopFeature3" />,
      <Text tid="growopFeature4" />,
      <Text tid="growopFeature5" />,
    ]}
    techStack={[
      {
        name: "React Native",
        logo: <img src={ReactNative} className="w-12 h-12" alt="React native Logo" />,
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
    userLogin={"CNorris"}
    passwordLogin={"Password123!"}
    projectShortDescription={<Text tid="travSubheading" />}
    aboutProjectText={
      <div>
        <Text tid="aboutTrav1" />
        <br /> <br />
        <Text tid="aboutTrav2" />
        <br /> <br />
        <Text tid="aboutTrav3" />
      </div>
    }
    features={[
      <Text tid="travFeature1" />,
      <Text tid="travFeature2" />,
      <Text tid="travFeature3" />,
      <Text tid="travFeature4" />,
      <Text tid="travFeature5" />,
      <Text tid="travFeature6" />,
      <Text tid="travFeature7" />,
      <Text tid="travFeature8" />,
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
    hasLoginCredentials={true}
    userLogin={"CNorris"}
    passwordLogin={"Password123!"}
    githubLink={"https://github.com/jclk86/Stocked-Client"}
    githubLink2={"https://github.com/jclk86/Stocked-server"}
    liveVersionLink={
      "https://stocked-client-end.vercel.app"
    }
    projectShortDescription={<Text tid="stockSubheading" />}
    aboutProjectText={
      <div>
        <Text tid="aboutStock1" />
        <br /> <br />
        <Text tid="aboutStock2" />
        <br /> <br />
        <Text tid="aboutStock3" />
      </div>
    }
    features={[
      <Text tid="stockFeature1" />,
      <Text tid="stockFeature2" />,
      <Text tid="stockFeature3" />,
      <Text tid="stockFeature4" />,
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
    projectShortDescription={<Text tid="livableSubheading" />}
    aboutProjectText={
      <div>
        <Text tid="aboutLivable1" />
        <br /> <br />
        <Text tid="aboutLivable2" />
        <br /> <br />
        <Text tid="aboutLivable3" />
      </div>
    }
    features={[
      <Text tid="livableFeature1" />,
      <Text tid="livableFeature2" />,
      <Text tid="livableFeature3" />,
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
    projectShortDescription={<Text tid="quizSubheading" />}
    aboutProjectText={
      <div>
        <Text tid="aboutQuiz1" />
      </div>
    }
    features={[
      <Text tid="quizFeature1" />,
      <Text tid="quizFeature2" />,
      <Text tid="quizFeature3" />,
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
