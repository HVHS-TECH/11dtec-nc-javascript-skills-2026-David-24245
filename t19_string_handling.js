/****************************
Name of task: String Handling
****************************/

console.log("Running t19_stringHandling.js")

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
let shoppingList = [];

/****************************
Functions
****************************/
function addItem() {
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    let item = document.getElementById("itemField").value;
    shoppingList.push(item);
    console.log("Added: " + item);
    OUTPUT.innerHTML = "<p>You have added " + item + " to the list.</p>";
    document.getElementById("itemField").value = "";
}


function displayList() {
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    OUTPUT.innerHTML = "<p>These are the items on your shopping list:</p>";
    for (let i = 0; i < shoppingList.length; i++) {
        OUTPUT.innerHTML += shoppingList[i] + "<br>";
    }
    console.log("List displayed Items: " + shoppingList.length);
}


function checkName() {
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    let name = document.getElementById("nameField").value;

    name = name.trim();

    if (name.length >= 3) {
        OUTPUT.innerHTML = "<p>Thanks, " + name + "! That's a valid name.</p>";
        console.log("Valid name entered: " + name);
    } else {
        OUTPUT.innerHTML = "<p>Please enter a name that is at least three letters long.</p>";
        console.log("Invalid name entered: " + name);
    }

    document.getElementById("nameField").value = "";
}