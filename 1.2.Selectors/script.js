//const allImportant = document.querySelectorAll(".important");
//console.log(allImportant) <- fontionne -> the class selector is valid

/*const important = document.querySelector(".important");
important.setAttribute("title", "This is an important item");
-> works but only for the first paragraph (as it's supposed to)*/

/*const important = document.querySelectorAll(".important");
important.setAttribute("title", "This is an important item");
-> doesn't work*/

/*const allImportant = document.querySelectorAll(".important");
allImportant.setAttribute("title", "This is an important item");
-> Uncaught TypeError: allImportant.setAttribute is not a function*/

/*const allImportant = document.querySelectorAll(".important"); {
    setAttribute("title", "This is an important item");
} -> "Uncaught ReferenceError: setAttribute is not defined"*/

/*const allImportant = document.querySelectorAll(".important");
allImportant.title = "This is an important item";
-> displays 'This is an important item' (single quotes included) in the console but nothing else*/

/*const allImportant = document.querySelectorAll(".important");
document.allImportant.title = "This is an important item";
-> Uncaught TypeError: Cannot set properties of undefined (setting 'title')*/

/*const allImportant = document.querySelectorAll(".important");
document.body.allImportant.title = "This is an important item";
-> Uncaught TypeError: Cannot set properties of undefined (setting 'title')*/

/*const allImportant = document.querySelectorAll(".important");
document.allImportant.setAttribute("title", "This is an important item");
-> Uncaught TypeError: Cannot read properties of undefined (reading 'setAttribute')*/

/*const allImportant = document.querySelectorAll(".important");
document.body.allImportant = {
    title: "This is an important item"
};
-> ...constructs a title object? no error message, at least*/

/*const allImportant = document.querySelectorAll(".important");
document.body.important = {
    title: "This is an important item"
};
-> same as above?*/

/*document.body.important.setAttribute("title", "This is an important item");
-> Uncaught TypeError: Cannot read properties of undefined (reading 'setAttribute')*/

/*const allImportant = document.querySelectorAll(".important"); {
    allImportant.setAttribute("title", "This is an important item");
};
-> Uncaught TypeError: allImportant.setAttribute is not a function*/

/*const allImportant = document.querySelectorAll(".important");
setAttribute.allImportant("title", "This is an important item");
-> Uncaught ReferenceError: setAttribute is not defined*/

/*const allImportant = document.querySelectorAll(".important");
document.body.setAttribute.allImportant("title", "This is an important item");
-> Uncaught TypeError: document.body.setAttribute.allImportant is not a function*/

/*const allImportant = document.querySelectorAll(".important");
setAttribute.allImportant("title", "This is an important item");*/

/*const allImportant = document.querySelectorAll(".important"); {
    setAttribute.allImportant("title", "This is an important item");
};
-> Uncaught ReferenceError: setAttribute is not defined*/

/*document.querySelectorAll('.important').setAttribute("title", "This is an important item");
-> Uncaught TypeError: document.querySelectorAll(...).setAttribute is not a function*/






/*const allImages = document.querySelectorAll('img')
if class = important, {display = block} else {display = none}*/
//const allImages = document.querySelectorAll('img');
/*for (let i = 0; i < allImages.length; i++); {
    console.log(allImages[i]);
}*/
//console.log(allImages[0]);
//console.log(allImages[1]);
/*if (img === 'important') {
    display = block;
} else {
    display = none;
}**/

