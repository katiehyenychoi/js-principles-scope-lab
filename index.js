// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// function setBestCustomer() {
//      bestCustomer = "not bob";
// }

function setBestCustomer() {
    bestCustomer = "not bob";
    return bestCustomer;
}


function overwriteBestCustomer(revision) {
    bestCustomer = revision;
}


const leastFavoriteCustomer = "initial";

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "later";
}