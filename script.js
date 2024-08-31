const display = document.getElementById('display');

function clearDisplay() {
    display.textContent = '0';
}

function appendToDisplay(value) {
    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function calculateResult() {
    try {
        display.textContent = eval(display.textContent.replace('^', '**'));
    } catch {
        display.textContent = 'Error';
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key >= 0 && key <= 9) {
        appendToDisplay(key);
    } else if (key === '.') {
        appendToDisplay('.');
    } else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '^') {
        appendToDisplay(key === '^' ? '**' : key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
