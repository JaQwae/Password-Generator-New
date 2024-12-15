
const generatePassword = () => {
    alert(`Generation Started`);
    alert(`Length is ${getPasswordLength()}`);
    alert(`Password uses lower: ${lowercaseInput.checked}`);
    alert(`Password uses upper: ${uppercaseInput.checked}`);
    alert(`Password uses #s: ${numbersInput.checked}`);
    alert(`Password uses symbols: ${symbolsInput.checked}`);
}

const getPasswordLength = () => {
    return document.querySelector("#pass-length-input").value;
}

// Input field for password settings
const lowercaseInput = document.querySelector("#lowercase");
const uppercaseInput = document.querySelector("#uppercase");
const numbersInput = document.querySelector("#numbers");
const symbolsInput = document.querySelector("#symbols");