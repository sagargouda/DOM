//!! Traversing the DOM
//?? parent node (you can chain in this)
// var itemList = document.querySelector("#items");
// console.log(itemList.parentNode);
// console.log(itemList.parentElement.parentElement.parentElement);

//?? child nodes
// var items = document.getElementById("items");
// console.log(items.children);

//?? first child and first element child
// var items = document.getElementById("items");
// console.log((items.firstElementChild.style.backgroundColor = "red"));

//?? last child and last elememt child
// var items = document.getElementById("items");
// console.log(items.lastChild);
// console.log((items.lastElementChild.style.borderBottom = "solid 6px red"));

//?? nextsiblings
// var lists = document.getElementById("items");
// console.log(lists.nextElementSibling);

//?? previous siblinghs
// var list = document.getElementById("items");
// console.log(list.previousElementSibling);

//?? create elements
var newDiv = document.createElement("div");
//?? adding class to it
newDiv.className = "hello";
//?? adding id
newDiv.id = "sagar";
//?? add attribute
newDiv.setAttribute("title", "Hello");
newDiv.setAttribute("name", "namey");
//?? creating text node
var newDivText = document.createTextNode("kya bolte");
//?? ading text node to div
newDiv.appendChild(newDivText);
//?? inserting in DOM

var container = document.querySelector("header .container");

var row = document.querySelector("header .row");
//?? it willl insetbefore , what we are inserting and what we are inserting before
container.insertBefore(newDiv, row);

console.log(newDiv);
