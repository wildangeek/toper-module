import check from "./script2.js";

let button = document.getElementById("button");
let output = document.getElementById("output");

button.addEventListener("click", function () {
  let string = document.getElementById("input").value;
  output.innerHTML = check(string);
});
