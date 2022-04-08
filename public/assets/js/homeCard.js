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
