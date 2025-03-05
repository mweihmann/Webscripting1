console.log("script.js loaded");
let history = document.getElementById('history');
let number1;
let number2;

function add() {
    if (!readValues()) return;
    result = number1 + number2;
    document.getElementById('result').innerText = result;
    addToHistory(`${number1} + ${number2} = ${result}`);
}

function subtract() {
    if (!readValues()) return;
    result = number1 - number2;
    document.getElementById('result').innerHTML = result;
    addToHistory(`${number1} - ${number2} = ${result}`);
}

function multiply() {
    if (!readValues()) return;
    result = number1 * number2;
    document.getElementById('result').innerHTML = result;
    addToHistory(`${number1} * ${number2} = ${result}`);
}

function divide() {
    if (!readValues()) return;
    if (number2 === 0) {
        alert("Division durch 0 ist nicht erlaubt!");
        return;
    }
    result = number1 / number2;
    document.getElementById('result').innerHTML = result;
    addToHistory(`${number1} / ${number2} = ${result}`);
}

function readValues() {
    let num1 = document.getElementById('number1').value.trim();
    let num2 = document.getElementById('number2').value.trim();

    if (num1 === "" || num2 === "") {
        alert("Bitte geben Sie zwei gültige Zahlen ein!");
        return false;
    }

    number1 = parseFloat(num1);
    number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
        alert("Bitte geben Sie gültige Zahlen ein!");
        return false;
    }

    // Mehrere checks noch moeglich war yu faul..

    return true;
}

function addToHistory(entry) {
    let listItem = document.createElement("li");
    listItem.textContent = entry;
    history.appendChild(listItem);
}