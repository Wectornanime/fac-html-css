const displayTxt = document.querySelector('#displayTxt')
let haveDot = false
var val1, val2, operator

function displayAdd(n) {
    if (n === ',' && !haveDot) {
        haveDot = true
        displayTxt.innerText += n

    } else if ('1234567890'.includes(n)) {
        displayTxt.innerText += n

    } else if ('+-/*'.includes(n)) {
        if (displayTxt.innerText !== undefined){
            if (val1 === undefined) {
                val1 = Number(displayTxt.innerText)
                operator = n
            } else {
                val2 = Number(displayTxt.innerText)
                val1 = fazOperacao(val1, val2, operator)
            }
        }

        operator = n
        clearDisplay()
    } else if (n === '=') {

        if (displayTxt.innerText !== '' && operator !== '') {
            val2 = Number(displayTxt.innerText)
            displayTxt.innerText = fazOperacao(val1, val2, operator)
        }
    }
}

function clearDisplay() {
    displayTxt.innerText = ''
}

function zerar() {
    clearDisplay()
    val1, val2, operator = undefined
}

function fazOperacao(n1, n2, op) {
    switch (op) {
        case '+':
            return n1 + n2
        case '-':
            return n1 - n2
        case '/':
            return n1 / n2
        case '*':
            return n1 * n2
    }
}

function limpaUm() {
    let txt = displayTxt.innerText
    displayTxt.innerText = txt.slice(0, txt.length-1)

}