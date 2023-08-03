//Increment and decrement fields
//initialize value
let count = 0;
//Select the element with id
let IncrementBtn = document.getElementById("incrementBtn");
let decrementBtn = document.getElementById("decrementBtn");
let fieldText = document.getElementById("fieldText");
let priceField = document.getElementById("price-amount");

IncrementBtn.addEventListener("click", () => {
  fieldText.innerText = ++count;
  priceField.innerText = count * 4;
});

decrementBtn.addEventListener("click", () => {
  if (count <= 0) {
    alert("Negative value not allowed!");
  } else {
    fieldText.innerText = --count;
  }
  if (count <= 0) {
    priceField.innerText = 0;
  } else {
    priceField.innerText = priceField.innerText - 4;
  }
});
//Increment and decrement fields

//tab buttons click then fire the text field
let firstBtn = document.getElementById("firstBtn");
let secondBtn = document.getElementById("secondBtn");
let thirdBtn = document.getElementById("thirdBtn");
let fourthBtn = document.getElementById("fourthBtn");
//server details id selected
let serverId = document.getElementById("server-id");
let delivery = document.getElementById("delivery");
let amount = document.getElementById("amount");

//add event listeners on the buttons
firstBtn.addEventListener("click", () => {
  serverId.innerText = "Season 1 -Softcore";
  delivery.innerText = "Face To Face";
  amount.innerText = `${priceField.innerText} M`;
});

secondBtn.addEventListener("click", () => {
  serverId.innerText = "Season 1 -Hardcore";
  delivery.innerText = "Online To camera";
  amount.innerText = `${priceField.innerText} M`;
});

thirdBtn.addEventListener("click", () => {
  serverId.innerText = "Eternal  -Softcore";
  delivery.innerText = "Live Show";
  amount.innerText = `${priceField.innerText} M`;
});
fourthBtn.addEventListener("click", () => {
  serverId.innerText = "Eternal  -Hardcore";
  delivery.innerText = "Face To Face";
  amount.innerText = `${priceField.innerText} M`;
});

//button active
function addAnchor(
  goldId,
  silverId,
  silverId2,
  goldTitle,
  silverTitle1,
  SilverTitle2
) {
  document.getElementById(
    goldId
  ).innerHTML = `<a href="#" class="p-2 py-3 text-[10px] md:w-[120px] h-[44px] text-center rounded-[300px] md:p-[11px] lg:px-[17px] lg:py-[11px] md:text-[13px] leading-[22px] bg-[#FCAB00] font-bold text-[#27213C]">${goldTitle}</a>`;
  document.getElementById(
    silverId
  ).innerHTML = `<a href="#" class="p-2 py-3 text-[10px] md:w-[120px] h-[44px] text-center rounded-[300px] md:p-[11px] lg:px-[17px] lg:py-[11px] md:text-[13px] leading-[22px] bg-[#FFFFFF33] font-bold text-[#FFFFFF]">${silverTitle1}</a>`;
  document.getElementById(
    silverId2
  ).innerHTML = `<a href="#" class="p-2 py-3 text-[10px] md:w-[120px] h-[44px] text-center rounded-[300px] md:p-[11px] lg:px-[17px] lg:py-[11px] md:text-[13px] leading-[22px] bg-[#FFFFFF33] font-bold text-[#FFFFFF]">${SilverTitle2}</a>`;
}
//card buttons tab functionality
const buttons = document.querySelectorAll(".btns");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList.remove("bg-[#51c18b]"); // Remove the active background color
      btn.classList.remove("text-black");
      btn.classList.add("bg-[#27284A]"); // Remove the active text color
    });

    button.classList.add("bg-[#51c18b]"); // Add the active background color
    button.classList.add("text-black"); // Add the active text color
  });
});
