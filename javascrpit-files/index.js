const generatePassword = () => {
    passwordRandomizer(getPasswordLength(), lowercaseInput.checked);
    displayPassword();
}


const getPasswordLength = () => {
    return document.querySelector("#pass-length-input").value;
}


const passwordRandomizer = (length, lower) => {
    let char = "";
    for (let i=0; i<length; i++) {
        if (lower) {
            char=getLowercaseChar();
        }
        password.push(char);
    }
}


// Generates a random lower case letter
const getLowercaseChar = () => {
    let randomInt = Math.floor(Math.random() * (122-97) + 97);
    return String.fromCharCode(randomInt);
}


const displayPassword = () => {
    document.getElementById("generated-password").innerHTML = password.join(" ").replaceAll(" ", "") ;
}


// Input field for password settings
const lowercaseInput = document.querySelector("#lowercase");
const uppercaseInput = document.querySelector("#uppercase");
const numbersInput = document.querySelector("#numbers");
const symbolsInput = document.querySelector("#symbols");

// Password placeholder
let password=[];