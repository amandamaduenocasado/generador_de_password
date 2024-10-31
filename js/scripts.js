const array = [];
let createPassword = '';

const changePassword = document.getElementById('password');
const generateCta = document.getElementById('generateCta');
const lengthRange = document.getElementById('lengthRange');
const lengthDisplay = document.getElementById('lengthDisplay'); 


lengthRange.addEventListener('input', () => {
    lengthDisplay.textContent = lengthRange.value; 
});


generateCta.addEventListener('click', () => {
    createPassword = ''; 

    const passwordLength = lengthRange.value;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';


    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        createPassword += characters[randomIndex]; 
}    
    changePassword.textContent = createPassword; 
});