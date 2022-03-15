// loop over the array
// const postcodeArray = ['2500', '4600', '3400', '2100', '2800', '3000', '4000', '4100'];
// console.log(postcodeArray);
// for(let i = 0; i <postcodeArray.length; i++) {
//     console.log(postcodeArray[i]);
// }

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