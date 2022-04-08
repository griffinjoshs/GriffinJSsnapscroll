const modal = document.querySelector('.modal')
const email = document.getElementById('userEmail')
const modalEmail = document.getElementById('modal-email')

const showModal = () => {
    modal.classList.remove('hide')
    console.log(email.value)
    modalEmail.value = email.value
}

const hideModal = () => {
    modal.classList.add('hide')
}

const loadModal = () => {
    modal.innerHTML += `
  <!-- Modal content -->
  <div class="modal-content">
    <span onclick="hideModal()">x</span>
      <form class="modal-form" id="modal-form">
        <input type="email" class="input modal-input" id="modal-email" name="email" placeholder="Email Address">
        <input type="text" class="input modal-input" name="firstName" placeholder="First Name">
        <input type="text" class="input modal-input" name="lastName" placeholder="Last Name">
        <button type="submit" id="submit-footer-form">Submit</button>
      </form>
  </div>`
}

loadModal()