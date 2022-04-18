const modal = document.querySelector('.modal')
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
      <form name="form" id="modal-form" action="/api/subscribe" method="POST">
        <input type="email" class="input modal-input" id="modal-email" name="email" placeholder="Email Address" required>
        <input type="text" class="input modal-input" name="firstName" placeholder="First Name" required>
        <input type="text" class="input modal-input" name="lastName" placeholder="Last Name" required>
        <button type="submit" id="submit-modal-form" class="submit-form">Submit</button>
      </form>
  </div>`
}

loadModal()