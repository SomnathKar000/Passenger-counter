let count = 0;
let countId = document.getElementById("Counter");
let cText = document.getElementById("cText");
let allNum = document.getElementById("allNumbers");
function increment() {
  cText.textContent = "People entered : ";
  count += 1;
  countId.textContent = count;
}

function save() {
  cText.textContent = "Total passengers : " + count;
  allNum.textContent += " - " + count;
  countId.textContent = 0;
  count = 0;
}
