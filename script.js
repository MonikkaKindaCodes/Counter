let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count = count++;
  countEl.innerText = count;
  console.log(count);
}

function decrement() {
  count = count--;
  countEl.innerText = count;
  console.log(count);
}

function save() {
  console.log(count);
}
