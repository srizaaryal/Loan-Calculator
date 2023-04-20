window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});
function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const loanAmount= document.querySelector('#loan-amount');
  loanAmount.value= 10000;

  const loanYears= document.querySelector('#loan-years');
  loanYears.value= 10;

  const loanRate= document.querySelector('#loan-rate');
  loanRate.value= 5;

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValuesFromUI= getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValuesFromUI));

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  monthlyPayment= (values.amount *(values.rate/12))/(1-(1+(values.rate/12))**(-12*values.years));
  monthlyPaymentInStr= monthlyPayment.toFixed(2);
  return monthlyPaymentInStr;

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPaymentDisplay= document.getElementById('monthly-payment');
  return monthlyPaymentDisplay.innerText= '$'+ monthly;
}
