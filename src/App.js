import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Intro">
        <h1>Kenneth Dao</h1>
        <p>Description is here</p>
        <button>Link me to LinkedIn</button>
      </div>
      <div className='About'>
        <h1>About Me</h1>
        <p>Description here</p>
      </div>
      <div className='Projects'>
        <h1>Projects</h1>
        <ul>
          <li>
            <h3>Project1</h3>
            <p>Project Description</p>
            <button>code</button>
            <button>source</button>
          </li>
          <li>
            <h3>Project2</h3>
            <p>Project Description</p>
            <button>code</button>
            <button>source</button>
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
