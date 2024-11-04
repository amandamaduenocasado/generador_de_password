
let createPassword = '';

const changePassword = document.getElementById('password');
const cta = document.getElementById('cta');
const lengthRange = document.getElementById('lengthRange');
const lengthDisplay = document.getElementById('lengthDisplay'); 

const checkboxUppercase = document.getElementById('checkbox-1');
const checkboxLowercase = document.getElementById('checkbox-2');
const checkboxNumber = document.getElementById('checkbox-3');
const checkboxSymbols = document.getElementById('checkbox-4');

lengthRange.addEventListener('input', () => {
    lengthDisplay.textContent = lengthRange.value; 
});

cta.addEventListener('click', () => {
    createPassword = ''; 
    const passwordLength = lengthRange.value;
    let characters = '';

    if (checkboxUppercase.checked) {
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    if (checkboxLowercase.checked) {
        characters += 'abcdefghijklmnopqrstuvwxyz'
    }

    if (checkboxNumber.checked) {
        characters += '1234567890'
    }

    if (checkboxSymbols.checked) {
        characters += '!@#$%^&*()'
    }

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        createPassword += characters[randomIndex]; 
    }    
    changePassword.textContent = createPassword; 
});


const checkboxActive = () => {
    if (checkboxUppercase.checked || checkboxLowercase.checked || checkboxNumber.checked || checkboxSymbols.checked) {
        cta.disabled = false; 
    } else {
        cta.disabled = true; 
    }
}

checkboxUppercase.addEventListener('change', checkboxActive);
checkboxLowercase.addEventListener('change', checkboxActive);
checkboxNumber.addEventListener('change', checkboxActive);
checkboxSymbols.addEventListener('change', checkboxActive);

checkboxActive();

