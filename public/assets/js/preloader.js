const loader = document.getElementById('pre-load')

const closeLoader = () => {
  const loaderContainer = document.querySelector('.loader-bg');
  console.log(loaderContainer)
  loaderContainer.style.display = 'none';
}

setTimeout(() => {
  console.log('djewjdiwe')
  closeLoader()
}, 3000)

const loaderToHTML = () => {
loader.innerHTML += `
<div class="big-shape-logo" id="spin-logo">
      <div class="big-shape-circle">
        <div class="big-shape-square">
          <div class="big-shape-diamond"></div>
        </div>
      </div>
    </div>
`
}

loaderToHTML()