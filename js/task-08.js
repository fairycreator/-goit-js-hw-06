let loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let emailInput = loginForm.elements.email;
    let passwordInput = loginForm.elements.password;

    if (emailInput.value === '' || passwordInput.value === '') {
        console.log('All fields must be filled in');
    } else {
        let formData = {
            email: emailInput.value,
        };

        console.log(formData);
        loginForm.reset();
    }
});
