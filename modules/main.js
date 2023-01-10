let {name, email,surname} = JSON.parse(localStorage.getItem('user'))

console.log(name, email);

let h1 = document.querySelector('h1')
let emailEl = document.querySelector('.email')


h1.innerHTML = 'Добро Пожаловать ' + name + " " + surname
emailEl.innerHTML = email