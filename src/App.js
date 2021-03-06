import React from "react";
import './App.css';
import Intro from './components/Intro';
import About from './components/About';
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import ListItem from "./components/ListItem";
import TechCard from "./components/TechCard";
import Acheivements from "./components/Acheivements";
import { projects } from "./constants/constants";

function App() {
  let projectElements = projects.map(({id, image, title, description, tags, source, visit}) => (
    <li>
      <ProjectCard projectName={title} id={id} desc={description} codeLink={visit} sourceLink={source} />
    </li>
  ));
  return (
    <div className="App">
      <div className="Intro">
        <h1>Kenneth Dao</h1>
        <Intro desc={"Description here"} btnDesc={"Link to here"} url={"https://www.example.com"}/>
      </div>
      <div className='About'>
        <h1>About Me</h1>
        <About desc={"Desc goes here"} />
      </div>
      <div className='Projects'>
        <h1>Projects</h1>
        <ul>
          {projectElements}
        </ul>
      </div>
      <div className='Technologies'>
        <h1>Technologies</h1>
        <ul>
            <TechCard examples={["Python", "Java", "Javascript", "C++", "Kotlin"]} title={"Languages"} />
            <TechCard examples={["Node.js", "React.js", "Next.js"]} title={"Front-End"} />
            <TechCard examples={["MongoDB", "MySQL", "Firebase"]} title={"Back-End"} />
            <TechCard examples={["Linux/Unix"]} title={"Other Tools"} />
        </ul>
      </div>
      <div className='Acheivements'>
        <Acheivements />
      </div>
      <div className='Footer'>
        <Footer title={"Socials"} />
      </div>
    </div>
  );
}

export default App;
