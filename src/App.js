import React from "react";
import './App.css';
import Intro from './components/Intro';
import About from './components/About';
import ProjectCard from "./components/ProjectCard";

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
          <li>
            <h3>Languages</h3>
            <ul>
              <li>
                Python
              </li>
              <li>
                Javascript
              </li>
              <li>
                Java
              </li>
              <li>
                C++
              </li>
            </ul>
          </li>
          <li>
            <h3>Front-End</h3>
            <ul>
              <li>
                React.js
              </li>
              <li>
                Next.js
              </li>
            </ul>
          </li>
          <li>
            <h3>Back-End</h3>
            <ul>
              <li>
                MongoDB
              </li>
              <li>
                MySQL
              </li>
              <li>
                Firebase
              </li>
            </ul>
          </li>
          <li>
            <h3>Other Tools</h3>
            <ul>
              <li>
                Linux/Unix
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className='Acheivements'>
        <h1>Acheivements</h1>
        <ul>
          <li>2017</li>
          <li>2018</li>
        </ul>
      </div>
      <div className='Footer'>
        <ul>
          <h4>Socials</h4>
          <li>linked in</li>
          <li>github</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
