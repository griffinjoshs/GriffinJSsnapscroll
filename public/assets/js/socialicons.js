const socialContent = [
  {
    platform: "LinkedIn",
    icon: '<i class="fa-brands fa-linkedin-in"></i>',
    link: "https://www.linkedin.com/in/griffin-surett-44a13b16a/",
  },
  {
    platform: "Instagram",
    icon: '<ion-icon name="logo-instagram"></ion-icon>',
    link: "https://www.instagram.com/griffinswebservices/",
  },
  {
    platform: "Github",
    icon: '<ion-icon name="logo-github"></ion-icon>',
    link: "https://github.com/griffinjoshs",
  },
];
const socialsSections = document.getElementsByClassName("social-icons");

const socialMediaIcons = () => {
  const icons = socialContent.map(
    (socialIcon) =>`
         <li>
        <a href=${socialIcon.link}>
        ${socialIcon.icon}
        </a>
        </li>`
  );

  for(let i = 0; i < socialsSections.length; i++) {
      icons.forEach(icon => {
        socialsSections[i].innerHTML += icon
      })
  };
}

socialMediaIcons();
