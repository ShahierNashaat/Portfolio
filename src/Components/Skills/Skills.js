import './Skills.css';

function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="title">
        <h2>MY SKILLS</h2>
        <span className="underline">
          <span className="animation" />
        </span>
      </div>
      <div className="description">
        <div className="languages">
          <div className="title">
            <div className="image-container">
              <img src="/images/code-solid.svg" alt="Languages" />
            </div>
            <h3>Languages</h3>
          </div>
          <ul className="icons">
            <li>
              <img src="/images/html.png" alt="HTML5" />
              <span>HTML5</span>
            </li>
            <li>
              <img src="/images/css.svg" alt="CSS3" />
              <span>CSS3</span>
            </li>
            <li>
              <img src="/images/JavaScript-logo.png" alt="JavaScript" />
              <span>JavaScript</span>
            </li>
            <li>
              <img src="/images/Ruby_logo.png" alt="Ruby" />
              <span>Ruby</span>
            </li>
            <li>
              <img src="/images/C-Sharp.png" alt="C#" />
              <span>C#</span>
            </li>
            <li>
              <img src="/images/php.png" alt="PHP" />
              <span>PHP</span>
            </li>
          </ul>
        </div>
        <div className="frameworks">
          <div className="title">
            <div className="image-container">
              <img src="/images/cubes-solid.svg" alt="Frameworks" />
            </div>
            <h3>Frameworks</h3>
          </div>
          <ul className="icons">
            <li>
              <img src="/images/Bootstrap.png" alt="Bootstrap" />
              <span>Bootstrap</span>
            </li>
            <li>
              <img src="/images/React.png" alt="ReactJS" />
              <span>ReactJS</span>
            </li>
            <li>
              <img src="/images/Angular.png" alt="Angular" />
              <span>Angular</span>
            </li>
            <li>
              <img src="/images/Ruby_On_Rails.png" alt="Ruby on Rails" />
              <span>Ruby on Rails</span>
            </li>
            <li>
              <img src="/images/NET_Core.png" alt=".Net Core" />
              <span>.Net Core</span>
            </li>
            <li>
              <img src="/images/Laravel.png" alt="Laravel" />
              <span>Laravel</span>
            </li>
          </ul>
        </div>
        <div className="tools">
          <div className="title">
            <div className="image-container">
              <img src="/images/tools-solid.svg" alt="Tools" />
            </div>
            <h3>Tools</h3>
          </div>
          <ul className="icons">
            <li>
              <img src="/images/terminal.png" alt="Terminal" />
              <span>Terminal</span>
            </li>
            <li>
              <img src="/images/Git.png" alt="Git" />
              <span>Git</span>
            </li>
            <li>
              <img src="/images/github.png" alt="GitHub" />
              <span>GitHub</span>
            </li>
            <li>
              <img src="/images/gitlab.png" alt="GitLab" />
              <span>GitLab</span>
            </li>
            <li>
              <img src="/images/rspec.png" alt="Rspec" />
              <span>Rspec</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
