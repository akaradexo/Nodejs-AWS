"use strict";
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const address = document.getElementById('address');
const box = document.getElementById('boxDetails');
const delivery = document.getElementById('delivery');
const tip = document.getElementById('tip');
const summaryTable = document.getElementById('summaryTable');
const resetInput = document.getElementsByClassName("form-control");
const showBtn = document.getElementById('btn-show');
// const isDelivery = document.querySelector("input[name=delivery]:checked");

// Show input error message
const showError = function(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
  }
  
  // Show success outline
  const showSuccess= function(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
  }

// Check email is valid
const checkEmail=function(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        console.log("success")
      showSuccess(input);
     
    } else {
        console.log("fail")
      showError(input, 'Email is not valid');
    }
  }
// Get field-name
const getFieldName = function(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// Check required fields
const checkRequired = function(inputArr) {
    let isRequired = false;
    inputArr.forEach(function(input) {
      if (input.value.trim() === '') {
        showError(input, `${getFieldName(input)} is required`);
        isRequired = true;
      } else {
        showSuccess(input);
      }
    });
    return isRequired;
  }
  //display summary
const summuryDetails = function([username, email , address,selectedToppings,isDelivery,tip]){
        var newRow1 = summaryTable.insertRow(-1);
        var newCell = newRow1.insertCell(0);
        var newText = document.createTextNode(" Name : ");
        newCell.appendChild(newText);
        newCell = newRow1.insertCell(1);
        newText  = document.createTextNode(username.value);
        newCell.appendChild(newText);

        var newRow2 = summaryTable.insertRow(-1);
        var newCell = newRow2.insertCell(0);
        var newText = document.createTextNode(" Email : ");
        newCell.appendChild(newText);
        newCell = newRow2.insertCell(1);
        newText  = document.createTextNode(email.value);
        newCell.appendChild(newText);

        var newRow3 = summaryTable.insertRow(-1);
        var newCell = newRow3.insertCell(0);
        var newText = document.createTextNode(" Address : ");
        newCell.appendChild(newText);
        newCell = newRow3.insertCell(1);
        newText  = document.createTextNode(address.value);
        newCell.appendChild(newText);

        var newRow4 = summaryTable.insertRow(-1);
        var newCell = newRow4.insertCell(0);
        var newText = document.createTextNode(" Toppings : ");
        newCell.appendChild(newText);
        newCell = newRow4.insertCell(1);
        newText  = document.createTextNode(selectedToppings);
        newCell.appendChild(newText);

        var newRow5 = summaryTable.insertRow(-1);
        var newCell = newRow5.insertCell(0);
        var newText = document.createTextNode(" Delivery : ");
        newCell.appendChild(newText);
        newCell = newRow5.insertCell(1);
        newText  = document.createTextNode(isDelivery);
        newCell.appendChild(newText);

        var noToppings = selectedToppings.length;
        var total = 0;
        console.log(noToppings);
        var basePrice = 10;
        var diliveryCharge = 0;
        var tipPercent = 0;
        if (noToppings >= 3) {
            diliveryCharge = 0;
            tipPercent = 0.2;
        }else{
             diliveryCharge = 3;
            tipPercent = tip.value/100;
        }
        var totalTip = tipPercent * basePrice;
        console.log(diliveryCharge,tipPercent);
        total = ((basePrice + 1.5*noToppings+diliveryCharge)*1.0+totalTip);

        var newRow6 = summaryTable.insertRow(-1);
        var newCell = newRow6.insertCell(0);
        var newText = document.createTextNode(" Total : ");
        newCell.appendChild(newText);
        newCell = newRow6.insertCell(1);
        newText  = document.createTextNode(total);
        newCell.appendChild(newText);

        username.value = "";
        email.value = "";
        address.value = "";
}

// Event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    if(!checkRequired([username, email])){
        checkEmail(email);
        showBtn.disabled = false;
    }
    //get the checked toppings
    const selectedToppings = Array
    .from(document.querySelectorAll('input[type="checkbox"]'))
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);
     //get the checked toppings
     const isDelivery = Array
     .from(document.querySelectorAll("input[name=delivery]"))
     .filter((checkbox) => checkbox.checked)
     .map((checkbox) => checkbox.value);
    //summury Details
    console.log(isDelivery)
    
    summuryDetails([username, email , address,selectedToppings,isDelivery,tip]);
  });

form.addEventListener('reset', () => {
    console.log("s");
    form.reset();
    showBtn.disabled = true;
    box.style.display = 'none';

});

showBtn.addEventListener("click", ()=>{
   
    if (box.style.display === 'none') {
        box.style.display = 'block';
      } else {
        box.style.display = 'none';
      }
});