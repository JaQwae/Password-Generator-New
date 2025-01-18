// Displays and update number for the password length
let passLengthDisplay = document.querySelector("#pass-length-display");
let passLengthInput = document.querySelector("#pass-length-input");
passLengthDisplay.textContent = passLengthInput.value
passLengthInput.addEventListener("input", (event) => {
    // Updates numeric value for length
    passLengthDisplay.textContent = event.target.value;

    // Handles slider coloring
    const progress = (event.target.value / passLengthInput.max) * 100;
    passLengthInput.style.background = `linear-gradient(to right, #650E15 ${progress}%, #FFFFFF ${progress}%)`;
})


// Close modal screen
const closeDialogBoxBtn = document.getElementById('close-dialog-box-btn');
closeDialogBoxBtn.addEventListener('click', () => {
    document.getElementById("dialog-box").close();
})


// Swap sections depending of which button is clicked
const hideSections = (action) => {
    switch(action) {
        case 'showPassword':
            passwordSettingContainer.classList.add('hidden');
            generatePasswordHomeBtn.classList.add('hidden');
            passwordDisplayContainer.classList.remove('hidden');
            nextActionBtnContainer.classList.remove('hidden');
            nextActionBtnContainer.style.display ='flex'
            formContentContainer.classList.add('form-content-password');
            break;
        case 'startOver':
            passwordSettingContainer.classList.remove('hidden');
            generatePasswordHomeBtn.classList.remove('hidden');
            passwordDisplayContainer.classList.add('hidden');
            nextActionBtnContainer.classList.add('hidden');
            nextActionBtnContainer.style.removeProperty('display')
            formContentContainer.classList.remove('form-content-password');
            break;
        default:
            console.log('Something went wrong');
    }
}


// Allows user to copy their generated password
const copyPassword = () => {
    const password = document.getElementById("generated-password").value;
    navigator.clipboard.writeText(password);
    displayDialogMessage("Password successfully copied");
}


// Section containers
const passwordSettingContainer = document.getElementById('password-settings');
const generatePasswordHomeBtn = document.getElementById('generate-password-home-btn');
const passwordDisplayContainer = document.getElementById('password-display');
const nextActionBtnContainer = document.getElementById('next-action-btn-container');
const formContentContainer = document.getElementById('form-content');