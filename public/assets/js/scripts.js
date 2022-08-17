// -------------------------------------------------------------------------------------------------------------------------
// pageloader
// -------------------------------------------------------------------------------------------------------------------------

const loader = document.getElementById("pre-load");
const loaderContainer = document.querySelector(".loader-bg");
const blocks = document.querySelector('.blocks')
const block = document.querySelectorAll('.block')
const loaderSection = document.querySelector('.loader-section')
const block1 = document.querySelector('.block-1')

const animateHomeScreen = () => {
  // typing effect
let i = 0;
let txt = "LET ME BUILD YOUR DREAM WEBSITE";
let speed = 50;


const typeWriter = () => {
  if (i < txt.length) {
    document.getElementById("skill").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
  document.querySelector('.nav-left').classList.add('slide-in-blurred-left')
  document.querySelector('.nav-right').classList.add('fade-in')
  document.querySelector('#myName').classList.add('slide-in-elliptic-left-fwd')
  typeWriter();
  document.querySelector('.hero-right img').classList.add('bounce-in-bottom')
  document.querySelector('.hero-button-sec button').classList.add('slide-in-elliptic-left-fwd')
}

  if (CSS.supports('scroll-snap-align: start')) {
      console.log('yep')
  } else {
    console.log('nope')
  }

const destroyLoaderBg = () => {
  // console.log(loaderContainer);
  loaderContainer.style.display = "none";
  // loader.style.display = "none";
  // alert('break') 
  block.forEach(box => {
    box.classList.remove('clean')
    box.classList.add('broken')
    box.classList.add('flip-out-diag-2-tl')
  }, setTimeout(() => {
    blocks.style.display = "none";
    animateHomeScreen()
  }, 1100))
};


// const animateHome = () => {
//   navLogo.classList.add('slide-in-blurred-left')
//   document.querySelector('#myName').classList.add('slide-in-blurred-left')
// }

const loaderToHTML = () => {
  loader.innerHTML += `
<img src="./assets/images/griffinlogo.png" height="300" width="300">
`;
  // sessionStorage.setItem("loaderRan", "true");
};

const block2screen = () => {
  blocks.classList.add('flex')
}

// if (sessionStorage.getItem("loaderRan") == "true") {
  document.querySelector(".loader-bg").style.display = "none";
// } else {
  document.querySelector(".loader-bg").style.display = "flex";
  loaderToHTML();
  setTimeout(() => {
    // closeLoader();
  }, 3000);
// }

loader.addEventListener('animationend', destroyLoaderBg)

// -------------------------------------------------------------------------------------------------------------------------
// card section
// -------------------------------------------------------------------------------------------------------------------------


const ServicesContent = [
  {
    id: 0,
    title: "Web Development",
    text:
      "I am A Rutgers certified Full-Stack Web Developer. However im much more sharp on the front-end side, but I know enough of the back end to build almost any type of website you may need!",
    link: "goToWebDev()",
    icon: "<ion-icon name='code-slash-outline' class='card-icon'></ion-icon>",
    colors: {
      text: "#21aad8",
      textBackground: "black",
    },
  },
  {
    id: 1,
    title: "Digital Marketing",
    text:
      "I am an NJIT certified Digital Marketer with over 3 years of prior experience in the field. My main is content marketing on social media, however I can build any type of funnel you may need!",
    link: "goToMarketing()",
    icon: "<ion-icon name='share-social-outline' class='card-icon'></ion-icon>",
    colors: {
      text: "#fc00ff",
      textBackground: "black",
    },
  },
];

const serviceCards = document.getElementById("cards");
const card = document.querySelector(".card");

const showServiceBoxes = () => {
  serviceCards.innerHTML = "";
  ServicesContent.map((serviceInfo, i) => {
    const buttonID = "button_" + i;
    serviceCards.innerHTML += `
      <div class="service-card" style="background: blue" 
      onclick="${serviceInfo.link}" 
      onmouseover='showButton(${i})' onmouseout='hideButton(${i})'>
        <div class="face face1">
          <div class="content">
            <span class="stars"></span>
            <p>${serviceInfo.text}</p>
          </div>
        </div>
        <div class="face face2">
          <h2>${serviceInfo.icon}</h2>
          <h3>${serviceInfo.title}</h3>
          <button class='hide' id=${buttonID}><ion-icon name="arrow-forward-circle-outline" class='arrow-icon'></ion-icon></button>
        </div>
`;
  });
};

showServiceBoxes();

const showButton = (id) => {
  document.getElementById("button_" + id).classList.remove("hide");
};

const hideButton = (id) => {
  document.getElementById("button_" + id).classList.add("hide");
};


// -------------------------------------------------------------------------------------------------------------------------
// Portfolio
// -------------------------------------------------------------------------------------------------------------------------


const siteInfo = document.getElementById("site-info");
const giantButtonSec = document.querySelector(".giant-button-info");
const slideRight = document.querySelector(".slide-right");
const portfolioBoxSec = document.querySelector(".portfolio-boxes");
const codeIcon =
  "<ion-icon name='code-slash-outline' class='card-icon'></ion-icon>";
// const buttonIcon = document.querySelector('.button-Icon')
const buttonColor = document.querySelector(".portfolio-box button");

const Projects = [
  {
    title: "This Website",
    icon: codeIcon,
    text:
      "This Portfolio Website was built upon regular HTML, CSS, and vanilla Javascript with a node.js backend, MongoDb Database, and hosted on Heroku",
    link: "/",
  },
  {
    title: "i-75 CPA Review Website",
    icon: codeIcon,
    text:
      "Landing page for the #1 CPA Review Course on the Market, built with Wordpress",
    link: "https://cpaexamtutoring.com/",
  },
  {
    title: "TikTok Secret Formula Website",
    icon: codeIcon,
    text:
      "Landing page for the one and only TikTok Super Course teaching you everything on how to go viral on the platform. Built on Wordpress",
    link: "https://cpaexamtutoring.com/",
  },
];

const showProjects = () => {
  portfolioBoxSec.innerHTML = "";
  Projects.map((projectInfo, i) => {
    const buttonID = "button_" + i;
    portfolioBoxSec.innerHTML += `
        <div class="portfolio-box" 
        onclick='${projectInfo.link}'>
        <div class="port-box-left">
        <h3>${projectInfo.title}</h3>
        <p>
        ${projectInfo.text}
        </p>
        <a href='${projectInfo.link}'><button id=${buttonID}>See Website</button></a>
        <br>
      </div>
      <div class="port-box-right">
        <h2>${projectInfo.icon}</h2>
      </div>
      </div>
        `;
  });
};

showProjects();


// -------------------------------------------------------------------------------------------------------------------------
// Testimonials
// -------------------------------------------------------------------------------------------------------------------------


const Testimonials = [
  {
    name: "Darius Clark",
    image: "https://picsum.photos/200/300",
    text: "Griffin didn't just build me a great website, but designs awesome logos, as well as social media posts. His work has resulted in sales multiplying more than my wildest dreams. But most importantly he is super dependable no matter the issue that comes up. I highly recommend this talented kid. 5 stars for sure!",
    weblink: "https://cpaexamtutoring.com/",
    LIlink: "https://www.linkedin.com/in/i75/",
    FBlink: "https://www.facebook.com/darius.clark.54",
  },
  {
    name: "Michael Toohey",
    image: "https://picsum.photos/200/300",
    text: "When Covid started I got very bored and decided to start twitch streaming, however I had no logos or emotes for my stream. That's where Griffin came in, creating me awesome designs I can now use for my platform. Very timely, and very quality. Thanks Griff!",
    weblink: "",
    LIlink: "",
    FBlink: "",
    IGlink: "",
  },
];

const testimonialSection = document.querySelector(".testimonial-section");

const loadTestimonials = () => {
  Testimonials.map((testimonial, i) => {
    testimonialSection.innerHTML += `<div class="testimonial-box">
    <div class="name-area">
      <div class="circle-img" style="background: url(${testimonial.image})"></div>
      <h3>${testimonial.name}</h3>
    </div>
    <div class="text-area">
      <p>${testimonial.text}</p>
    </div>
    <div class='their-socials'>
    <a href=${testimonial.LIlink}><i class="fab fa-linkedin"></i></a>
    <a href=${testimonial.IGlink}><i class="fab fa-instagram"></i></a>
    <a href=${testimonial.FBlink}><i class="fab fa-facebook"></i></a>
    </div>  
    </div>  
`;
  });
};

loadTestimonials();


// -------------------------------------------------------------------------------------------------------------------------
// Footer
// -------------------------------------------------------------------------------------------------------------------------


const footer = document.getElementById('footer')
const email = document.getElementById('user-email')

const loadFooter = () => {
    footer.innerHTML += 
    ` <footer>
    <div class="footer-section">
      <ul class="footer-menu" id="menu1">
        <h3>Services</h3>
        <li class="text" onclick="goToWebDev()">Web Development</li>
        <li class="text" onclick="goToMarketing()">Marketing</li>
      </ul>
      <div class="footer-menu">
        <h3>My Socials</h3>
        <ul class="social-icons" id="footer-socials"></ul>
      </div>
      <ul class="footer-menu">
        <h3>Inquire</h3>
            <li class="text" onclick="goToContact()">
            Contact Me
          </li>
          <li class="text" onclick="goToHire()">
          Hire Me
        </li>
      </ul>
      <div class="footer-menu">
        <h3>Subscribe</h3>
        <div id="footer-form">
          <input type="email" class="input footer-input" placeholder="email address" id="user-email">
          <button type="button" onclick="showModal()">Subscribe</button>
      </div>
    </div>
  </div>
    <div class="footer-bottom">
      <div class="footer-line"></div>
      <h2>© 2022 Griffins Web Services.</h2>
    </div>
  </footer>`
   }
   
   loadFooter()

   // -------------------------------------------------------------------------------------------------------------------------
// Subscribe Modal
// -------------------------------------------------------------------------------------------------------------------------


   const modal = document.querySelector('.modal')
const modalEmail = document.getElementById('modal-email')

const showModal = () => {
    modal.classList.remove('hide')
    console.log(email.value)
    modalEmail.value = email.value
}

const hideModal = () => {
    modal.classList.add('hide')
}

const loadModal = () => {
    modal.innerHTML += `
  <!-- Modal content -->
  <div class="modal-content">
    <span onclick="hideModal()">x</span>
      <form name="form" id="modal-form" action="/api/subscribe" method="POST">
        <input type="email" class="input modal-input" id="modal-email" name="email" placeholder="Email Address" required>
        <input type="text" class="input modal-input" name="firstName" placeholder="First Name" required>
        <input type="text" class="input modal-input" name="lastName" placeholder="Last Name" required>
        <button type="submit" id="submit-modal-form" class="submit-form">Submit</button>
      </form>
  </div>`
}

loadModal()
