var draggableContainer = document.getElementById('draggable-container');
var resizeHandle = document.querySelector('.resize-handle');
var display = document.getElementById('display');
var buttons = document.getElementsByClassName('button');
var expression = '';
for (var i = 0; i < buttons.length; i++) {
    var element = buttons[i];
    element.addEventListener('click', function (event) {
        var target = event.target;
        if (target.classList.contains('equals')) {
            calculate();
        }
        else if (target.classList.contains('clear')) {
            clear();
        }
        else if (target.classList.contains('backspace')) {
            backspace();
        }
        else {
            appendToExpression(target.innerText);
        }
        updateDisplay();
        display.focus();
    });
}
function calculate() {
    try {
        expression = eval(expression).toString();
    }
    catch (error) {
        expression = 'Error';
    }
}
function appendToExpression(input) {
    expression += input;
}
function clear() {
    expression = '';
}
function backspace() {
    expression = expression.slice(0, -1);
}
function updateDisplay() {
    display.value = expression;
}
