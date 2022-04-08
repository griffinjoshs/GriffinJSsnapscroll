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
