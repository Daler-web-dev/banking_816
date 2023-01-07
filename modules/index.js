let localed = JSON.parse(localStorage.getItem('user'))

let h2 = document.querySelector('h2')

h2.innerHTML = "hello " + localed.name