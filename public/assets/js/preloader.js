const loader = document.getElementById('pre-load')

const vanish = () => {
    loader.classList.add('hide')
}

window.addEventListener('load', vanish);

const loaderToHTML = () => {
loader.innerHTML += `
<div class="shape-logo">
        <div class="circle rotate">
          <div class="square rotate">
            <div class="diamond rotate"></div>
          </div>
        </div>
      </div>
`
}

loaderToHTML()