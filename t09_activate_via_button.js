/****************************
Name of task: Functions Parameters
****************************/

console.log("Running to7_functions_parameters.js")

// Variables
let Username = "";
let year = 2026;
let age = "";
let item = "";
let price = "";
let pocketMoney = 20;
let birthYear;
let oldAge;
birthYear = year - age;
oldAge = age + 10;
halfMoney = pocketMoney / 2;

const OUTPUT = document.getElementById("spaceForJavaScriptOutput")
OUTPUT.innerHTML = ("<h2>Added by JavaScript</h2>")

/****************************
Main code
****************************/
displayWelcome("David")
displayProduct("Chocolate", 4)
displayProduct("Chips", 3)
displayProduct("Drink", 2.50)

/****************************
Functions
****************************/
function displayWelcome(Username) {
    OUTPUT.innerHTML += "<p> Welcome to the shop "+Username+"</p>";
}

function displayProduct(item, price) {
    OUTPUT.innerHTML += "<p> "+item+": $"+price+" </p>";
}
