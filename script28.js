function calculate(operator) {

    var number1 = parseFloat(document.getElementById("num1").value);
    var number2 = parseFloat(document.getElementById("num2").value);
    var result;

    if (operator === '+') {
        result = number1 + number2;
    }
    else if (operator === '-') {
        result = number1 - number2;
    }
    else if (operator === '*') {
        result = number1 * number2;
    }
    else if (operator === '/') {
        result = number1 / number2;
    }
    else if (operator === '%') {
        result = number1 % number2;
    }
    else {
        result = "Invalid operator";
    }
    document.getElementById("result").textContent = result;
}