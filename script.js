const hamburger = document.querySelector('header .mobile-version a');
const mobileMenu = document.querySelector('header .mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.remove('display-none');
});

const closeMobileMenu = document.querySelector('header .mobile-menu .close a');

closeMobileMenu.addEventListener('click', () => {
  mobileMenu.classList.add('display-none');
});

const MobileMenuLinks = document.querySelectorAll('header .mobile-menu ul li a');

for (let i = 0; i < MobileMenuLinks.length; i += 1) {
  MobileMenuLinks[i].addEventListener('click', () => {
    mobileMenu.classList.add('display-none');
  });
}

const projectsArr = [
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: 'images/Img-Plaholder.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript'],
    linkToLive: '#',
    linkToSource: '#',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: 'images/Img-Plaholder.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript'],
    linkToLive: '#',
    linkToSource: '#',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: 'images/Img-Plaholder.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript'],
    linkToLive: '#',
    linkToSource: '#',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: 'images/Img-Plaholder.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript'],
    linkToLive: '#',
    linkToSource: '#',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: 'images/Img-Plaholder.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript'],
    linkToLive: '#',
    linkToSource: '#',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: 'images/Img-Plaholder.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript'],
    linkToLive: '#',
    linkToSource: '#',
  },
];

const projectsDetailsBtns = document.querySelectorAll('.work .cards .card a');

for (let i = 0; i < projectsDetailsBtns.length; i += 1) {
  projectsDetailsBtns[i].addEventListener('click', () => {
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
      });
    }
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