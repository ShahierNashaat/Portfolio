import './Home.css';
import Headline from '../../Components/Headline/Headline';
import About from '../../Components/About/About';
import Skills from '../../Components/Skills/Skills';
import Experience from '../../Components/Experience/Experience';
import Work from '../../Components/Work/Work';
import Recommendation from '../../Components/Recommendation/Recommendation';
import Contact from '../../Components/Contact/Contact';

function Home() {
  return (
    <>
      <Headline />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Recommendation />
      <Contact />
    </>
  );
}

export default Home;
