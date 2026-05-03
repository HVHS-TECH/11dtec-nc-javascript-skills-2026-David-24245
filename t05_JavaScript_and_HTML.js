/****************************
Name of task: JavaScript And HTML
****************************/

console.log("Running to5_JavaScript_and_HTML.js")

// Variables
let Username = "David";
let year = 2025;
let age = 15;
let pocketMoney = 20;
let birthYear;
let oldAge;
birthYear = year - age;
oldAge = age + 10;
halfMoney = pocketMoney / 2;

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>";
/****************************
Main code
****************************/
console.log("Hi "+ Username +" as of "+ year +" you are "+ age + " years old")
console.log("You were born in " + birthYear)
console.log("In 10 years you will be " + oldAge + " years old")
console.log("You have " + pocketMoney + " dollars")
console.log("You spend half of your money now you have " + halfMoney)
console.log("Then you get $3, now you have " + (halfMoney + 3) + " dollars")

OUTPUT.innerHTML += "<p>"Hi "+ Username +" as of "+ year +" you are "+ age + " years old"</p>";
OUTPUT.innerHTML += "<p>"You were born in " + birthYear</p>";
OUTPUT.innerHTML += "<p>"In 10 years you will be " + oldAge + " years old"</p>";
OUTPUT.innerHTML += "<p>"You have " + pocketMoney + " dollars"</p>";
OUTPUT.innerHTML += "<p>"You spend half of your money now you have " + halfMoney</p>";
OUTPUT.innerHTML += "<p>"Then you get $3, now you have " + (halfMoney + 3) + " dollars"</p>";
/****************************
Functions
****************************/