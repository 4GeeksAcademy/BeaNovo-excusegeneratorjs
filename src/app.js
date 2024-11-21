/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateExcuse() {
  const who = ["My cat", "The mailman", "An alien", "My neighbour"];
  const action = ["jumped out", "lost", "broke", "soiled"];
  const what = ["the window", "my keys", "my project", "my clothes"];
  const when = ["yesterday", "this morning", "last week", "just now"];

  const excuse =
    who[Math.floor(Math.random() * who.length)] +
    " " +
    action[Math.floor(Math.random() * action.length)] +
    " " +
    what[Math.floor(Math.random() * what.length)] +
    " " +
    when[Math.floor(Math.random() * when.length)] +
    ".";

  return excuse;
}

console.log(generateExcuse());

window.onload = function() {
  //write your code here
  document.querySelector("#frase").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};
