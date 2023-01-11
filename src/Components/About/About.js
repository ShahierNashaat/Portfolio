import './About.css';

function About() {
  const downloadResume = () => {
    fetch('Shahier Nashaat Resume.pdf').then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        const alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Shahier Nashaat Resume.pdf';
        alink.click();
      });
    });
  };

  return (
    <div className="about" id="about">
      <div className="title">
        <h2>ABOUT ME</h2>
        <span className="underline">
          <span className="animation" />
        </span>
      </div>
      <div className="description">
        <p>
          I&apos;m a back-end developer at CRESSOFT CONSULTANCY,
          I am working on an E-Commerce project that will give me an experience in online payments,
          how the products are saved, how to develop the customer ordering process,
          and finally the login integration like enabling
          the user to log in with his google account.
        </p>
        <p>
          I have a degree in Computer Science with a GPA of 3.07,
          got first place in Diploma in Professional Web Development,
          completed the full-stack development program at Microverse,
          a remote software development school that uses pair programming
          and real-world projects to teach web development,
          also took an internship at APEX GAMES company and built their website,
          all of them gave me experience in object-oriented programming,
          data structure, and algorithm, writing clean code, teamwork,
          commitment to deadlines, working remotely and pair programming.
        </p>
        <p>
          When I was in high school, I always loved math and solved math problems
          in my spare time and when I started programming, my love of math shifted
          from math to programming and I never found myself happier
          than when I solved programming challenges.
        </p>
        <p>
          I love coding specifically because I love the problem-solving aspect of it.
          I&apos;m the sort of person who does DSA problems for fun.
        </p>
        <p>
          In my spare time, I like to watch movies, series,
          and youtube videos for gamers and I also like to draw in my spare time.
        </p>
      </div>
      <div className="download-resume">
        <button type="button" className="download-resume-btn" onClick={downloadResume}><span>DOWNLOAD RESUME</span></button>
      </div>
    </div>
  );
}

export default About;
