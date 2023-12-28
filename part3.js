//?? events (mouse , keyboard events)
//!! button clciked
// var button = document.getElementById("button");
// button.addEventListener("click", function () {
//   console.log("button clicked ");
// });

// var button = document.getElementById("button");

// button.addEventListener("mouseover", function () {
//   var heading = document.querySelector(".title");
//   heading.style.backgroundColor = "red";
// });
// button.addEventListener("mouseout", function () {
//   var heading = document.querySelector(".title");
//   heading.style.backgroundColor = "";
// });

//!! event parameter
// var button = document.getElementById("button");
// button.addEventListener("mouseover", buttonClick);
// button.addEventListener("mouseout", buttonNotClick);
// button.addEventListener("click", buttoni);

// function buttonClick(e) {
//   console.log(e);
// }

//?? so targetting
// var button = document.getElementById("button");

// button.addEventListener("click", buttonClick);

// function buttonClick(e) {
// console.log(e.target.className);
// console.log(e.target.classList);
// var output = document.getElementById("output");
// output.innerHTML = `<h3>${e.target.id}</h3>`;
//?? mouse position wrt window
// console.log(e.clientX);
// console.log(e.clientY);
//?? mouse positon wrt it's element like button
// console.log(e.offsetX);
//   var x = e.offsetX;
//   if (x >= 200) {
//     var turn = document.body;
//     turn.style.backgroundColor = "red";
//   }
// }
// function buttonNotClick(e) {
//   if (e.type !== "click") {
//     var x = e.offsetX;
//     if (x >= 200) {
//       var turn = document.body;
//       turn.style.backgroundColor = "";
//     }
//   }
// }
// function buttoni(e) {
//   if (e.type == "click") {
//     document.body.style.backgroundColor = "black";
//   }
// }
//?? key down event
// }

//!! Mouse events
// var button = document.getElementById("button");

// // button.addEventListener("mouseup", runEvent);

// function runEvent(e) {
//   console.log("Event type : " + e.type);
// }

//?? playing with mouse
// var box = document.getElementById("box");
// var button = document.getElementById("button");

// box.addEventListener("mousemove", mousey);
// function mousey(e) {
//   if (e.offsetX > 200) {
//     box.style.backgroundColor = "red";
//   }
// }

// function mousey(e) {
//   console.log("Event Type: " + e.type);
//   // output.innerHTML =
//   //   "<h3>MouseX: " + e.offsetX + "</h3><h3>MouseY: " + e.offsetY + "</h3>";
//   document.body.style.backgroundColor =
//     "rgb(" + e.offsetX + "," + e.offsetY + "," + (e.offsetX + e.offsetY) + ")";
// }

//?? event of key

// var itemInput = document.getElementById("item");
// itemInput.addEventListener("keydown", keydown);

// function keydown(e) {
//   console.log(e.target.value);

//   // document.getElementById("output").innerHTML =
//   //   "<h3>" + e.target.value + "</h3>";
// }

//?? there are events like cut and paste also
