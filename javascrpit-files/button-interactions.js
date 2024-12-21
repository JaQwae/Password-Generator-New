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


// Swap sections depending of which button is clicked
const hideSections = (action) => {
    switch(action) {
        case 'showPassword':
            passwordSettingContainer.classList.add('hidden');
            generatePasswordHomeBtn.classList.add('hidden');
            passwordDisplayContainer.classList.remove('hidden');
            nextActionBtnContainer.classList.remove('hidden');
            break;
        case 'startOver':
            passwordSettingContainer.classList.remove('hidden');
            generatePasswordHomeBtn.classList.remove('hidden');
            passwordDisplayContainer.classList.add('hidden');
            nextActionBtnContainer.classList.add('hidden');
            break;
        default:
            console.log('Something went wrong');
    }
}

// Section containers
const passwordSettingContainer = document.getElementById('password-settings');
const generatePasswordHomeBtn = document.getElementById('generate-password-home-btn');
const passwordDisplayContainer = document.getElementById('password-display');
const nextActionBtnContainer = document.getElementById('next-action-btn-container');