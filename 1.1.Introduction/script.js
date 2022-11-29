console.log(document.title)

document.title = "Modifying the DOM";

document.body.style.backgroundColor = "hotpink";

document.body.style.backgroundColor = "rgb(173,216,230)";

for (let node of document.body.childNodes) {
    console.log(node);
}


