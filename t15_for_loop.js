/****************************
Name of task: For Loops
****************************/

console.log("Running t15_for_loop.js")

function getFormInput() {
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
    let startNumber = parseInt(document.getElementById("versesField").value);

    if (isNaN(startNumber)) {
        OUTPUT.innerHTML = "<p>Please enter a number between 1 and 99.</p>";
        return;
    }
    if (startNumber < 1) {
        OUTPUT.innerHTML = "<p>Please enter a number between 1 and 99.</p>";
        return;
    }
    if (startNumber > 99) {
        OUTPUT.innerHTML = "<p>Please enter a number between 1 and 99.</p>";
        return;
    }

    let lyrics = "";

    for (let i = startNumber; i >= 1; i--) {
        let next = i - 1;
        let nextWord = next === 1 ? "1 bottle" : next + " bottles";
        lyrics += "<p>" + i + " bottle" + (i === 1 ? "" : "s") + " of milk on the wall, "
               + i + " bottle" + (i === 1 ? "" : "s") + " of milk.<br>"
               + "Take one down, pass it around, "
               + (next === 0 ? "no more bottles" : nextWord)
               + " of milk on the wall.</p>";
    }

    lyrics += "<p>No more bottles of milk on the wall, no more bottles of milk.<br>"
            + "Go to the store and buy some more, 99 bottles of milk on the wall.</p>";

    OUTPUT.innerHTML = lyrics;
}