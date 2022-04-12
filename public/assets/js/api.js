const submitContactForm = document.getElementById("submit-contact-form");
const submitModalForm = document.getElementById("submit-modal-form");
const submitHireForm = document.getElementById("submit-hire-form");
const submitForm = Array.from(document.querySelectorAll('.submit-form'))
let userData = [];
// contact page

const doSubmit = (userInfo) => {
    console.log("submit", userInfo);
    return fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    }).then(() => {
      alert(userInfo.firstName);
    });
  };

 const handleSubscribe = async () => {
    let inputs = document.forms["form"].getElementsByClassName("input");
        await doSubmit({
            firstName: inputs.firstName.value,
            lastName: inputs.lastName.value,
            email: inputs.email.value,
            message: inputs.message.value
        })
      console.log(userData);
      window.location.reload()
}
  
    const addInfoToDB = (button) => {
        button.addEventListener("click", handleSubscribe);
    };
    
    submitForm.forEach(addInfoToDB);
