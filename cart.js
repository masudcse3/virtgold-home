// Opening shipping charge box
const openShippingChargeBoxIcon = document.getElementById(
  "open-shipping-charge-box"
);

openShippingChargeBoxIcon.addEventListener("click", () => {
  toggleShippingChargeBox();
});

// Shipping category item
const shippingCategoryItems = document.querySelectorAll(".shipping-category");

shippingCategoryItems.forEach((category) => {
  category.addEventListener("click", (event) => {
    const type = event.currentTarget.innerText.split(" ")[0];
    if (type.toLowerCase() == "regular") {
      addRegularShipping();
      toggleShippingChargeBox();
      calculateCartsGrandTotal();
    } else if (type.toLowerCase() == "standard") {
      addStandardShipping();
      toggleShippingChargeBox();
      calculateCartsGrandTotal();
    } else {
      addFastShipping();
      toggleShippingChargeBox();
      calculateCartsGrandTotal();
    }
  });
});

function toggleShippingChargeBox() {
  const shippingChargeBox = document.getElementById("shipping-charge-box");
  shippingChargeBox.classList.toggle("hidden");
}

function addRegularShipping() {
  const shippingType = document.getElementById("shipping-type");
  shippingType.innerHTML = `
    Regular Delivery $
    <span id="shipping-charge">5.00</span>
    `;
}
function addStandardShipping() {
  const shippingType = document.getElementById("shipping-type");
  shippingType.innerHTML = `
    Standard Delivery $
    <span id="shipping-charge">8.00</span>
    `;
}

function addFastShipping() {
  const shippingType = document.getElementById("shipping-type");
  shippingType.innerHTML = `
    Fast Delivery $
    <span id="shipping-charge">10.00</span>
    `;
}


// Increasing cart items and calculating sub-total and total price
const minusIconButtons = document.querySelectorAll(".minus-icon");
const plusIconButtons = document.querySelectorAll(".plus-icon");
const itemQuantityFields = document.querySelectorAll(".item-quantity");
const itemsPrice = document.querySelectorAll(".single-item-price");
const itemTotal = document.querySelectorAll(".item-price-total");

// For Cart Minus Button
for (let i = 0; i < minusIconButtons.length; i++) {
  minusIconButtons[i].addEventListener("click", (event) => {
    const currentBtn = event.currentTarget;
    const buttonsParentBox = currentBtn.parentNode;
    const theItemCard = buttonsParentBox.parentNode.parentNode;
    const singleItemPrice = parseInt(
      theItemCard.querySelector(".single-item-price").innerText
    );
    const itemTotalPriceField = theItemCard.querySelector(".item-price-total");
    const itemTotalPrice = parseInt(itemTotalPriceField.innerText);
    const itemQuantityField = theItemCard.querySelector(".item-quantity");
    const itemQuantity = parseInt(itemQuantityField.innerText);
    if (itemQuantity > 0) {
      itemQuantityField.innerText = itemQuantity - 1;
      itemTotalPriceField.innerText = itemTotalPrice - singleItemPrice;
      calculateCartsTotal();
      calculateCartsGrandTotal();
    } else {
      alert("Can't be reduced");
    }
  });
}

// For Cart Plus Button
for (let i = 0; i < plusIconButtons.length; i++) {
  plusIconButtons[i].addEventListener("click", (event) => {
    const currentBtn = event.currentTarget;
    const buttonsParentBox = currentBtn.parentNode;
    const theItemCard = buttonsParentBox.parentNode.parentNode;
    const singleItemPrice = parseInt(
      theItemCard.querySelector(".single-item-price").innerText
    );
    const itemTotalPriceField = theItemCard.querySelector(".item-price-total");
    const itemTotalPrice = parseInt(itemTotalPriceField.innerText);
    const itemQuantityField = theItemCard.querySelector(".item-quantity");
    const itemQuantity = parseInt(itemQuantityField.innerText);
    // Updating the value
    itemQuantityField.innerText = itemQuantity + 1;
    itemTotalPriceField.innerText = itemTotalPrice + singleItemPrice;
    calculateCartsTotal();
    calculateCartsGrandTotal();
  });
}

// Calculating Total
function calculateCartsTotal() {
  const cartsTotalFields = document.querySelectorAll(".carts-total");
  const cartItems = document.querySelectorAll(".item-card");

  let total = 0;

  for (let i = 0; i<cartItems.length; i++) {
    const itemTotalPrice = parseInt(
      cartItems[i].querySelector(".item-price-total").innerText
    );
    total += itemTotalPrice;
  }
  cartsTotalFields.forEach(item => {
    item.innerText = total;
  })
}

// Calculating SubTotal
function calculateCartsGrandTotal() {
    const grandTotalFields = document.querySelectorAll('.carts-grand-total');
    const cartsTotalField = document.querySelector('.carts-total');
    const cartsTotalPrice = parseInt(cartsTotalField.innerText);
    const shippingChargeField = document.getElementById('shipping-charge');
    const shippingChargePrice = parseInt(shippingChargeField.innerText);

    const grandTotal = cartsTotalPrice + shippingChargePrice;
    grandTotalFields.forEach((item) => {
        item.innerText = grandTotal;
    })
}



