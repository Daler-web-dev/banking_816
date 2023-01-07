let reg_form = document.forms.reg


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