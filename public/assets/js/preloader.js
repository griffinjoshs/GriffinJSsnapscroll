const loader = document.getElementById("pre-load");

const closeLoader = () => {
  const loaderContainer = document.querySelector(".loader-bg");
  // console.log(loaderContainer);
  loaderContainer.style.display = "none";
};

const loaderToHTML = () => {
  loader.innerHTML += `
<img src="./assets/images/griffinlogo.png" height="300" width="300">
`;
  sessionStorage.setItem("loaderRan", "true");
};

if (sessionStorage.getItem("loaderRan") == "true") {
  document.querySelector(".loader-bg").style.display = "none";
} else {
  document.querySelector(".loader-bg").style.display = "flex";
  loaderToHTML();
  setTimeout(() => {
    closeLoader();
  }, 3000);
}
