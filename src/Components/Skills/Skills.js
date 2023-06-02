import './Skills.css';
import languages from '../../data/languages.json';
import framworks from '../../data/frameworks.json';
import tools from '../../data/tools.json';

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
            {languages.map((language) => (
              <li key={language.name}>
                <img src={language.image} alt={language.name} />
                <span>{language.name}</span>
              </li>
            ))}
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
            {framworks.map((framwork) => (
              <li key={framwork.name}>
                <img src={framwork.image} alt={framwork.name} />
                <span>{framwork.name}</span>
              </li>
            ))}
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
            {tools.map((tool) => (
              <li key={tool.name}>
                <img src={tool.image} alt={tool.name} />
                <span>{tool.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
