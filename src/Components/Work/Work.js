import './Work.css';
import projects from '../../data/projects.json';

function Work() {
  const openSourceCodeLinks = (links) => {
    links.forEach((link) => {
      window.open(link);
    });
  };
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
                <button className="source-button" type="button" onClick={() => openSourceCodeLinks(project.linkToSource)} target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github fa-2x" />
                </button>
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
