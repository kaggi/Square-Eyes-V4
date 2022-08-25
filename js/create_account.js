

const form = document.querySelector(".create_account_form");

const screenName = document.querySelector("#screenname_input");
const email = document.querySelector("#email_input");
const password = document.querySelector("#password_input");
const repeatPassword = document.querySelector("#repeatPassword_input");

const submittingSuccess = document.querySelector("#account_created");

const screennameError = document.querySelector("#screennameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const repeatPasswordError = document.querySelector("#repeatPasswordError");

const emailTest = /\S+@\S+\.\S+/;

let screennameOK = false;
let emailOK = false;
let passwordOK = false;
let repeatPasswordOK = false;


function checkForm (event) {

    event.preventDefault();

    if (testLength(screenName.value, 0)) {
        
        screennameOK = true;
        screennameError.style.display = "none";     }
    else {
        screennameError.style.display = "block";                 
    }

    if (emailTest.test(email.value)) {
        emailOK = true;
        emailError.style.display = "none";        
    }
    else {
        emailError.style.display = "block";                     
    }

    if (testLength(password.value, 8)) {
        passwordOK = true;
        passwordError.style.display = "none";         
    }
    else {
        passwordError.style.display = "block";                       
    }

    if(password.value === repeatPassword.value){  
        
        repeatPasswordOK = true;
        repeatPasswordError.style.display = "none";
        
    }
    else {
        repeatPasswordError.style.display = "block";
        
    }

    if(screennameOK && emailOK && passwordOK && password.value===repeatPassword.value) {
        window.location.href = "account_created.html";
    }
   



}

function testLength(value, testValue) {
    if (value.trim().length > testValue) {        
        return true;
    }
    else {        
        return false;
    }
}

form.addEventListener("submit", checkForm);