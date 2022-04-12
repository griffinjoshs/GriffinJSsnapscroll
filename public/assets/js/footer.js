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