const hamburger = document.querySelector('header .mobile-version i');
const mobileMenu = document.querySelector('header .mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.remove('display-none');
  document.querySelector('body').style.overflow = 'hidden';
});

const closeMobileMenu = document.querySelector('header .mobile-menu .close');

closeMobileMenu.addEventListener('click', () => {
  mobileMenu.classList.add('display-none');
  document.querySelector('body').style.overflow = 'scroll';
});

const MobileMenuLinks = document.querySelectorAll('header .mobile-menu ul li a');

for (let i = 0; i < MobileMenuLinks.length; i += 1) {
  MobileMenuLinks[i].addEventListener('click', () => {
    mobileMenu.classList.add('display-none');
    document.querySelector('body').style.overflow = 'scroll';
  });
}

const projectsArr = [
  {
    name: 'COVID Cases',
    description: 'The project for completing the react module in microverse, the project is about displaying the updated data about covid cases in all the countries and in its regions if it was available.',
    featuredImage: 'https://raw.githubusercontent.com/ShahierNashaat/react-capstone/development/src/images/thumb_nail.png',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'ES6', 'React', 'Redux'],
    linkToLive: 'https://covid-cases-shahier.herokuapp.com/',
    linkToSource: 'https://github.com/ShahierNashaat/react-capstone',
  },
  {
    name: 'Space Travelers Hub',
    description: 'In this project, we have built a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    featuredImage: 'https://raw.githubusercontent.com/Taher-web-dev/Space-Travelers-Hub/dev/src/assets/images/overview_animated.gif',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'ES6', 'React', 'Redux'],
    linkToLive: 'https://space-hub-taher.netlify.app/',
    linkToSource: 'https://github.com/Taher-web-dev/Space-Travelers-Hub',
  },
  {
    name: 'Movie Time',
    description: 'The project is for completing the JavaScript module in microverse, the project is about displaying a list of movies that you can like or write a comment to one of them.',
    featuredImage: 'https://raw.githubusercontent.com/ShahierNashaat/javascript-capstone/development/images/app_screenshot.png',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'ES6', 'Webpack', 'Jest'],
    linkToLive: 'https://shahiernashaat.github.io/javascript-capstone/',
    linkToSource: 'https://github.com/ShahierNashaat/javascript-capstone',
  },
  {
    name: 'Complete Course Drawing Academy',
    description: 'The project for HTML5 & CSS3 module in microverse. The project is about an e-learning website for drawing it contains of the home and about pages.',
    featuredImage: 'https://raw.githubusercontent.com/ShahierNashaat/html-css-capstone/master/images/app_screenshot.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    linkToLive: 'https://shahiernashaat.github.io/module1-capstone/',
    linkToSource: 'https://github.com/ShahierNashaat/module1-capstone',
  },
];

const projectsCardsDiv = document.querySelector('.work .cards');

