const socialContent = [
  {
    platform: "LinkedIn",
    icon: '<i class="fab fa-linkedin-in"></i>',
    link: "https://www.linkedin.com/in/griffin-surett-44a13b16a/",
  },
  {
    platform: "Instagram",
    icon: '<i class="fab fa-instagram"></i>',
    link: "https://www.instagram.com/griffinswebservices/",
  },
  {
    platform: "Github",
    icon: '<i class="fab fa-github"></i>',
    link: "https://github.com/griffinjoshs",
  },
];
const socialsSections = document.querySelectorAll(".social-icons");
// const socialsSections = Array.from(document.querySelectorAll("social-icons"));

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
