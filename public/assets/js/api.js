const submitContactForm = document.getElementById('submit-contact-form')
const submitFooterForm = document.getElementById('submit-footer-form')
const submitHireForm = document.getElementById('submit-hire-form')

const doSubmit = (userInfo) => {
    console.log('submit', userInfo)
        return fetch('/api/subscribe', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userInfo)
    }).then(
        () => {
            alert(userInfo.firstName)
        }
    )
}

// footer modal subscribe form
submitFooterForm.addEventListener("click", async (event) => {
    event.preventDefault();
    let inputs = document.forms["modal-form"].getElementsByClassName("modal-input");
    await doSubmit({
        firstName: inputs.firstName.value,
        lastName: inputs.lastName.value,
        email: inputs.email.value,
    })
    // sendForm()
    console.log(inputs)
})

// contact page
submitContactForm.addEventListener("click", async (event) => {
    event.preventDefault();
    let inputs = document.forms["contact-form"].getElementsByClassName("contactInput");
    await doSubmit({
        firstName: inputs.firstName.value,
        lastName: inputs.lastName.value,
        email: inputs.email.value,
        message: inputs.message.value
    })
    // sendForm()
    console.log(inputs)
})

let checkBox = document.querySelector("input[name=checkbox]");
let checkedData = []
let checked = document.querySelectorAll('input[type=checkbox]:checked')

checkBox.addEventListener("change", () => {
    if (this.checked) {
        checkedData.push(this.checked.value)
    } else {
        console.log("Checkbox is not checked..");
      }
})


for (let i = 0; i < checked.length; i++) {
    checkedData.push(checked[i].value)
    console.log(checkedData)
}

// hire page
submitHireForm.addEventListener("click", async (event) => {

    event.preventDefault();
    let inputs = document.forms["hire-form"].getElementsByClassName("contactInput");
    // await doSubmit({
    //     firstName: inputs.firstName.value,
    //     lastName: inputs.lastName.value,
    //     email: inputs.email.value,
    //     message: inputs.message.value,
    // })
    // sendForm()
    console.log(inputs)
})

// const sendForm = () => {
//     return fetch('/api/send', {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(userInfo)
//     });
// }