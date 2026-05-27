/****************************
Name of task: Arrays
****************************/

console.log("Running t14_arrays_1.js")

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
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    let userMoney = document.getElementById("moneyField").value;

    if (userMoney < 4){
        console.log("Sorry you can't afford a chocolate bar");
        OUTPUT.innerHTML = "<p>Sorry, you can't afford a chocolate bar.</p>";
    } else {
        let change = calculateChange(userMoney, 4);
        console.log("You can afford a chocolate bar");
        OUTPUT.innerHTML = "<p>You can afford a chocolate bar!</p>";
        OUTPUT.innerHTML += "<p>You will get $" + change + " change.</p>";
    }
}

function getFormInput(){
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    let classArray = ["You loath chocolate", "Chocolate is meh", "Chocolate is pretty good", "Chocolate is the best thing ever"];
    let choice = CHOOSE_FIELD.value;

    if (choice = 0){
        console.log("You choose: "+classArray[choice]+"<br>");
        OUTPUT.innerHTML = "You choose: "+classArray[choice]+"<br>";
    } else {
        let change = calculateChange(userMoney, 4);
        console.log("You can afford a chocolate bar");
        OUTPUT.innerHTML = "<p>You can afford a chocolate bar!</p>";
        OUTPUT.innerHTML += "<p>You will get $" + change + " change.</p>";
    }
}