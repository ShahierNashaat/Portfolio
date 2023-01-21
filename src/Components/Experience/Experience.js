import './Experience.css';
import educationalQualification from '../../data/educational_qualification.json';
import workingExperience from '../../data/working_experience.json';

function Experience() {
  return (
    <div className="experience" id="experience">
      <div className="title">
        <h2>MY EXPERIENCE</h2>
        <span className="underline">
          <span className="animation" />
        </span>
      </div>
      <div className="description">
        <div className="educational-qualification">
          <div className="title">
            <img src="./images/book.svg" alt="Book" />
            <h3>Educational Qualification</h3>
          </div>
          {educationalQualification.map((item) => (
            <div className="education-item" key={item.field}>
              <div className="shapes">
                <div className="inner-shape">
                  <div className="left-line" />
                  <div className="circle" />
                  <div className="right-line" />
                  <div className="down-line" />
                </div>
              </div>
              <div className="duration">
                <span>{`${item.start_year} - ${item.end_year}`}</span>
              </div>
              <div className="content">
                <h4>{item.field}</h4>
                <h5>{item.name}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="working-experience">
          <div className="title">
            <img src="./images/bag.svg" alt="Bag" />
            <h3>Working Experience</h3>
          </div>
          {workingExperience.map((item) => (
            <div className="work-item" key={item.job_title}>
              <div className="shapes">
                <div className="inner-shape">
                  <div className="left-line" />
                  <div className="circle" />
                  <div className="right-line" />
                  <div className="down-line" />
                </div>
              </div>
              <div className="duration">
                <span>{`${item.start_year} - ${item.end_year}`}</span>
              </div>
              <div className="content">
                <h4>{item.job_title}</h4>
                <h5>{item.company}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
