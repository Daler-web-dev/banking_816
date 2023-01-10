import {reload} from './ui.js'
let cont = document.querySelector('.cards')
let {id} = JSON.parse(localStorage.getItem('user')) 

const getCards = async () => {
    const res = await fetch('http://localhost:5000/cards?user_id=' + id)

    if(!res.ok) {
        throw new Error('Somethin went wrong!')
    }

    const data = await res.json()

    reload(data, cont)
}

getCards()