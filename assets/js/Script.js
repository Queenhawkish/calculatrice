let ac = document.getElementById("ac")

let one = document.getElementById("one")

let two = document.getElementById("two")

let three = document.getElementById("three")

let four = document.getElementById("four")

let five = document.getElementById("five")

let six = document.getElementById("six")

let seven = document.getElementById("seven")

let eight = document.getElementById("eight")

let nine = document.getElementById("nine")

let divid = document.getElementById("divid")

let multiple = document.getElementById("multiple")

let minus = document.getElementById("minus")

let plus = document.getElementById("plus")

let zero = document.getElementById("zero")

let point = document.getElementById("point")

let equal = document.getElementById("equal")

let operation = document.getElementById("op")

let result = document.getElementById("result")

let nb1 = document.getElementById("nb1")

let nb2 = document.getElementById("nb2")

let results = 0

let virgule = 0

divid.addEventListener("click", function () {
    operation.innerText = divid.innerText
})

multiple.addEventListener("click", function () {
    operation.innerText = multiple.innerText
})

minus.addEventListener("click", function () {
    operation.innerText = minus.innerText
})

plus.addEventListener("click", function () {
    operation.innerText = plus.innerText
})

ac.addEventListener("click", function () {
    nb1.innerText = ""
    operation.innerText = ""
    nb2.innerText = ""
    result.innerText = ""
})

seven.addEventListener("click", function () {

    if (operation.innerText == divid.innerText ||
        operation.innerText == multiple.innerText ||
        operation.innerText == minus.innerText ||
        operation.innerText == plus.innerText) {
        nb2.innerText += seven.innerText
    } else {
        nb1.innerText += seven.innerText
    }
})

eight.addEventListener("click", function () {

    if (operation.innerText == divid.innerText ||
        operation.innerText == multiple.innerText ||
        operation.innerText == minus.innerText ||
        operation.innerText == plus.innerText) {
        nb2.innerText += eight.innerText
    } else {
        nb1.innerText += eight.innerText
    }
})
nine.addEventListener("click", function () {

    if (operation.innerText == divid.innerText ||
        operation.innerText == multiple.innerText ||
        operation.innerText == minus.innerText ||
        operation.innerText == plus.innerText) {
        nb2.innerText += nine.innerText
    } else {
        nb1.innerText += nine.innerText
    }
})

four.addEventListener("click", function () {

    if (operation.innerText == divid.innerText ||
        operation.innerText == multiple.innerText ||
        operation.innerText == minus.innerText ||
        operation.innerText == plus.innerText) {
        nb2.innerText += four.innerText
    } else {
        nb1.innerText += four.innerText
    }
})

five.addEventListener("click", function () {

    if (operation.innerText == divid.innerText ||
        operation.innerText == multiple.innerText ||
        operation.innerText == minus.innerText ||
        operation.innerText == plus.innerText) {
        nb2.innerText += five.innerText
    } else {
        nb1.innerText += five.innerText
    }
})

six.addEventListener("click", function () {

    if (operation.innerText == divid.innerText ||
        operation.innerText == multiple.innerText ||
        operation.innerText == minus.innerText ||
        operation.innerText == plus.innerText) {
        nb2.innerText += six.innerText
    } else {
        nb1.innerText += six.innerText
    }
})

one.addEventListener("click", function () {

    if (operation.innerText == divid.innerText ||
        operation.innerText == multiple.innerText ||
        operation.innerText == minus.innerText ||
        operation.innerText == plus.innerText) {
        nb2.innerText += one.innerText
    } else {
        nb1.innerText += one.innerText
    }
})

two.addEventListener("click", function () {

    if (operation.innerText == divid.innerText ||
        operation.innerText == multiple.innerText ||
        operation.innerText == minus.innerText ||
        operation.innerText == plus.innerText) {
        nb2.innerText += two.innerText
    } else {
        nb1.innerText += two.innerText
    }
})

three.addEventListener("click", function () {

    if (operation.innerText == divid.innerText ||
        operation.innerText == multiple.innerText ||
        operation.innerText == minus.innerText ||
        operation.innerText == plus.innerText) {
        nb2.innerText += three.innerText
    } else {
        nb1.innerText += three.innerText
    }
})

zero.addEventListener("click", function () {

    if (operation.innerText == divid.innerText ||
        operation.innerText == multiple.innerText ||
        operation.innerText == minus.innerText ||
        operation.innerText == plus.innerText) {
        nb2.innerText += zero.innerText
    } else {
        nb1.innerText += zero.innerText
    }
})

point.addEventListener("click", function () {
    if (operation.innerText == divid.innerText ||
        operation.innerText == multiple.innerText ||
        operation.innerText == minus.innerText ||
        operation.innerText == plus.innerText) {
            if(virgule==0)
        nb2.innerText += point.innerText
        virgule = 1
    } else {
        if(virgule==0){
        nb1.innerText += point.innerText
        virgule = 1
    }
    }
})

function calculator() {
    switch (operation.innerText) {
        case '+':
            results = +nb1.innerText + +nb2.innerText;
            break;
        case '-':
            results = +nb1.innerText - +nb2.innerText;
            break;
        case 'x':
            results = +nb1.innerText * +nb2.innerText;
            break;
        case '÷':
            results = +nb1.innerText / +nb2.innerText;
            break;
        default:
            break;
    }
}

equal.addEventListener("click", function () {
    calculator()
    nb1.innerText = ""
    nb2.innerText = ""
    operation.innerText = ""
    result.innerText =+ results.toFixed(5)
})