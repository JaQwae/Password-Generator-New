const generatePassword = () => {
    // Resets password
    password = [];

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

// Attaches random character to the password arr
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
        case 'numbers':
            return getNumber();
        case 'symbols':
            return getSymbolChar();
        default:
            console.log("something went wrong");
    }
}


// Randomizer function
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max-min) + min);
}

// Generates a random lower case letter
const getLowercaseChar = () => {
    return String.fromCharCode(getRandomNumber(97,123));
}

// Generates a random upper case letter
const getUppercaseChar = () => {
    return String.fromCharCode(getRandomNumber(65,91));
}

// Generates a random number
const getNumber = () => {
    return String.fromCharCode(getRandomNumber(48, 58));
}

// Generate a random symbol
const getSymbolChar = () => {
    if (getRandomNumber(0,2) === 0) {
        return String.fromCharCode(getRandomNumber(32,48));
    } else {
        return String.fromCharCode(getRandomNumber(58,65));
    }
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