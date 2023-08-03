let count = document.getElementById("count");
let price = document.getElementById("price");
document.getElementById("increment").addEventListener("click", () => {
  count.innerText = parseInt(count.innerText) + 1;
  price.innerText = (parseInt(count.innerText) * 1).toFixed(2);
});
document.getElementById("decrement").addEventListener("click", () => {
  let countValue = parseInt(count.innerText);
  if (countValue === 1) {
    count.innerText = 1;
  } else {
    count.innerText = countValue - 1;
  }
  price.innerText = (parseInt(count.innerText) * 1).toFixed(2);
});
