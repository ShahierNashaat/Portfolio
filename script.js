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
