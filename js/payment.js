const form = document.querySelector(".credit_card_form");

const ownerName = document.querySelector("#owner_name_input");
const cvv = document.querySelector("#cvv_input");
const cardNumber = document.querySelector("#card_number_input");

const ownerNameError = document.querySelector("#ownerNameError");
const cvvError = document.querySelector("#cvvError");
const cardNumberError = document.querySelector("#cardNumberError");

let ownerNameOK = false;
let cvvOK = false;
let cardNumberOK = false;

function checkForm(event) {
    event.preventDefault();

    if(ownerName.value.trim().length > 0){
        ownerNameOK = true;
        ownerNameError.style.display = "none";
    }
    else {
        ownerNameError.style.display = "block";

    }

    if(cvv.value.trim().length === 3 || cvv.value.trim().length === 4) {
        cvvOK = true;
        cvvError.style.display = "none";
    }
    else {
        cvvError.style.display = "block";
    }

    if(cardNumber.value.trim().length > 12 && cardNumber.value.trim().length <= 19) {
        cardNumberOK = true;
        cardNumberError.style.display = "none";
    }
    else {
        cardNumberError.style.display = "block";
    }

    if(ownerNameOK && cvvOK && cardNumberOK) {
        window.location.href = "payment_success.html";
    }

}



form.addEventListener("submit", checkForm);