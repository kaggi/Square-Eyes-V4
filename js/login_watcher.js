let loginLink = document.querySelector("#login_link");
loginLink.classList.add("current_page");

const form = document.querySelector(".login_form");

const email = document.querySelector("#email_field");
const password = document.querySelector("#password_field");


const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");

const emailTest = /\S+@\S+\.\S+/;


let emailOK = false;
let passwordOK = false;


function checkForm (event) {

    event.preventDefault();

    

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

    
        
    

    if(emailOK && passwordOK) {
        window.location.href = "watcher_account.html";
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