const form = document.getElementById('form');
const firstNameInput = document.getElementById('first-name-input');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const repeatPasswordInput = document.getElementById('repeat-password-input');
const errorMessage = document.getElementById('error-message');


form.addEventListener('submit', (e) => {
    // e.preventDefault();

    let error = []

    if (firstNameInput) {
        error = getSignUpFormErrors(firstNameInput.value, emailInput.value, passwordInput.value, repeatPasswordInput.value)
    }
    else {
        error = getLogInFormErrors( emailInput.value, passwordInput.value)

    }
    if (error.length > 0){
        e.preventDefault()
        errorMessage.innerText = error.join('. ')
    }
})


function getSignUpFormErrors(firstName, email, password, repeatPassword) {
    let errors = []

    if (firstName === "" || firstName === null) {
        errors.push('First name is required')
        firstNameInput.parentElement.classList.add('incorrect')
    }
    if (email === "" || email === null) {
        errors.push('Email is required')
        emailInput.parentElement.classList.add('incorrect')
    }
    if (password === "" || password === null) {
        errors.push('Password is required')
        passwordInput.parentElement.classList.add('incorrect')
    }
    if (password.length < 8) {
        errors.push('Password must be at least 8 characters long')
        passwordInput.parentElement.classList.add('incorrect')
    }
    if (password !== repeatPassword) {
        errors.push('Password does not match')
        passwordInput.parentElement.classList.add('incorrect')
        repeatPasswordInput.parentElement.classList.add('incorrect')
    }

    return errors
    
}


function getLogInFormErrors(email, password){
    let errors = []

    if (email === "" || email === null) {
        errors.push('Email is required')
        emailInput.parentElement.classList.add('incorrect')
    }
    if (password === "" || password === null) {
        errors.push('Password is required')
        passwordInput.parentElement.classList.add('incorrect')}

        return errors
}

const allInputs = [firstNameInput, emailInput, passwordInput, repeatPasswordInput].filter(input => input != null)
allInputs.forEach( input => {
    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('incorrect')) {
            input.parentElement.classList.remove('incorrect')
            errorMessage.innerText = ''
        }
    })
})