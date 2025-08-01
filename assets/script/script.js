import formatter from './modules/formatter.js'

// testing commit

let billInput = document.querySelector('#bill')
let peopleInput = document.querySelector('#people-number')

let tipPerPersonValue = document.querySelector('#tipPerPersonValue')
let billPerPersonValue = document.querySelector('#billPerPersonValue')

let tipButtons = document.querySelectorAll('button.button-tip')

let resetButton = document.querySelector('.reset-button')

let tipCustom = document.querySelector('#custom')

resetButton.addEventListener('click', () => {
    billInput.value = ""
    peopleInput.value = ""

    formater(0, 0)
})

tipCustom.addEventListener('keyup', () => {
    calcTip()
})

billInput.addEventListener('keyup', () => {
    calcTip()
})

peopleInput.addEventListener('keyup', () => {
    calcTip()
})

tipButtons.forEach(button => {
    button.addEventListener('click', event => {
        tipButtons.forEach(button => {
            button.classList.remove('active')
        })
        tipCustom.value = ""

        event.target.classList.add('active')

        calcTip()
    })
})

function calcTip() {
    let custom = document.querySelector('#custom').value
    let tipValue
    
    if (custom === "") {
        console.log('if')
        tipValue = document.querySelector('.button-tip.active').dataset.tip
    } else {
        console.log('else')
        tipValue = custom
    }

    let totalBill = parseInt(billInput.value) + (tipValue * billInput.value / 100)

    if (parseInt(peopleInput.value) === 0 || Number.isNaN(parseInt(peopleInput.value))) {
        console.log('Não existe divisão por zero. Você quer criar um buraco negro por acaso?')
        peopleInput.classList.add('error')
        document.querySelector('#message').classList.add('error')
        return
    }

    document.querySelector('#message').classList.remove('error')
    peopleInput.classList.remove('error')

    let tipPerPerson = (totalBill - billInput.value) / parseInt(peopleInput.value)
    let valuePerPerson = totalBill / parseInt(peopleInput.value)

    tipPerPersonValue.innerHTML = formatter(tipPerPerson)
    billPerPersonValue.innerHTML = formatter(valuePerPerson)
}

