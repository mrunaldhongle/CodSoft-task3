
document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';
                operator = '';
                previousInput = '';
                display.textContent = '0';
                return;
            }

            if (value === '=') {
                if (currentInput !== '' && previousInput !== '') {
                    currentInput = calculate(previousInput, currentInput, operator);
                    display.textContent = currentInput;
                    operator = '';
                    previousInput = '';
                }
                return;
            }

            if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput !== '') {
                    operator = value;
                    previousInput = currentInput;
                    currentInput = '';
                }
                return;
            }

            currentInput += value;
            display.textContent = currentInput;
        });
    });

    function calculate(a, b, operator) {
        a = parseFloat(a);
        b = parseFloat(b);
        switch (operator) {
            case '+':
                return (a + b).toString();
            case '-':
                return (a - b).toString();
            case '*':
                return (a * b).toString();
            case '/':
                return (a / b).toString();
            default:
                return '';
        }
    }
});
