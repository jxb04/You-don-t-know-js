const TAX_RATE = 0.08;
const ACCESSORY_PRICE = 9.99;
const PHONE_PRICE = 199.99;
const SPENDING_THRESHOLD = 599.95;

var bankAccount = 0;
var numPhones = 0;

var total = 0;

function calculateFinalPurchaseAmount(amt) {
  amt = amt + (amt*TAX_RATE);

  return (amt);
}


function formatAmount() {
	return "$" + total.toFixed(2);
}

bankAccount = prompt("How much money you got?");

while ((ACCESSORY_PRICE+PHONE_PRICE) < bankAccount) {
  bankAccount = bankAccount - (ACCESSORY_PRICE+PHONE_PRICE);
  numPhones = numPhones + 1;
  total = total + (ACCESSORY_PRICE+PHONE_PRICE);
}

if (bankAccount < SPENDING_THRESHOLD) {
  console.log("Purchace possible");
}

console.log(calculateFinalPurchaseAmount(total));
console.log ("Total purchase amount  " + formatAmount());
console.log()


