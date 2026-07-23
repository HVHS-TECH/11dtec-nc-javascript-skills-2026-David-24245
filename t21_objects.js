/****************************
Name of task: Objects
****************************/

console.log("Running t21_objects.js")

// Constants
const USER_NAME = "David";
const YEAR = 2026;
const AGE = 15;
const POCKET_MONEY = 20;
const BIRTH_YEAR = YEAR - AGE;
const OLD_AGE = AGE + 10;
const HALF_MONEY = POCKET_MONEY / 2;
const MIN_NAME_LENGTH = 3;

// Variables
let shoppingList = [];
let users = [];

/****************************
Functions
****************************/
function addItem() {
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    const item = document.getElementById("itemField").value;
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

    if (name.length >= MIN_NAME_LENGTH) {
        OUTPUT.innerHTML = "<p>Thanks, " + name + "! That's a valid name.</p>";
        console.log("Valid name entered: " + name);
    } else {
        OUTPUT.innerHTML = "<p>Please enter a name that is at least " + MIN_NAME_LENGTH + " letters long.</p>";
        console.log("Invalid name entered: " + name);
    }

    document.getElementById("nameField").value = "";
}


function addUser() {
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

    let name = document.getElementById("userNameField").value;
    name = name.trim();

    const age = document.getElementById("userAgeField").value;
    const pocketMoney = document.getElementById("userPocketMoneyField").value;
    const chocolatePreference = document.getElementById("chocolateField").value;

    if (name.length < MIN_NAME_LENGTH) {
        OUTPUT.innerHTML = "<p>Please enter a name that is at least " + MIN_NAME_LENGTH + " letters long.</p>";
        console.log("Invalid name entered: " + name);
        return;
    }

    const newUser = {
        name: name,
        age: age,
        pocketMoney: pocketMoney,
        chocolatePreference: chocolatePreference
    };

    users.push(newUser);
    console.log("Added user: " + name);
    OUTPUT.innerHTML = "<p>" + name + " has been added.</p>";

    document.getElementById("userNameField").value = "";
    document.getElementById("userAgeField").value = "";
    document.getElementById("userPocketMoneyField").value = "";
}


function displayWelcome() {
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    OUTPUT.innerHTML = "<p>Here are your users:</p>";

    for (let i = 0; i < users.length; i++) {
        const thisUser = users[i];
        OUTPUT.innerHTML += "Welcome " + thisUser.name + "! You are " + thisUser.age +
            " years old, have $" + thisUser.pocketMoney + " pocket money, and love " +
            thisUser.chocolatePreference + " chocolate.<br>";
        console.log("User " + i + " is " + thisUser.name + " and is " + thisUser.age);
    }
}