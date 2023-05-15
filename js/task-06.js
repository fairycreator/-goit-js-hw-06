let validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', event => {
    let inputValue = event.target.value.trim(); 
    let requiredLength = Number(validationInput.dataset.length); 

        if (inputValue.length === requiredLength) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
        } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
    }
});