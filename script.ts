const draggableContainer = document.getElementById('draggable-container') as HTMLElement;
const resizeHandle = document.querySelector('.resize-handle') as HTMLElement;


const display = document.getElementById('display') as HTMLInputElement;
const buttons = document.getElementsByClassName('button');

let expression: string = '';

for (let i = 0; i < buttons.length; i++) {
    const element = buttons[i] as HTMLButtonElement;

    element.addEventListener('click', (event: MouseEvent) => {
        const target = event.target as HTMLButtonElement;

        if (target.classList.contains('equals')) {
            calculate();
        } else if (target.classList.contains('clear')) {
            clear();
        } else if (target.classList.contains('backspace')) {
            backspace();
        } else {
            appendToExpression(target.innerText);
        }

        updateDisplay();
        display.focus();
    });
}

function calculate() {
    try {
        expression = eval(expression).toString();
    } catch (error) {
        expression = 'Error';
    }
}

function appendToExpression(input: string) {
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
