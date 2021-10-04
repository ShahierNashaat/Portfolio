const hamburger = document.querySelector('.mobile-version');
const menu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  menu.classList.remove('display-none');
});

const cross = document.querySelector('header .mobile-menu .close a');

cross.addEventListener('click', () => {
  menu.classList.add('display-none');
});

const links = document.querySelectorAll('header .mobile-menu ul li a');

for (let i = 0; i < links.length; i += 1) {
  links[i].addEventListener('click', () => {
    menu.classList.add('display-none');
  });
}
