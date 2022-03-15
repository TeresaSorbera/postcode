const submitBtn = document.querySelector('.submit-btn');
const buttonContainer = document.querySelector('.button-container');
const alert = document.querySelector('.alert');
// for getting value
const postcode = document.getElementById('postcode');
// for submitting the form
const form = document.querySelector('.postcode-form');

const postcodeArray = ['2500', '4600', '3400', '2100', '2800', '3000', '4000', '4100'];
// console.log(postcodeArray);
// for(let i = 0; i <postcodeArray.length; i++) {
//     console.log(postcodeArray[i]);
// }

form.addEventListener('submit', validatePostalCode);

// function getPostcode(e) {
//     e.preventDefault();
//     const value = postcode.value;
//     console.log(value);
//     for(let i = 0; i <postcodeArray.length; i++) {
//         console.log(postcodeArray[i]);
//         if(value === postcodeArray[i]) {
//             displayAlert('you are premium', 'success');
//             console.log('good');
//             break;
//         }
//         else if(!value) {
//             alert.classList.remove('alert-success');
//             displayAlert('please enter a valid postcode', 'danger');
//             break;
//         }
//         else {
//             getRange(value);
//         }
//     }
// }

// // const success = 'you are premium', 'success';
//  function getRange(value) {
//     if(value >=1050 && value <=1466 ) {
//         displayAlert('you are premium', 'success');
//     }
//     else if(value >=1550 && value <=2000 ) {
//         displayAlert('you are premium', 'success');
//     }
//     else if(value >=8000 && value <=8220 ) {
//         displayAlert('you are premium', 'success');
//     }
//     else {
//         alert.classList.remove('alert-success');
//         displayAlert('You are not premium', 'danger');
//     }
//  }

//  function displayAlert(text, action) {
//     alert.innerHTML = text;
//     alert.classList.add(`alert-${action}`);
// }


function validatePostalCode(e){
    e.preventDefault();
    var regExp = new RegExp(/2500|4600|3400|2100|2800|3000|4000|4100/g);
    var regExpNoNumber = new RegExp(/[^0-9]/g);
    var postcode = document.getElementById("postcode").value;

    if( regExp.test( postcode ) ){
        timeInterval;
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

let timeInterval = setInterval(showHideClassesSuccess, 3000);
function showHideClassesSuccess() {
    displayAlert('you are premium', 'success');
    submitBtn.classList.add('hide-container');
    alert.classList.remove('alert');
    alert.classList.add('alert-transform');
}

function showHideClassesFailure() {
    alert.classList.remove('alert-success');
    submitBtn.classList.remove('hide-container');
    alert.classList.remove('alert-transform');
    alert.classList.add('alert');
}