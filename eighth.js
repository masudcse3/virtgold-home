let rangeValue = document.getElementById("rangeValue");
let priceValue = 9.99;
let count = document.getElementById("count");
let price = document.getElementById("price");
let topSubTotal = document.getElementById("topSubTotal");
let subTotal = document.getElementById("subTotal");
let fastPass = document.getElementById("fastPass");
let fastPassValue = 25;
let fastPass_checkbox = document.getElementById("fast-pass-checkbox");
let input_range = document.getElementById("inputRange");

count.addEventListener('change', () => {
  const quantity = parseInt(count.value);
  if(quantity < 1){
    alert('Value must be greater than 0');
    topSubTotal.innerText = priceValue;
    subTotal.innerText =  priceValue;
    count.value = 1;
  }else {
    topSubTotal.innerText = quantity * priceValue;
    subTotal.innerText = quantity * priceValue;
  }
})

function increment() {
  let countValue = parseInt(count.value);
  count.value = countValue + 1;
  if (fastPass_checkbox.checked) {
    parseInt(input_range.value) > 1
      ? (subTotal.innerText = parseFloat(
          parseInt(count.value) * parseFloat(priceValue) + fastPassValue
        ).toFixed(2))
      : (subTotal.innerText = parseFloat(
          (parseInt(count.value) * priceValue + fastPassValue).toFixed(2)
        ));
  } else {
    parseInt(input_range.value) > 1
      ? (subTotal.innerText = parseFloat(
          parseInt(count.value) * parseFloat(priceValue)
        ).toFixed(2))
      : (subTotal.innerText = parseFloat(
          (parseInt(count.value) * priceValue).toFixed(2)
        ));
  }
  topSubTotal.innerText = subTotal.innerText;
}
function decrement() {
  let countValue = parseInt(count.value);
  if (countValue === 1) {
    count.value = 1;
  } else {
    count.value = countValue - 1;
  }
  if (fastPass_checkbox.checked) {
    parseInt(input_range.value) > 1
      ? (subTotal.innerText = parseFloat(
          parseInt(count.value) * parseFloat(priceValue) + fastPassValue
        ).toFixed(2))
      : (subTotal.innerText = parseFloat(
          (parseInt(count.value) * priceValue + fastPassValue).toFixed(2)
        ));
  } else {
    parseInt(input_range.value) > 1
      ? (subTotal.innerText = parseFloat(
          parseInt(count.value) * parseFloat(priceValue)
        ).toFixed(2))
      : (subTotal.innerText = parseFloat(
          (parseInt(count.value) * priceValue).toFixed(2)
        ));
  }
  topSubTotal.innerText = subTotal.innerText;
}

function inputRange(e) {
  count.value = 1;
  rangeValue.innerText = e.value;
  fastPass_checkbox.checked = false;
  priceValue = parseFloat(e.value * parseFloat(price.innerText)).toFixed(2);
  subTotal.innerText = priceValue;
  topSubTotal.innerText = priceValue;
}

function fastPassCheckBox(e) {
  if (e.checked) {
    subTotal.innerText = parseFloat(
      (parseFloat(subTotal.innerText) + 25).toFixed(2)
    );
    topSubTotal.innerText = subTotal.innerText;
  } else {
    subTotal.innerText = parseFloat(
      (parseFloat(subTotal.innerText) - 25).toFixed(2)
    );
    topSubTotal.innerText = subTotal.innerText;
  }
}
function selectOption(e) {
  let selectValue = e.value;
  input_range.value = 1;
  fastPass_checkbox.checked = false;
  rangeValue.innerText = input_range.value;
  if (selectValue === "Raid Level 150 (Normal Mode)") {
    priceValue = parseFloat(7.99).toFixed(2);
    price.innerText = priceValue;
    subTotal.innerText = priceValue;
    topSubTotal.innerText = priceValue;
  } else if (selectValue === "Raid Level 300 (Excited Mood)") {
    priceValue = parseFloat(17.59).toFixed(2);
    price.innerText = priceValue;
    subTotal.innerText = priceValue;
    topSubTotal.innerText = priceValue;
  } else if (selectValue === "Raid Level 450 (Melancholic Mood)") {
    priceValue = parseFloat(27.39).toFixed(2);
    price.innerText = priceValue;
    subTotal.innerText = priceValue;
    topSubTotal.innerText = priceValue;
  }
}

function priceReset(resetPrice) {
  priceValue = parseFloat(resetPrice).toFixed(2);
  console.log(priceValue);
  price.innerText = priceValue;
  subTotal.innerText = priceValue;
  topSubTotal.innerText = priceValue;
}

function updatePlayFunction(playPrice) {
  let playText = document.getElementById("playText");
  let playFee = document.getElementById("playFee");

  playText.parentElement.classList.remove("hidden");
  playText.parentElement.classList.add("block");

  priceReset(9.99);
  playFee.innerText = (parseFloat(playPrice) - parseFloat(priceValue)).toFixed(
    2
  );
  input_range.value = 1;
  fastPass_checkbox.checked = false;
  rangeValue.innerText = input_range.value;
  count.value = 1;
  priceValue = parseFloat(priceValue + parseFloat(playFee.innerText)).toFixed(
    2
  );
  priceReset(playPrice);
}

const radioInputs = document.querySelectorAll('input[name="play"]');
radioInputs.forEach((radioInput) => {
  radioInput.addEventListener("change", (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === "Play For") {
      input_range.value = 1;
      fastPass_checkbox.checked = false;
      rangeValue.innerText = input_range.value;
      count.value = 1;
      let playText = document.getElementById("playText");
      playText.parentElement.classList.remove("block");
      playText.parentElement.classList.add("hidden");
      priceReset(9.99);
    } else if (selectedValue === "Play With") {
      updatePlayFunction(17.25);
    } else if (selectedValue === "Learner Raid (150 Invocation Only)") {
      updatePlayFunction(29.99);
    }
  });
});


// --------------------------------------- // ---------------------------------------- //


// Settings for Items Slider
$(document).on("ready", function () {
  $(".items").slick({
    centerMode: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: $(".fa-arrow-left-long"),
    nextArrow: $(".fa-arrow-right-long"),
    responsive: [
      {
        breakpoint: 1900, // Large devices breakpoint
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1400, // Large devices breakpoint
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900, // Medium devices breakpoint
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Mobile devices breakpoint
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});