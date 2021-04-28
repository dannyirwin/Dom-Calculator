let currentValue = "";
let previousValue = "";
let evalType = "";

function updateDisplay() {
    if (currentValue == Infinity || isNaN(currentValue)) {
        currentValue = "ERROR"
    }
    document.querySelector("#screen").textContent = currentValue;

}


function handleClearButton() {
    currentValue = "";
}

function saveValue() {
    previousValue = currentValue;
    clear();
}

function evaluate() {
    const a = parseFloat(currentValue);
    const b = parseFloat(previousValue);
    let c;

    if (isNaN(a) || isNaN(b)) {
        console.log("is NAN")
    } else {
        switch (evalType) {
            case "+":
                c = a + b;
                break;
            case "-":
                c = a - b;
                break;
            case "x":
                c = a * b;
                break;
            case "÷":
                c = a / b;
                break;
        }
        currentValue = c;
        updateDisplay();
    }


}

function clear() {
    currentValue = "";
}

function handleButtonPress(string) {

    console.log("current " + currentValue, "previous " + previousValue)

    if (!isNaN(parseInt(string))) {
        if (currentValue[0] !== "0") { currentValue += string; }
    } else if (string == "=") {
        evaluate();
    } else if (string == "C") {
        clear();
    } else {
        evalType = string;
        saveValue();
    }
    updateDisplay();
    console.log("updated", "current " + currentValue, "previous " + previousValue)
}

function addEventListeners() {
    document.querySelectorAll('span').forEach(element => {
        element.addEventListener("click", function () { handleButtonPress(this.innerHTML) })
    })
}

console.log("starting");
addEventListeners();
