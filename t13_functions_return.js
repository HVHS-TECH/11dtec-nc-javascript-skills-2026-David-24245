/****************************
Name of task: Functions Return
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
Main code
****************************/

/****************************
Functions
****************************/
function getFormInput(){
    const MONEY_FIELD = document.getElementById("moneyField");   
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");  
    let userMoney = MONEY_FIELD.value;

    const AGE_FIELD = document.getElementById("ageField");   
    let userAge = AGE_FIELD.value;

    OUTPUT.innerHTML = "<p>You are " + userAge + " years old and you have $" + userMoney +"</p>";


        if (userMoney < 4){
    console.log("Sorry you can't afford a chocolate bar")
        } else if (userMoney >= 4){
    console.log("You can afford a chocolate bar")
}


function calculateChange(_money, _price){
    let price = _money * 18.80;
    price = price - (price *0.105);
    price = price - (price * 0.04);
    price = price + 10;
    return price;

    let mondayPay = calculateChange(8);

    OUTPUT.innerHTML += "This week's pay:<br>";
}
}