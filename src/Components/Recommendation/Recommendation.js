import { useRef, useEffect } from 'react';
import './Recommendation.css';
import recommendations from '../../data/recommendations.json';

function Recommendation() {
  const recommendationCards = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const updateHeight = () => {
    const recommendationCardsHeights = [];
    const recommendationCardsChildren = document.querySelectorAll('.recommendation-card');
    for (let i = 0; i < recommendationCardsChildren.length; i += 1) {
      recommendationCardsChildren[i].style.height = 'auto';
      recommendationCardsHeights.push(recommendationCardsChildren[i].offsetHeight);
    }
    const maxHeight = Math.max(...recommendationCardsHeights);
    for (let i = 0; i < recommendationCardsChildren.length; i += 1) {
      recommendationCardsChildren[i].style.height = `${maxHeight}px`;
    }
  };

  useEffect(() => {
    updateHeight();
    window.addEventListener('resize', updateHeight);
    recommendationCards.current.classList.add('smooth-scroll');
  }, []);

  const mouseDown = (e) => {
    isDown = true;
    startX = e.pageX - recommendationCards.current.offsetLeft;
    scrollLeft = recommendationCards.current.scrollLeft;
  };

  const mouseLeave = () => {
    isDown = false;
  };

  const mouseUp = () => {
    isDown = false;
  };

  const mouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - recommendationCards.current.offsetLeft;
    const walk = x - startX;
    recommendationCards.current.classList.remove('smooth-scroll');
    recommendationCards.current.scrollLeft = scrollLeft - walk;
    recommendationCards.current.classList.add('smooth-scroll');
  };

  const extraMovingSpace = () => {
    if (window.innerWidth < 768) {
      return 5;
    }
    if (window.innerWidth < 1200) {
      return 2;
    }
    return 1;
  };

  const goLeft = () => {
    recommendationCards.current.scrollLeft += -document.querySelector('.recommendation-card').offsetWidth - (recommendationCards.current.offsetWidth * extraMovingSpace()) / 100;
  };

  const goRight = () => {
    recommendationCards.current.scrollLeft += document.querySelector('.recommendation-card').offsetWidth + (recommendationCards.current.offsetWidth * extraMovingSpace()) / 100;
  };
  return (
    <div className="recommendation" id="recommendation">
      <div className="title">
        <h2>MY RECOMMENDATION</h2>
        <span className="underline">
          <span className="animation" />
        </span>
      </div>

      <div className="recommendation-container">
        <div className="recommendation-cards" role="button" tabIndex={0} ref={recommendationCards} onMouseDown={mouseDown} onMouseLeave={mouseLeave} onMouseUp={mouseUp} onMouseMove={mouseMove}>
          {recommendations.map((recommendation) => (
            <div className="recommendation-card" key={recommendation.name}>
              <img src={recommendation.image} alt="The person who give the recommendation" />
              <h3>{recommendation.name}</h3>
              <h4>{recommendation.title}</h4>
              <p>{recommendation.description}</p>
            </div>
          ))}
        </div>
        <button className="left" type="button" onClick={goLeft}>
          <div>
            <i className="fas fa-chevron-left fa-2x" />
          </div>
        </button>
        <button className="right" type="button" onClick={goRight}>
          <div>
            <i className="fas fa-chevron-left fa-rotate-180 fa-2x" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Recommendation;
