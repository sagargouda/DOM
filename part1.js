// console.dir(document);
// console.log(document.firstChild);
//?? changing stuff
// document.title = 123322;
//?? grabbing head element
// console.log(document.head);
//?? getting all the elements
// console.log(document.all);
//?? getting particular element
// console.log(document.all[9]);

//?? selectors (get element by id)

// const sm = document.getElementById("header-title");
// console.log(sm);
//?? textcontent and innertext
// sm.textContent = "hello";
// sm.innerText = "Goodbye";
// console.log(sm.textContent);
//?? inner html
// sm.innerHTML = `<h3>Hey sagar</h3>`;
//?? changing style
// sm.style.backgroundColor = "red";
// sm.style.borderBottom = "solid 3px black";

//!! get elements by class name(we get a html colection in both tag name and class name)
// var items = document.getElementsByClassName("list-group-item");
// console.log((items[1].textContent = "hello2"));
//?? traversing should be done if i wanna change entire
// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "red";
// }

//!! get element by tag name (same like class instead of using class we use tag)

//!!! query selector
// var header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px red";

// var input = document.querySelector("input");
// input.value = "Hello sagar";

// var submit = document.querySelector('input[type = "submit"]');
// submit.value = "send";

//!! query selectopr all
// var item = document.querySelector(".list-group");
// item.style.color = "red";

//!! selecting children
// //?? last child
// var select = document.querySelector(".list-group-item:last-child");
// select.style.color = "blue";

// //?? nth child
// var selecting = document.querySelector(".list-group-item:nth-child(even)");
// selecting.style.backgroundColor = "red";

//!! query selector All (more than one element)

// var titles = document.querySelectorAll(".title");
// for (let i = 0; i < titles.length; i++) titles[i].style.backgroundColor = "red";

// var odd = document.querySelectorAll("li:nth-child(odd");
// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "red";
// }
