const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPass = document.getElementById('confirmPassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPassValue = confirmPass.value.trim();

    if (firstNameValue === '') {
        setErrorFor(firstName, "Please enter first name");
    } else {
        setSuccessFor(firstName);
    }

    if (lastNameValue === '') {
        setErrorFor(lastName, "Please enter last name");
    } else {
        setSuccessFor(lastName);
    }

    if (emailValue === '') {
        setErrorFor(email, "Please enter a valid email address");
    // } else if (!isEmail(emailValue)) {
    //     setErrorFor(email, "Email address not valid");
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, "Please enter a valid password"); 
    } else if (passwordValue.length < 8) {
        setErrorFor(password, "Must contain at least 8 characters");
    } else {
        setSuccessFor(password);
    }
    
    if (confirmPassValue === '') {
        setErrorFor(confirmPass, "Please enter a valid password"); 
    } else if (passwordValue !== confirmPassValue) {
        setErrorFor(confirmPass, "Does not match password");
    } else {
        setSuccessFor(confirmPass);
    }

}

function setErrorFor(input, message) {
    const control = input.parentElement;
    const small = control.querySelector('small');
    small.innerText = message;

    control.className = 'control error';
}

function setSuccessFor(input) {
    const control = input.parentElement;
    control.className = 'control success';
}

// function isEmail(email) {
//     return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }
