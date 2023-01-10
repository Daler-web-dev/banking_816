let addForm = document.forms.addcard
let select = document.querySelector('#currency')
let {id} = JSON.parse(localStorage.getItem('user')) 
let symbols = JSON.parse(localStorage.getItem('symbols')) 

const getAllcurrency = () => {
    fetch('https://api.apilayer.com/fixer/symbols', {
        method: 'GET',
        redirect: 'follow',
        headers: {
            "apikey": "WGNpX0DW8LKZaGewCmUJl0Uex7J9z82x",
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(res => {
        localStorage.setItem('symbols', JSON.stringify(res.symbols))        
        setSymbols(res.symbols)
    })
}

const setSymbols = (data) => {
    // select
    for(let key in data) {
        let opt = new Option(key, key)

        select.append(opt)
    }

}

if(!symbols) {
    getAllcurrency()
} else {
    setSymbols(symbols)
}

addForm.onsubmit = (e) => {
    e.preventDefault()

    let newCard = {
        user_id: id 
    }

    let fm = new FormData(addForm)

    fm.forEach((value, key) => {
        newCard[key] = value
    })

    if(newCard.card_name && newCard.currency && newCard.balance) {
        fetch('http://localhost:5000/cards', {
            method: "POST",
            body: JSON.stringify(newCard),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(res => {
            if(res) {
                window.location.href = "cards.html"
            } else {
                alert('Something went wrong!')
            }
        })
    }
}