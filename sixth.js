let count = document.getElementById("count");
let price = document.getElementById("price");

document.getElementById("increment").addEventListener("click", () => {
  count.value = parseInt(count.value) + 1;
  price.innerText = (parseInt(count.value) * 1).toFixed(2);
});

document.getElementById("decrement").addEventListener("click", () => {
  let countValue = parseInt(count.value);
  if (countValue === 0) {
    count.value = 0;
  } else {
    count.value = countValue - 1;
  }
  price.innerText = (parseInt(count.value) * 1).toFixed(2);
});

count.addEventListener('input', (event) => {
  const quantity = event.target.value;
  if(!quantity){
    price.innerText = (0).toFixed(2);
  } 
  else if(quantity < 0){
    alert('Negative value is not acceptable!');
    event.target.value = 1;
    price.innerText = (1).toFixed(2);
  }
  else {
    price.innerText = (parseInt(quantity) * 1).toFixed(2);
  }
})