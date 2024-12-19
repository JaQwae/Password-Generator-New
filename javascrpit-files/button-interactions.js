// Displays and update number for the password length
let passLengthDisplay = document.querySelector("#pass-length-display");
let passLengthInput = document.querySelector("#pass-length-input");
passLengthDisplay.textContent = passLengthInput.value
passLengthInput.addEventListener("input", (event) => {
    passLengthDisplay.textContent = event.target.value;
})

// Close error modal screen
const closeErrorDialogBtn = document.getElementById('close-error-dialog-btn');
closeErrorDialogBtn.addEventListener('click', () => {
    document.getElementById("error-dialog-box").close();
})