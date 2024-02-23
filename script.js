function handleButtonClick(event) {
  if (event.target.matches("button")) {
    const buttonValue = event.target.dataset.value;
    if (buttonValue === "C") {
      clearDisplay();
    } else if (buttonValue === "DEL") {
      deleteLastChar();
    } else if (buttonValue === "=") {
      calculate();
    } else {
      appendToDisplay(buttonValue);
    }
  }
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLastChar() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function calculate() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
