// much of the variables are declared on the navbar page
const hambButton = document.getElementById('hamburger')
const closeButton = document.getElementById('close')
const clearArea = Array.from(document.querySelectorAll('.clear-for-menu'));
// let pageID;

const hideUnderMenu = (element) => {
        element.classList.add('hide')
}

const showUnderMenu = (element) => {
    element.classList.remove('hide')    
} 

const PageSwitchAnimation = () => {
    document.getElementById('menu').classList.add('hide')
    clearArea.forEach(hideUnderMenu)
    document.body.classList.add('color-slide')
    document.querySelector('.icon').classList.add('spin')
  }

  const resetAnimation = () => {
    document.body.classList.remove('color-slide')
  }

const displayMenu = () => {
    PageSwitchAnimation()
setTimeout(() => {
    document.getElementById('menu').classList.remove('hide')
    document.getElementById('hamburger').classList.add('hide')
  document.getElementById('close').classList.remove('hide')
  resetAnimation()
}, 2200)
  }

const exitMenu = () => {
    PageSwitchAnimation()
    setTimeout(() => {
        document.getElementById('menu').classList.add('hide')
        document.getElementById('hamburger').classList.remove('hide')
        document.getElementById('close').classList.add('hide')
        clearArea.forEach(showUnderMenu)
        resetAnimation()
    }, 2100)
}
  
  const goToPage = (link) => {
    PageSwitchAnimation()
    setTimeout(() => {
      document.getElementById('hamburger').classList.remove('hide')
      document.getElementById('close').classList.add('hide')
      document.querySelector('.icon').classList.remove('spin')
    resetAnimation()
      window.location.href= link;
    }, 2100)
  }

  const backHome = () => {
    // pageID = 0
    PageSwitchAnimation()
    setTimeout(() => {
      window.location.href="/";
    }, 2100)
  }
  
  const goToContact = () => {
    // pageID = 1
    goToPage('/contact')
  }
  
  const goToHire = () => {
    // pageID = 2
    goToPage('/hire')
  }
  
  const goToServices = () => {
    // pageID = 3
    goToPage('#services')
  }
  
  const goToWebDev = () => {
    // pageID = 4
    goToPage('/webDev')
  }
  
  const goToMarketing = () => {
    // pageID = 5
    goToPage('/marketing')
  }
  
  // console.log("page ID:" + pageID)