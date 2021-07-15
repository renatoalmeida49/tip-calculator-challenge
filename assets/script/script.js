let billInput = document.querySelector('#bill')
let peopleInput = document.querySelector('#people-number')

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
        return
    }

    let valuePerPerson = totalBill / parseInt(peopleInput.value)
    
    console.log("Total bill: ", totalBill)
    console.log("Valor por pessoa: ", valuePerPerson.toFixed(2))
}