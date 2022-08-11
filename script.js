// Variables
let password = document.querySelector('#password');
let passwordConfirm = document.querySelector('#password-confirm');
const warning = document.querySelector('.warning');

// password.addEventListener('keyup', (e) => {
//     warning.innerText = password.value;
// });

passwordConfirm.addEventListener('keyup', (e) => {
        if(password.value.length >= 8 && passwordConfirm.value.length >= 0) {
            if(passwordConfirm.value === password.value) {
            warning.innerText = '';
            password.style.border = '1px solid green';
            passwordConfirm.style.border = '1px solid green';
        } else {
            warning.innerText = '* passwords do not match'
        }
    } else {
        warning.innerText = '* passwords do not match'
    } 
})

password.addEventListener('keyup', (e) => {
    if(password.value.length >= 8 && passwordConfirm.value.length >= 0) {
        if(passwordConfirm.value === password.value) {
        warning.innerText = '';
        password.style.border = '1px solid green';
        passwordConfirm.style.border = '1px solid green';
    } else {
        warning.innerText = '* passwords do not match'
    }
} else {
    warning.innerText = '* passwords do not match'
} 
})

