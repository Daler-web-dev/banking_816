let allInps = document.querySelectorAll('input')
let reg_form = document.forms.reg


let pattern = {
  
    name: /^[a-z ,.'-]+$/i,
    surname: /^[a-z ,.'-]+$/i,
    email: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
    password: /^[A-Za-z]\w{0,9}$/,
    
}




function validate(regex, field) {
if(regex.test(field.value)) {
    field.parentElement.classList.remove('invalid')
    field.parentElement.classList.add('valid')
} else {
    field.parentElement.classList.remove('valid')
    field.parentElement.classList.add('invalid')
}
}

allInps.forEach(inp => {
inp.onkeyup = () => {

    validate(pattern[inp.name], inp)
}
})



reg_form.onsubmit = (e) => {
    e.preventDefault()

    
    let new_user = {}

    let fm = new FormData(reg_form)

    fm.forEach((value, key) => {
        new_user[key] = value
    })

    if(new_user.email && new_user.name && new_user.surname && new_user.password) {
        fetch('http://localhost:5000/users', {
            method: "POST",
            body: JSON.stringify(new_user),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(res => console.log(res))
    }
}