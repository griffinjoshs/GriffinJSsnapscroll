const navbar = document.querySelector("nav");
const menu = document.getElementById("menu");
const hamburgerIcon =
  "<ion-icon name='menu-outline' onclick='displayMenu()'></ion-icon>";
const closeIcon =
  "<ion-icon name='close-outline' onclick='exitMenu()'></ion-icon>";
const scrollTopIcon = '<ion-icon name="arrow-up-circle-outline"></ion-icon>';

window.onload = function () {
  console.log(window);
  window.onscroll = function () {
    console.log("eferwefwe");
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
      <img src="./assets/images/grifflogobold.svg" height="80" width="80" style='margin-right: 5px;'>
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
