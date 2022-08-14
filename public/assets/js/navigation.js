
// -------------------------------------------------------------------------------------------------------------------------
// navbar
// -------------------------------------------------------------------------------------------------------------------------


const navbar = document.querySelector("nav");
const navLogo = document.getElementById('navbar-logo')
const menu = document.getElementById("menu");
const hamburgerIcon =
  "<ion-icon name='menu-outline' onclick='displayMenu()'></ion-icon>";
const closeIcon =
  "<ion-icon name='close-outline' onclick='exitMenu()'></ion-icon>";
const scrollTopIcon = '<ion-icon name="arrow-up-circle-outline"></ion-icon>';

window.onload = function () {
  // console.log(window);
  window.onscroll = function () {
    if (window.scrollY > 300) {
      navbar.classList.add("nav-active");
    } else {
      navbar.classList.remove("nav-active");
    }
  };
};

const loadnav = () => {
  navbar.innerHTML += `
    <div class="nav-left" onclick='backHome()'>
      <img src="./assets/images/grifflogobold.svg" height="80" width="80" id='navbar-logo' style='margin-right: 5px;'>
      <div class="name-logo">
          <h2>Griffin</h2>
      </div>
  </div>
  <div class="nav-right">
 <button class='icon' id='hamburger'>
 ${hamburgerIcon}
 </button>
 <button class='icon hide' id='close'>
 ${closeIcon}
 </button>
 <button class='icon hide' id='scrollTop'>
 ${scrollTopIcon}
 </button>
 </div>`;
};

// const setTurnAnimation = () => {
//   navLogo.classList.add('rotate-vert-center')
// }

// navLogo.addEventListener('mouseover', setTurnAnimation)

const loadMenu = () => {
  menu.innerHTML += `<ul>
   <li onclick='backHome()'>Home</li>
   <li onclick='goToContact()'>Contact</li>
   <li onclick='goToHire()'>Hire Me</li>
   <li onclick='goToServices()'>Services</li>
 </ul>`;
};

loadnav();
loadMenu();


// -------------------------------------------------------------------------------------------------------------------------
// navigation
// -------------------------------------------------------------------------------------------------------------------------


// much of the variables are declared on the navbar page
const hambButton = document.getElementById("hamburger");
const closeButton = document.getElementById("close");
const clearArea = Array.from(document.querySelectorAll(".clear-for-menu"));
// let pageID;

const hideUnderMenu = (element) => {
  element.classList.add("hide");
};

const showUnderMenu = (element) => {
  element.classList.remove("hide");
};

const PageSwitchAnimation = () => {
  document.getElementById("menu").classList.add("hide");
  clearArea.forEach(hideUnderMenu);
  document.body.classList.add("color-slide");
  document.querySelector(".icon").classList.add("spin");
};

const resetAnimation = () => {
  document.body.classList.remove("color-slide");
};

const displayMenu = () => {
  PageSwitchAnimation();
  setTimeout(() => {
    document.getElementById("menu").classList.remove("hide");
    document.getElementById("hamburger").classList.add("hide");
    document.getElementById("close").classList.remove("hide");
    resetAnimation();
  }, 2200);
};

const exitMenu = () => {
  PageSwitchAnimation();
  setTimeout(() => {
    document.getElementById("menu").classList.add("hide");
    document.getElementById("hamburger").classList.remove("hide");
    document.getElementById("close").classList.add("hide");
    clearArea.forEach(showUnderMenu);
    resetAnimation();
  }, 2100);
};

const goToPage = (link) => {
  PageSwitchAnimation();
  setTimeout(() => {
    document.getElementById("hamburger").classList.remove("hide");
    document.getElementById("close").classList.add("hide");
    document.querySelector(".icon").classList.remove("spin");
    resetAnimation();
    window.location.href = link;
  }, 2100);
};

const backHome = () => {
  // pageID = 0
  PageSwitchAnimation();
  setTimeout(() => {
    window.location.href = "/";
  }, 2100);
};

const goToContact = () => {
  // pageID = 1
  goToPage("/contact");
};

const goToHire = () => {
  // pageID = 2
  goToPage("/hire");
};

const goToServices = () => {
  // pageID = 3
  goToPage("#services");
};

const goToWebDev = () => {
  // pageID = 4
  goToPage("/webDev");
};

const goToMarketing = () => {
  // pageID = 5
  goToPage("/marketing");
};

// console.log("page ID:" + pageID)

