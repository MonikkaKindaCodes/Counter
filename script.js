const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");

let count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
}

function decrement() {
  count -= 1;
  countEl.innerText = count;
}

function save() {
  let entry = count + " - ";
  saveEl.innerText += entry;
}
