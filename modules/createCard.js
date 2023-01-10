let addForm = document.forms.addcard
let {id} = JSON.parse(localStorage.getItem('user')) 

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