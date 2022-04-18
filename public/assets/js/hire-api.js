const hiresubmit = (form) => {
    
    let radios = document.getElementsByName('hireRadio')
    console.log(radios[0].checked)
    return radios[0].checked || radios[1].checked
}