const header = document.createElement('header')
const nav = document.createElement('nav')
const main = document.createElement('a')
const myWallets = document.createElement('a')
const myTransactions = document.createElement('a')
const wrapper = document.createElement('div')
const span = document.createElement('span')
const logOutBtn = document.createElement('div')
const logOutImg = document.createElement('img')
const userItem = JSON.parse(localStorage.getItem('user'))


span.innerText = userItem.email
main.innerText = 'Главная'
myWallets.innerText = 'Мои кошельки'
myTransactions.innerText = 'Мои транзакции'
main.classList.add('main_btn')
myWallets.classList.add('wallet_btn')
myTransactions.classList.add('transaction_btn')
wrapper.classList.add('wrapper')
span.classList.add('usermail')
logOutBtn.classList.add('logout_btn')
logOutImg.setAttribute('src', '../images/log_out.svg')

main.setAttribute('href', './index.html')
myWallets.setAttribute('href', './cards.html')
myTransactions.setAttribute('href', '#')


logOutBtn.append(logOutImg)
wrapper.append(span, logOutBtn)
nav.append(main, myWallets, myTransactions, wrapper)
header.append(nav)
document.body.insertAdjacentElement('afterbegin', header)


logOutBtn.onclick = () => {
    window.localStorage.removeItem('user')
    window.location.href = './login.html'
}
