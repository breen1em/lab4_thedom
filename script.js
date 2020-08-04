"use strict";
// ---1.---
let buttons = document.querySelectorAll(".button");
let total = 0;
let totalParagraph = document.querySelector(".total");
buttons.forEach((product) => {
  product.addEventListener("click", () => {
    let amount = Number(product.getAttribute("data-amount"));
    total += amount;
    totalParagraph.innerText = [`Total: $${total}`];
  });
});

// ---2.---
let coinContainer = document.querySelector(".coin-container");
let form = document.querySelector(".money-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let data = new FormData(form);
  let coins = data.get("coin");
  let number = data.get("amount");
  for (let i = 0; i < number; i++) {
    let newCoin = document.createElement("div");
    newCoin.classList.add(coins, "coinie");
    newCoin.innerText = coins;
    coinContainer.append(newCoin);
    newCoin.addEventListener("click", () => {
      newCoin.remove();
    });
  }
  form.reset();
});

// ---3.---
let bulb = document.querySelector(".bulb");
let onSwitch = document.querySelector(".on");
let offSwitch = document.querySelector(".off");
let toggleButton = document.querySelector(".toggle");
let endButton = document.querySelector(".end");

onSwitch.addEventListener("click", () => {
  bulb.classList.add("light");
});
offSwitch.addEventListener("click", () => {
  bulb.classList.remove("light");
});
toggleButton.addEventListener("click", () => {
  bulb.classList.toggle("light");
});
endButton.addEventListener("click", () => {
  bulb.remove();
  let buttons = document.querySelectorAll(".switch");
  buttons.forEach((button) => {
    button.disabled = true;
  });
});