for (let i = 0; i < projectsArr.length; i += 1) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');
  projectsCardsDiv.appendChild(cardDiv);

  const projectImg = document.createElement('img');
  projectImg.setAttribute('src', projectsArr[i].featuredImage);
  projectImg.setAttribute('alt', projectsArr[i].name);
  cardDiv.appendChild(projectImg);

  const textBlockDiv = document.createElement('div');
  textBlockDiv.classList.add('text-block');
  cardDiv.appendChild(textBlockDiv);

  const projectNameH3 = document.createElement('h3');
  projectNameH3.textContent = projectsArr[i].name;
  textBlockDiv.appendChild(projectNameH3);

  const technologiesListUl = document.createElement('ul');
  textBlockDiv.appendChild(technologiesListUl);

  for (let j = 0; j < projectsArr[i].technologies.length; j += 1) {
    const technologyLi = document.createElement('li');
    technologyLi.textContent = projectsArr[i].technologies[j];
    technologiesListUl.appendChild(technologyLi);
  }

  const seeProjectButton = document.createElement('button');
  seeProjectButton.textContent = 'See Project';
  textBlockDiv.appendChild(seeProjectButton);

  seeProjectButton.addEventListener('click', () => {
    if (window.screen.width < 992) {
      const mobileProjectPopupWindow = document.querySelector('.mobile-project-popup-window');
      const mobileProjectPopupWindowImage = document.querySelector('.mobile-project-popup-window img ');
      const mobileProjectPopupWindowName = document.querySelector('.mobile-project-popup-window h3');
      const mobileProjectPopupWindowTechnologies = document.querySelector('.mobile-project-popup-window ul');
      const mobileProjectPopupWindowDescription = document.querySelector('.mobile-project-popup-window .description');
      const mobileProjectPopupWindowSeeLive = document.querySelector('.mobile-project-popup-window .see-live');
      const mobileProjectPopupWindowSeeSource = document.querySelector('.mobile-project-popup-window .see-source');
      const mobileProjectPopupWindowCloseBtn = document.querySelector('.mobile-project-popup-window .close-popup-window');

      mobileProjectPopupWindowImage.src = projectsArr[i].featuredImage;
      mobileProjectPopupWindowName.textContent = projectsArr[i].name;
      mobileProjectPopupWindowTechnologies.innerHTML = '';
      for (let j = 0; j < projectsArr[i].technologies.length; j += 1) {
        const technology = document.createElement('li');
        technology.textContent = projectsArr[i].technologies[j];
        mobileProjectPopupWindowTechnologies.appendChild(technology);
      }
      mobileProjectPopupWindowDescription.textContent = projectsArr[i].description;
      mobileProjectPopupWindowSeeLive.href = projectsArr[i].linkToLive;
      mobileProjectPopupWindowSeeSource.href = projectsArr[i].linkToSource;
      mobileProjectPopupWindow.classList.remove('display-none');
      mobileProjectPopupWindowCloseBtn.addEventListener('click', () => {
        mobileProjectPopupWindow.classList.add('display-none');
        document.querySelector('body').style.overflow = 'scroll';
      });
    } else {
      const desktopProjectPopupWindow = document.querySelector('.desktop-project-popup-window');
      const desktopProjectPopupWindowImage = document.querySelector('.desktop-project-popup-window img');
      const desktopProjectPopupWindowName = document.querySelector('.desktop-project-popup-window h3');
      const desktopProjectPopupWindowTechnologies = document.querySelector('.desktop-project-popup-window ul');
      const desktopProjectPopupWindowDescription = document.querySelector('.desktop-project-popup-window .description');
      const desktopProjectPopupWindowSeeLive = document.querySelector('.desktop-project-popup-window .see-live');
      const desktopProjectPopupWindowSeeSource = document.querySelector('.desktop-project-popup-window .see-source');
      const desktopProjectPopupWindowCloseBtn = document.querySelector('.desktop-project-popup-window .close-popup-window');

      desktopProjectPopupWindowImage.src = projectsArr[i].featuredImage;
      desktopProjectPopupWindowName.textContent = projectsArr[i].name;
      desktopProjectPopupWindowTechnologies.innerHTML = '';
      for (let j = 0; j < projectsArr[i].technologies.length; j += 1) {
        const technology = document.createElement('li');
        technology.textContent = projectsArr[i].technologies[j];
        desktopProjectPopupWindowTechnologies.appendChild(technology);
      }
      desktopProjectPopupWindowDescription.textContent = projectsArr[i].description;
      desktopProjectPopupWindowSeeLive.href = projectsArr[i].linkToLive;
      desktopProjectPopupWindowSeeSource.href = projectsArr[i].linkToSource;
      desktopProjectPopupWindow.classList.remove('desktop-display-none');
      desktopProjectPopupWindowCloseBtn.addEventListener('click', () => {
        desktopProjectPopupWindow.classList.add('desktop-display-none');
        document.querySelector('body').style.overflow = 'scroll';
      });
    }
    document.querySelector('body').style.overflow = 'hidden';
  });
}

function showMessage(input, message) {
  const msg = input.parentNode.parentNode.parentNode.querySelector('p');
  msg.innerText = message;
  msg.className = 'error';
}

function showError(input, message) {
  showMessage(input, message);
}

function validateEmail(input, lowercaseMsg) {
  let i = 0;
  let character = '';
  while (i <= input.value.length) {
    character = input.value.charAt(i);
    if (character !== character.toLowerCase()) {
      showError(input, lowercaseMsg);
      return false;
    }
    i += 1;
  }
  return true;
}

const form = document.forms[0];
const fullName = form.elements.user_name;
const email = form.elements.user_email;
const msg = form.elements.user_msg;

const EmailLowerCase = 'Please enter your email in lowercase';

form.addEventListener('submit', (event) => {
  if (!validateEmail(email, EmailLowerCase)) {
    event.preventDefault();
  }
});

function setFormData() {
  const stringFormData = localStorage.getItem('formDate');
  const formData = JSON.parse(stringFormData);
  fullName.value = formData.name;
  email.value = formData.email;
  msg.value = formData.message;
}

function createLocalStorageFormData() {
  const formData = {
    name: fullName.value,
    email: email.value,
    message: msg.value,
  };
  const stringFormData = JSON.stringify(formData);
  localStorage.setItem('formDate', stringFormData);
  setFormData();
}

if (!localStorage.getItem('formDate')) {
  createLocalStorageFormData();
} else {
  setFormData();
}

fullName.addEventListener('blur', () => {
  let stringFormData = localStorage.getItem('formDate');
  const formData = JSON.parse(stringFormData);
  formData.name = fullName.value;
  stringFormData = JSON.stringify(formData);
  localStorage.setItem('formDate', stringFormData);
});

email.addEventListener('blur', () => {
  let stringFormData = localStorage.getItem('formDate');
  const formData = JSON.parse(stringFormData);
  formData.email = email.value;
  stringFormData = JSON.stringify(formData);
  localStorage.setItem('formDate', stringFormData);
});

msg.addEventListener('blur', () => {
  let stringFormData = localStorage.getItem('formDate');
  const formData = JSON.parse(stringFormData);
  formData.message = msg.value;
  stringFormData = JSON.stringify(formData);
  localStorage.setItem('formDate', stringFormData);
});

window.addEventListener('scroll', () => {
  const aboutMeCards = document.querySelector('.about-me .cards');
  const aboutMeCardsPosition = aboutMeCards.offsetTop - 900;
  const topOfWindow = window.scrollY;

  if (aboutMeCardsPosition <= topOfWindow) {
    aboutMeCards.style.animationPlayState = 'running';
  } else {
    aboutMeCards.style.animationPlayState = 'paused';
  }
});