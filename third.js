const paraButtons = document.querySelectorAll(".para-btn");

paraButtons[0].classList.add("para-active");

for (let i = 0; i < paraButtons.length; i++) {
  paraButtons[i].addEventListener("click", (event) => {
    paraButtons.forEach((btn) => btn.classList.remove("para-active"));
    event.currentTarget.classList.add("para-active");
  });
}

// Softcore category buttons.

const softcoreButtons = document.querySelectorAll(".softcore-btn");
softcoreButtons[0].classList.add("active-tab");

for (let i = 0; i < softcoreButtons.length; i++) {
  softcoreButtons[i].addEventListener("click", (event) => {
    softcoreButtons.forEach((btn) => btn.classList.remove("active-tab"));
    event.currentTarget.classList.add("active-tab");
    setCheckBox(i);
  });
}

// Changing the input fields based on user button cliked.

function setCheckBox(props) {
  if (props == 1) {
    setEternalCheckBoxes();
  } else {
    setSoftCoreCheckBoxes();
  }
}

function setEternalCheckBoxes() {
  const checkBoxContainer = document.getElementById("check-box-container");
  checkBoxContainer.innerHTML = `
    <section
    class="firstCheckBox mx-auto grid grid-cols-2 md:grid-cols-4 w-[calc(100vw-48px)] lg:w-[calc(100vw-200px)]"
  >
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Gems</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Ancestral Rare</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Perfect Rare</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Currency ＆ Material</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Junk For Salvage</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Consumables</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Random Rare</span>
    </div>
  </section>

  
  <section
    class="secondCheckBox mx-auto grid grid-cols-2 md:grid-cols-4 w-[calc(100vw-48px)] lg:w-[calc(100vw-200px)]"
  >
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">All</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Boots</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Axe</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Amulet</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Crossbow</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Bow</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Chest Armor</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Gloves</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Focus</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Dagger</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Pants</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Mace</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Helm</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Scythe</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Ring</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Polearm</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Shield</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Staff</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Totem</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Sword</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Two-Handed Axe</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Two-Handed Sword</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Two-Handed Scythe</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Two-Handed Mace</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Wand</span>
    </div>
  </section>
    `;
}

function setSoftCoreCheckBoxes() {
  const checkBoxContainer = document.getElementById("check-box-container");
  checkBoxContainer.innerHTML = `
    <section
    class="firstCheckBox mx-auto grid grid-cols-2 md:grid-cols-4 w-[calc(100vw-48px)] lg:w-[calc(100vw-200px)]"
  >
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Perfect Rare</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Ancestral Rare</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Gems</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Consumables</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Junk For Salvage</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Currency ＆ Material</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Random Rare</span>
    </div>
  </section>

 
  <section
    class="secondCheckBox mx-auto grid grid-cols-2 md:grid-cols-4 w-[calc(100vw-48px)] lg:w-[calc(100vw-200px)]"
  >
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">All</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Amulet</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Axe</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Boots</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Bow</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Crossbow</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Chest Armor</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Dagger</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Focus</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Gloves</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Helm</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Mace</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Pants</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Polearm</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Ring</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Scythe</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Shield</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Staff</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Sword</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Totem</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Two-Handed Axe</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Two-Handed Mace</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Two-Handed Scythe</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Two-Handed Sword</span>
    </div>
    <div class="details">
      <input type="checkbox" class="check" name id />
      <span class="checkboxName">Wand</span>
    </div>
  </section>
    `;
}

// JS Code for reviews section

const prevArrow = document.querySelector(".prev-arrow");
const nextArrow = document.querySelector(".next-arrow");

let count = 0;
const reviews = [
  `<h2>Awesome guy</h2>
<p>Good guy, took care of business</p>
<h5>Robert Lockar...1 hour ago</h5>`,
  `<h2>Brillient guy</h2>
<p>Good guy, took care of business</p>
<h5>Peter Parker...3 hour ago</h5>`,
  `<h2>Tallented guy</h2>
<p>Good guy, took care of business</p>
<h5>Nice Lockar...5 hour ago</h5>`,
  `<h2>Awesome guy</h2>
<p>Good guy, took care of business</p>
<h5>Robert Jonas...6 hour ago</h5>`,
  `<h2>Excellent guy</h2>
<p>Good guy, took care of business</p>
<h5>Robert Lockar...1 hour ago</h5>`,
];

const sliderCount = document.querySelectorAll(".slider-count");

const reviewBox = document.getElementById("review-box");

prevArrow.addEventListener("click", () => {
  if (count > 0) {
    count--;
    reviewBox.innerHTML = reviews[count];
    setActive(count);
  } else {
    count = 4;
    reviewBox.innerHTML = reviews[count];
    setActive(count);
  }
});

nextArrow.addEventListener("click", () => {
  if (count == 4) {
    count = 0;
    reviewBox.innerHTML = reviews[count];
    setActive(count);
  } else {
    count++;
    reviewBox.innerHTML = reviews[count];
    setActive(count);
  }
});

function setActive(num) {
  sliderCount.forEach((count) => {
    count.classList.remove("swipperCircle");
    count.classList.add("swipperCircleFill");
  });
  sliderCount[num].classList.remove("swipperCircleFill");
  sliderCount[num].classList.add("swipperCircle");
}
