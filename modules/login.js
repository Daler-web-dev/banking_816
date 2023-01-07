let login_form = document.forms.login


login_form.onsubmit = (e) => {
    e.preventDefault()

    let new_user = {}

    let fm = new FormData(login_form)

    fm.forEach((value, key) => {
        new_user[key] = value
    })

    if(new_user.email && new_user.password) {
        fetch('http://localhost:5000/users' + "?email=" + new_user.email, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(res => {
            if(res.length === 0) {
                alert('Зарегистрируйтесь пожалуйста!')
            } else {
                if(res[0].password === new_user.password) {
                    localStorage.setItem('user', JSON.stringify(res[0]))
                    window.location.href = "index.html"
                } else {
                    alert('Wrong password!')
                }
            }
        })
    }
}