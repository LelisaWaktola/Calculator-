let displayValue = "0";
let history = [];

function updateDisplay() {
    document.getElementById("display").innerText = displayValue;
}

function clearDisplay() {
    displayValue = "0";
    updateDisplay();
}

function backspace() {
    displayValue = displayValue.slice(0, -1) || "0";
    updateDisplay();
}

function appendNumber(number) {
    if (displayValue === "0") {
        displayValue = "" + number;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function appendOperator(operator) {
    if (/[+\-*/]$/.test(displayValue)) {
        displayValue = displayValue.slice(0, -1);
    }
    displayValue += operator;
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(displayValue);
        history.push(`${displayValue} = ${result}`);
        updateHistory();
        displayValue = result.toString();
    } catch (error) {
        displayValue = "Error";
    }
    updateDisplay();
}

function updateHistory() {
    const historyContainer = document.getElementById("history");
    historyContainer.innerHTML = "<h3>History</h3>";
    history.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("history-item");
        div.innerText = item;
        historyContainer.appendChild(div);
    });
}