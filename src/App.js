import React from "react";
import './App.css';
import Intro from './components/Intro';
import About from './components/About';
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import ListItem from "./components/ListItem";
import TechCard from "./components/TechCard";
import Acheivements from "./components/Acheivements";

function App() {
  return (
    <div className="App">
      <div className="Intro">
        <Intro name={"Kenneth Dao"} desc={"Description here"} btnDesc={"Link to here"} url={"/"}/>
      </div>
      <div className='About'>
        <About desc={"Desc goes here"} />
      </div>
      <div className='Projects'>
        <h1>Projects</h1>
        <ul>
          <li>
            <ProjectCard projectName={"this project"} desc={"here is desc"}/>
          </li>
          <li>
            <ProjectCard projectName={"example proj 2"} desc={"prob make a list and create these components on the fly"} />
          </li>
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
