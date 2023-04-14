const prompt = require('prompt-sync')();
const amount = parseInt(prompt("Enter Withdrawal amount: "));
switch (amount) {
  case 50:
    console.log("Insufficient balance");
    break;
  default:
    if (amount < 50) {
      console.log("Withdrawal amount should be at least 50");
    } else {
      console.log("Your withdrawal is successful. Collect your money.");
    }
    break;
} 