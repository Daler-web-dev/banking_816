{/* <header>
<nav>
    <a href="#" class="main_btn">Главная</a>
    <a href="#" class="wallet_btn">Мои кошельки</a>
    <a href="#" class="transaction_btn">Мои транзакции</a>
    <div class="wrapper">
        <span class="usermail">sample@mail.ru</span>
        <div class="logout_btn">
            <img src="../images/log_out .svg" alt="log out image">
        </div>
    </div>
</nav>
</header> */}

const header = document.createElement('header')
const nav = document.createElement('nav')
const main = document.createElement('a')
const myWallets = document.createElement('a')
const myTransactions = document.createElement('a')
const wrapper = document.createElement('div')
const span = document.createElement('span')
const logOutBtn = document.createElement('div')
const logOutImg = document.createElement('img')

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

logOutBtn.append(logOutImg)
wrapper.append(span, logOutBtn)
nav.append(main, myWallets, myTransactions, wrapper)
header.append(nav)
document.body.insertAdjacentElement('afterbegin', header)

const userItem = JSON.parse(localStorage.getItem('user'))

span.innerText = userItem.email
main.setAttribute('href', '')
myWallets.setAttribute('href', '')
myTransactions.setAttribute('href', '')

logOutBtn.onclick = () => {
    window.localStorage.removeItem('user')
    window.location.href = './login.html'
}

console.log(userItem);