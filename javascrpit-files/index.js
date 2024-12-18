const generatePassword = () => {
    let passwordSettings = getPasswordSettings(
        lowercaseInput, 
        uppercaseInput, 
        numbersInput, 
        symbolsInput
    )
    passwordRandomizer(getPasswordLength(), passwordSettings);
    displayPassword();
}


const getPasswordLength = () => {
    return document.querySelector("#pass-length-input").value;
}

// Return the password setting preferences the user selected
const getPasswordSettings = (...args) => {
    const settings = [];

    for(let arg in args) {
        let inputField = args[arg];

        if(inputField.checked) {
            settings.push(inputField.id);
        }
    }

    return settings;
}

const passwordRandomizer = (...settings) => {
    const passwordLength = settings[0];
    const selectedSettings = settings[1];
    const passSetArrLen = selectedSettings.length

    for (let i=0; i<passwordLength; i++) {
        let char = randomSettingSelector(selectedSettings[Math.floor(Math.random() * passSetArrLen)])
        password.push(char);
    }
}

// Handles which character generator will be call
const randomSettingSelector = (setting) => {
    switch (setting) {
        case 'lowercase':
            return getLowercaseChar();
        case 'uppercase':
            return getUppercaseChar();
        default:
            "something went wrong"
    }
}


// Generates a random lower case letter
const getLowercaseChar = () => {
    let randomInt = Math.floor(Math.random() * (123-97) + 97);
    return String.fromCharCode(randomInt);
}


// Generates a random upper case letter
const getUppercaseChar = () => {
    let randomInt = Math.floor(Math.random() * (91-65) + 65);
    return String.fromCharCode(randomInt);
}


const displayPassword = () => {
    document.getElementById("generated-password")
        .innerHTML = password
        .join(" ").replaceAll(" ", "");
}


// Input field for password settings
const lowercaseInput = document.querySelector("#lowercase");
const uppercaseInput = document.querySelector("#uppercase");
const numbersInput = document.querySelector("#numbers");
const symbolsInput = document.querySelector("#symbols");

// Password placeholder
let password=[];