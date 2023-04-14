const prompt= require('prompt-sync')();
const number=parseInt(prompt("Enter Withdrowal amount :"));
switch(number){
    case '50':
        console.log("Insufficient balance");
        break;
    case "44":
        console.log("Your Withdrowal is succesfful, Collete Your Money ");
        break;
    default:
        console.log("invelid input" +" "+ "try again");
}

const numbers=parseInt(prompt("enter number of days in 1 To 7 :"));

switch(numbers){
    case 1:
        console.log("monday");
    break;

    case 2:
        console.log("tuesday");
    break;

    case 3:
        console.log("wednesday");
    break;

    case 4:
        console.log("thrusday");
    break;
    
    case 5:
        console.log("friday");
    break;  

    case 6:
        console.log("satuerday");
    break;

    case 7:
        console.log("sunday");
    break;

    default:
        console.log("Invalid input please enter the number between 1 to 7");

}