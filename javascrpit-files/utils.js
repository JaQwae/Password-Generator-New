// Displays number for the password length
const passLengthDisplay = document.querySelector("#pass-length-display");
const passLengthInput = document.querySelector("#pass-length-input")
passLengthDisplay.textContent = passLengthInput.value
passLengthInput.addEventListener("input", (event) => {
    passLengthDisplay.textContent = event.target.value;
})