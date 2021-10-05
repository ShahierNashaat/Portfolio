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

let projectsArr = [
  {
      name: "Multi-Post Stories Gain+Glory",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      featuredImage: "images/Img-Plaholder.png",
      technologies: ["Ruby on Rails", "CSS", "JavaScript"],
      linkToLive: "#",
      linkToSource: "#"
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: "images/Img-Plaholder.png",
    technologies: ["Ruby on Rails", "CSS", "JavaScript"],
    linkToLive: "#",
    linkToSource: "#"
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: "images/Img-Plaholder.png",
    technologies: ["Ruby on Rails", "CSS", "JavaScript"],
    linkToLive: "#",
    linkToSource: "#"
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: "images/Img-Plaholder.png",
    technologies: ["Ruby on Rails", "CSS", "JavaScript"],
    linkToLive: "#",
    linkToSource: "#"
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: "images/Img-Plaholder.png",
    technologies: ["Ruby on Rails", "CSS", "JavaScript"],
    linkToLive: "#",
    linkToSource: "#"
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: "images/Img-Plaholder.png",
    technologies: ["Ruby on Rails", "CSS", "JavaScript"],
    linkToLive: "#",
    linkToSource: "#"
  },
]

const projectsDetailsBtns = document.querySelectorAll(".work .cards .card a");

for (let i = 0; i < projectsDetailsBtns.length; i += 1) {
  projectsDetailsBtns[i].addEventListener("click", ()=>{
      if(screen.width < 992)
      {
          let mobileProjectPopupWindow = document.querySelector(".mobile-project-popup-window");
          let mobileProjectPopupWindowImage = document.querySelector(".mobile-project-popup-window img ");
          let mobileProjectPopupWindowName = document.querySelector(".mobile-project-popup-window h3");
          let mobileProjectPopupWindowTechnologies = document.querySelector(".mobile-project-popup-window ul");
          let mobileProjectPopupWindowDescription = document.querySelector(".mobile-project-popup-window .description");
          let mobileProjectPopupWindowSeeLive = document.querySelector(".mobile-project-popup-window .see-live");
          let mobileProjectPopupWindowSeeSource = document.querySelector(".mobile-project-popup-window .see-source");
          let mobileProjectPopupWindowCloseBtn = document.querySelector(".mobile-project-popup-window .close-popup-window");

          mobileProjectPopupWindowImage.src = projectsArr[i].mobileFeaturedImage;
          mobileProjectPopupWindowName.textContent = projectsArr[i].name;
          mobileProjectPopupWindowTechnologies.innerHTML = '';
          for (let j = 0; j<projectsArr[i].technologies.length; j += 1)
          {
              let technology =  document.createElement('li');
              technology.textContent = projectsArr[i].technologies[j];
              mobileProjectPopupWindowTechnologies.appendChild(technology);
          }
          mobileProjectPopupWindowDescription.textContent = projectsArr[i].description;
          mobileProjectPopupWindowSeeLive.href = projectsArr[i].linkToLive;
          mobileProjectPopupWindowSeeSource.href = projectsArr[i].linkToSource;
          mobileProjectPopupWindow.classList.remove('display-none');
          mobileProjectPopupWindowCloseBtn.addEventListener("click", ()=>{
            mobileProjectPopupWindow.classList.add('display-none');
        });
      }
      else 
      {
          let desktopProjectPopupWindow = document.querySelector(".desktop-project-popup-window");
          let desktopProjectPopupWindowImage = document.querySelector(".desktop-project-popup-window img");
          let desktopProjectPopupWindowName = document.querySelector(".desktop-project-popup-window h3");
          let desktopProjectPopupWindowTechnologies = document.querySelector(".desktop-project-popup-window ul");
          let desktopProjectPopupWindowDescription = document.querySelector(".desktop-project-popup-window .description");
          let desktopProjectPopupWindowSeeLive = document.querySelector(".desktop-project-popup-window .see-live");
          let desktopProjectPopupWindowSeeSource = document.querySelector(".desktop-project-popup-window .see-source");
          let desktopProjectPopupWindowCloseBtn = document.querySelector(".desktop-project-popup-window .close-popup-window");

          desktopProjectPopupWindowImage.src = projectsArr[i].desktopFeaturedImage;
          desktopProjectPopupWindowName.textContent = projectsArr[i].name;
          desktopProjectPopupWindowTechnologies.innerHTML = '';
          for (let j = 0; j<projectsArr[i].technologies.length; j += 1)
          {
              let technology =  document.createElement('li');
              technology.textContent = projectsArr[i].technologies[j];
              desktopProjectPopupWindowTechnologies.appendChild(technology);
          }
          desktopProjectPopupWindowDescription.textContent = projectsArr[i].description;
          desktopProjectPopupWindowSeeLive.href = projectsArr[i].linkToLive;
          desktopProjectPopupWindowSeeSource.href = projectsArr[i].linkToSource;
          desktopProjectPopupWindow.classList.remove('display-none');
          desktopProjectPopupWindowCloseBtn.addEventListener("click", ()=>{
              desktopProjectPopupWindow.classList.add('display-none');
          });
      }
  });
}