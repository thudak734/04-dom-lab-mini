"use strict";
const totalParagraph = document.querySelector(".total");
// const limeButton = document.querySelector(".lime");
// const saltButton = document.querySelector(".salt");
// const chocolateButton = document.querySelector(".chocolate");
// const fruitButton = document.querySelector(".fruit");
const snackButtons = document.querySelectorAll(".snack-button");
// const coinNumber = document.querySelector(".number-coins");
// const coins = document.querySelector(".coins-container");
const form = document.querySelector(".two form");
const bank = document.querySelector(".coins-container");
const bulb = document.querySelector(".bulb");
const on = document.querySelector(".on-btn");
const off = document.querySelector(".off-btn");
const toggle = document.querySelector(".toggle-btn");
const end = document.querySelector(".end-btn");

let total = 0;

on.addEventListener("click", () => {
  bulb.classList.add("on");
});

off.addEventListener("click", () => {
  bulb.classList.remove("on");
});

toggle.addEventListener("click", () => {
  bulb.classList.toggle("on");
});

end.addEventListener("click", () => {
  bulb.remove();
  on.disabled = true;
  off.disabled = true;
  toggle.disabled = true;
  end.disabled = true;
});

// limeButton.addEventListener("click", (e) => {
//   //e.preventDefault(); not necessary because this is only for form submissions
//   total += 2;
//   totalParagraph.textContent = `Total: $${total.toFixed(2)}`;
//   console.log(total);
// });

// saltButton.addEventListener("click", (e) => {
//   //e.preventDefault(); not necessary because this is only for form submissions
//   total += 3;
//   totalParagraph.textContent = `Total: $${total.toFixed(2)}`;
//   console.log(total);
// });

// chocolateButton.addEventListener("click", (e) => {
//   //e.preventDefault(); not necessary because this is only for form submissions
//   total += 4;
//   totalParagraph.textContent = `Total: $${total.toFixed(2)}`;
//   console.log(total);
// });

// fruitButton.addEventListener("click", (e) => {
//   //e.preventDefault(); not necessary because this is only for form submissions
//   total += 6;
//   totalParagraph.textContent = `Total: $${total.toFixed(2)}`;
//   console.log(total);
// });

snackButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const cost = button.getAttribute("data-cost");
    total += parseInt(cost);
    totalParagraph.textContent = `Total: $${total.toFixed(2)}`;
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const howMany = document.querySelector("#numberCoins").value;
  const whichCoin = document.querySelector("#whichCoin").value;
  for (let i = 0; i < howMany; i++) {
    const newCoin = document.createElement("div");
    newCoin.classList.add("coin", whichCoin);
    newCoin.textContent = whichCoin;
    bank.append(newCoin);
  }
});
