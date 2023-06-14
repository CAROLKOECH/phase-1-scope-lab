// Write your solution in this file
var customerName = 'bob';

function upperCaseCustomerName() {
    if (customerName) {
      customerName = customerName.toUpperCase();
      return customerName;
    } else {
      return "customerName is not defined.";
    }
  }
  var bestCustomer;

function setBestCustomer() {
  bestCustomer = 'not bob';
  console.log(bestCustomer);
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';  // Update the value to 'maybe bob'
    console.log(bestCustomer);
  }
  
  const leastFavoriteCustomer = 'John Doe';

function changeLeastFavoriteCustomer() {
  throw new Error('Assignment to constant variable.');
}



  



