const colors = ["lightgreen", "lightblue", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click", function () {
  // const randomColor=document.body.style
  const randomNumber = getRandom();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
let getRandom = () => {
  return Math.floor(Math.random() * colors.length);
};
