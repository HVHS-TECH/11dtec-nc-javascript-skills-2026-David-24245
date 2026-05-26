/****************************
Name of task: Return Values
****************************/

console.log("Running t13_functions_return.js")

// Variables
let userName = "David";
let year = 2026;
let age = 15;
let pocketMoney = 20;
let birthYear;
let oldAge;
let halfMoney;        
birthYear = year - age;
oldAge = age + 10;
halfMoney = pocketMoney / 2;

/****************************
Functions
****************************/
function calculateChange(_money, _price){
    let change = _money - _price;
    return change;
}

function getFormInput(){
    const MONEY_FIELD = document.getElementById("moneyField");
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

    let userMoney = parseFloat(MONEY_FIELD.value);
    let chocolatePrice = 4;

    if (userMoney < chocolatePrice){
        console.log("Sorry you can't afford a chocolate bar");
        OUTPUT.innerHTML = "<p>Sorry, you can't afford a chocolate bar.</p>";
    } else {
        let change = calculateChange(userMoney, chocolatePrice);
        console.log("You can afford a chocolate bar");
        OUTPUT.innerHTML = "<p>You can afford a chocolate bar!</p>";
        OUTPUT.innerHTML += "<p>You will get $" + change + " change.</p>";
    }
}