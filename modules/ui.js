export const reload = (arr, place) => {
    place.innerHTML = ""

    for(let item of arr) {
        place.innerHTML += `
        <div class="card1">
            <h4>${item.card_name}</h4>
            <span>${item.currency}</span>
            <span>${item.balance}</span>
        </div>`
    }

}