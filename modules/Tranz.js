import {form} from './addTranz.js'

let obj = JSON.parse(localStorage.getItem('user'))

let btn = document.querySelector('.add_transactions')
let array = JSON.parse(localStorage.getItem('tranzactions')) || []
let form = document.forms.newTranzactions

btn.onclick = () => {
    form.onsubmit = (e) => {
        e.preventDefault()

        let tranz = {}

        let fm  = new FormData(form)

        fm.forEach((value, key) => {
            tranz[key] = value
        });

        array.push(tranz)

        reload(array)
    }
}

function reload(arr) {
    let obj  = document.querySelector('.trasact')
    obj.innerHTML = ''
    for(let item of arr ) {
        cont.innerHTML +=  `
        <div class="atciya">
            <p>1232312</p>
            <p>${item.send_name}</p>
            <p>${item.cotegory}</p>
            <p>${item.num}</p>
            <p>4 дня назад</p>
        </div>
        <div class="line"></div>`
    }
}