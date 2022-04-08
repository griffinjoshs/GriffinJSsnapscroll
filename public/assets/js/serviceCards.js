const webDevContent = [
  {
    skills: "HTML",
    icon: '<ion-icon name="logo-html5"></ion-icon>',
  },
  {
    skills: "CSS",
    icon: '<ion-icon name="logo-css3"></ion-icon>',
  },
  {
    skills: "Javascript",
    icon: '<ion-icon name="logo-javascript"></ion-icon>',
  },
  {
    skills: "React",
    icon: '<ion-icon name="logo-react"></ion-icon>',
  },
  {
    skills: "Node.js",
    icon: '<ion-icon name="logo-nodejs"></ion-icon>',
  },
  {
    skills: "Wordpress",
    icon: '<ion-icon name="logo-wordpress"></ion-icon>',
  },
];

const DigitalMarketingContent = [
  {
    skills: "Social Media",
    icon: '<ion-icon name="share-social-outline"></ion-icon>',
  },
  {
    skills: "SEO",
    icon: '<ion-icon name="search-outline"></ion-icon>',
  },
  {
    skills: "Email Marketing",
    icon: '<ion-icon name="mail-outline"></ion-icon>',
  },
  {
    skills: "React",
    icon: '<ion-icon name="logo-react"></ion-icon>',
  },
  {
    skills: "Paid Ads",
    icon: '<ion-icon name="megaphone-outline"></ion-icon>',
  },
  {
    skills: "Content Creation",
    icon: '<ion-icon name="color-palette-outline"></ion-icon>',
  },
];

const webDevCardSection = document.getElementById("webDevCards");
const marketingCardSection = document.getElementById("marketingCards");
const cardSection = document.querySelector(".cardSection");

const pageID = () => {
  const pieces = window.location.href.split('/');
  return pieces[pieces.length - 1]
}

const loadCards = () => {
  switch (pageID()) {
    case 'webdev': 
    generateCards(webDevCardSection, webDevContent)
    break
    case "marketing": 
    generateCards(marketingCardSection, DigitalMarketingContent)
    break
  }
}

const generateCards = (section, content) => {
  section.innerHTML = ''
  content.map(
      (cardContent) =>
        (section.innerHTML += `
      <div class="card">
      <h4>${cardContent.icon}</h4>
      <h3>${cardContent.skills}</h3>
  </div>`)
    )
  }
  
  loadCards()
