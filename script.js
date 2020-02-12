const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

//show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';

    small.innerText = message;

    //   formControl.classList.add('error');

}

//show success
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//check email is valid
function isValidEmail(email) {

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}

//Check required fields

function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else if (!isValidEmail(email.value)) {
            showError(input, `You typed wrong ${getFieldName(input)}`)
        } else {
            showSuccess(input);
        }
    });
}

// check input lenght
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input).replace(/2/g, '')} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`)
    } else {
        showSuccess(input);
    }
}
//check passwords match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input1, 'Passwords do not match');
        showError(input2, 'Passwords do not match');
    }
}

//Get field name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


// EVENT LISTENERS
form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 4, 15);
    checkLength(password, 6, 25);
    checkLength(password2, 6, 25);
    checkPasswordsMatch(password, password2);

});