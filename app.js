const submitBtn = document.querySelector('.submit-btn');
const buttonContainer = document.querySelector('.button-container');
const alert = document.querySelector('.alert');
// for getting value
let postcode = document.getElementById('postcode');
// for submitting the form
const form = document.querySelector('.postcode-form');

form.addEventListener('submit', validatePostalCode);

function validatePostalCode(e){
    e.preventDefault();
    var regExp = new RegExp(/2500|4600|3400|2100|2800|3000|4000|4100/g);
    var regExpNoNumber = new RegExp(/[^0-9]/g);
    var postcode = document.getElementById("postcode").value;

    if( regExp.test( postcode ) ){
        showHideClassesSuccess();
    }
    else if(postcode >=1050 && postcode <=1466 ) {
        showHideClassesSuccess();
    }
    else if(postcode >=1550 && postcode <=2000 ) {
        showHideClassesSuccess();
    }
    else if(postcode >=8000 && postcode <=8220 ) {
        showHideClassesSuccess();
    }
    else if( regExpNoNumber.test( postcode ) || postcode.length >= 5 || 
    postcode.length <=3 ){
        showHideClassesFailure();
        displayAlert('Please enter 4-digit number', 'danger');
    }
    else {
        showHideClassesFailure();
        displayAlert('You are not premium', 'danger');
    }
}

 function displayAlert(text, action) {
    alert.innerHTML = text;
    alert.classList.add(`alert-${action}`);
}

function showHideClassesSuccess() {
    displayAlert('you are premium', 'success');
    submitBtn.classList.add('hide-container');
    alert.classList.remove('alert');
    alert.classList.add('alert-transform');
    hideAlert();
}

function showHideClassesFailure() {
    alert.classList.remove('alert-success');
    submitBtn.classList.remove('hide-container');
    alert.classList.remove('alert-transform');
    alert.classList.add('alert');
}

function hideAlert() {
    setTimeout(function() {
        alert.classList.add('alert-hidden');
        form.reset();
        submitBtn.classList.remove('hide-container');
        showAlert();
    }, 3000);
}

function showAlert() {
    alert.classList.remove('alert-hidden', 'alert-transform', 'alert-success', 'alert-danger');
    alert.innerHTML = "";
}