import './Header.css';
import { useRef, useEffect } from 'react';

function Header() {
  const menuRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const aboutOffsetTop = document.querySelector('#about').offsetTop;
      const topOfWindow = window.scrollY;
      if (topOfWindow >= aboutOffsetTop - 300 && headerRef.current.className !== 'fixed') {
        headerRef.current.className = 'fixed';
      } else if (topOfWindow < aboutOffsetTop - 300) {
        headerRef.current.className = '';
      }
    });
  }, []);

  const openMenu = () => {
    menuRef.current.style.top = '0';
    document.body.style.overflowY = 'hidden';
  };

  const closeMenu = () => {
    menuRef.current.style.top = '100vh';
    document.body.style.overflowY = 'scroll';
  };

  const scrollUp = () => {
    window.scrollTo(0, 0);
  };

  const scrollToTheRightPart = (id) => {
    const rightPlaceOffsetTop = document.querySelector(`#${id}`).offsetTop;
    const headerHeight = headerRef.current.offsetHeight;
    if (headerRef.current.className === 'fixed') {
      window.scrollTo(0, rightPlaceOffsetTop - headerHeight - 20);
    } else {
      window.scrollTo(0, rightPlaceOffsetTop - headerHeight - 100);
    }
  };

  return (
    <header ref={headerRef}>
      <button onClick={scrollUp} className="home-link" type="button">
        SHAHIER
        <span className="dot">.</span>
      </button>
      <button className="open-menu" onClick={openMenu} type="button">
        <i className="fas fa-bars fa-2x" />
      </button>
      <div className="menu" ref={menuRef}>
        <button className="close-menu" onClick={closeMenu} type="button">
          <i className="fas fa-times fa-2x" />
        </button>
        <ul>
          <li>
            <button onClick={() => { closeMenu(); scrollToTheRightPart('about'); }} type="button">
              <span>01.</span>
              {' '}
              About
            </button>
          </li>
          <li>
            <button onClick={() => { closeMenu(); scrollToTheRightPart('skills'); }} type="button">
              <span>02.</span>
              {' '}
              Skills
            </button>
          </li>
          <li>
            <button onClick={() => { closeMenu(); scrollToTheRightPart('experience'); }} type="button">
              <span>03.</span>
              {' '}
              Experience
            </button>
          </li>
          <li>
            <button onClick={() => { closeMenu(); scrollToTheRightPart('work'); }} type="button">
              <span>04.</span>
              {' '}
              Work
            </button>
          </li>
          <li>
            <button onClick={() => { closeMenu(); scrollToTheRightPart('recommendation'); }} type="button">
              <span>05.</span>
              {' '}
              Recommendation
            </button>
          </li>
          <li>
            <button onClick={() => { closeMenu(); scrollToTheRightPart('contact'); }} type="button">
              <span>06.</span>
              {' '}
              Contact
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
