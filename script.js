let inputValue = document.getElementById("guess").value;
let btn = document.getElementById("btn");
let numTag = document.getElementById("num");
let diff = Number(inputValue) - Number(numTag.value);

if (Math.abs(diff) <= 5) {
  respond.textContent = "Hot";
} else {
  respond.textContent = "Cold";
  
}






function generateRandom() {
  var no = Math.floor((Math.random() * 40) - 20);
  numTag.textContent = no;
  
}



btn.addEventListener('click', generateRandom);