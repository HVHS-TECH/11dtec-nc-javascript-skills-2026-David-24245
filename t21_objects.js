/****************************
Name of task: Objects
****************************/

console.log("Running t21_objects.js")

// Constants
const userName = "David";
const year = 2026;
const age = 15;
const pocketMoney = 20;
const birthYear = year - age;
const oldAge = age + 10;
const halfMoney = pocketMoney / 2;
const minNameLength = 3;

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

    if (name.length >= minNameLength) {
        OUTPUT.innerHTML = "<p>Thanks, " + name + "! That's a valid name.</p>";
        console.log("Valid name entered: " + name);
    } else {
        OUTPUT.innerHTML = "<p>Please enter a name that is at least " + minNameLength + " letters long.</p>";
        console.log("Invalid name entered: " + name);
    }

    document.getElementById("nameField").value = "";
}


function addUser() {
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

    let name = document.getElementById("userNameField").value;
    name = name.trim();

    const userAge = document.getElementById("userAgeField").value;
    const userPocketMoney = document.getElementById("userPocketMoneyField").value;
    const chocolatePreference = document.getElementById("chocolateField").value;

    if (name.length < minNameLength) {
        OUTPUT.innerHTML = "<p>Please enter a name that is at least " + minNameLength + " letters long.</p>";
        console.log("Invalid name entered: " + name);
        return;
    }

    const newUser = {
        name: name,
        age: userAge,
        pocketMoney: userPocketMoney,
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