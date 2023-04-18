import './Work.css';
import projects from '../../data/projects.json';

function Work() {
  return (
    <div className="work" id="work">
      <div className="title">
        <h2>MY WORK</h2>
        <span className="underline">
          <span className="animation" />
        </span>
      </div>

      <div className="work-cards">
        {projects.map((project) => (
          <div className="work-card" key={project.name}>
            <div className="project-image">
              <img src={project.featuredImage} alt="project" />
              <div className="live-source-icons">
                {project.linkToLive != null
                && (
                <a className="live-button" href={project.linkToLive} target="_blank" rel="noreferrer">
                  <i className="fas fa-circle-notch" />
                </a>
                )}
                <a className="source-button" href={project.linkToSource} target="_blank" rel="noreferrer">
                  <i className="fab fa-github" />
                </a>
              </div>
            </div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
