
const generatePassword = () => {
    alert(`Generation Started`);
    alert(`Length is ${getPasswordLength()}`);
}

const getPasswordLength = () => {
    return document.querySelector("#pass-length-input").value;
}

