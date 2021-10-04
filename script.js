let hamburger = document.querySelector('.mobile-version');
let menu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  menu.classList.remove('display-none');
})

let cross = document.querySelector('header .mobile-menu .close a');

cross.addEventListener('click', () => {
  menu.classList.add('display-none');
})

let links = document.querySelectorAll('header .mobile-menu ul li a');
links = Array.from();

for(let i = 0; i<links.length;i++){
    links.addEventListener('click', () => {
    menu.classList.add('display-none');
  })
}
