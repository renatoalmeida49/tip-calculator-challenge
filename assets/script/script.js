let billInput = document.querySelector('#bill')
let peopleInput = document.querySelector('#people-number')

let tipPerPersonValue = document.querySelector('#tipPerPersonValue')
let billPerPersonValue = document.querySelector('#billPerPersonValue')

billInput.addEventListener('keyup', () => {
    calcTip()
})

peopleInput.addEventListener('keyup', () => {
    calcTip()
})

function calcTip() {
    let tipValue = document.querySelector('.button-tip.active').dataset.tip

    let totalBill = parseInt(billInput.value) + (tipValue * billInput.value / 100)

    if (parseInt(peopleInput.value) === 0 || Number.isNaN(parseInt(peopleInput.value))) {
        console.log('Não existe divisão por zero. Você quer criar um buraco negro por acaso?')
        peopleInput.classList.add('error')
        return
    }

    peopleInput.classList.remove('error')

    let tipPerPerson = (totalBill - billInput.value) / parseInt(peopleInput.value)
    let valuePerPerson = totalBill / parseInt(peopleInput.value)

    formater(tipPerPerson, valuePerPerson)
}

function formater(tipPerPerson, valuePerPerson) {
    tipPerPersonValue.innerHTML = tipPerPerson.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      })

    billPerPersonValue.innerHTML = valuePerPerson.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      })
}