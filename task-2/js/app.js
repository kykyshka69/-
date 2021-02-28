"use strict";

const counterBtn = document.querySelector(".counter");
const dateBtn = document.querySelector(".date");
const cardsArray = document.querySelectorAll(".crads-item");
let infoCounter = document.querySelector("#info-counter");
let infoDate = document.querySelector("#info-date");
let imgSize = document.querySelectorAll(".image-border-size");
let modal = document.querySelector(".modal-window");
let modalColor = document.querySelector(".modal-wrapper");
let modalClose = document.querySelector(".modal-close");
document.addEventListener("click", function (event) {
  if (!counterBtn.contains(event.target)) {
    infoCounter.style.display = "none";
  } else {
    infoCounter.style.display = "block";
    infoCounter.textContent = `Сейчас на странице ${cardsArray.length} картинок`;
  }
});

document.addEventListener("click", function (event) {
  if (!dateBtn.contains(event.target)) {
    infoDate.style.display = "none";
  } else {
    infoDate.style.display = "block";
    infoDate.textContent = getCalendarDate();
  }
});

function getCalendarDate() {
  let date = new Date();
  let day = date.getDate();
  if (day < 10) day = "0" + day;
  let month = date.getMonth() + 1;
  if (month < 10) month = "0" + month;
  let year = date.getFullYear() % 100;
  if (year < 10) year = "0" + year;
  let hours = date.getHours();
  if (hours < 10) hours = "0" + hours + ":";
  let minutes = date.getMinutes();
  return `${day}.${month}.${year}  ${hours}${minutes}`;
}

let cardsItem = document.querySelectorAll(".crads-item");

for (let index = 0; index < imgSize.length; index++) {
  const element = imgSize[index];
  element.onclick = function () {
    element.classList.remove("image-border-size");
    modal.style.display = "block";
    modalColor.style.display = "flex";
    modal.append(element);
    console.log(element);
    modalClose.onclick = function () {
      for (let index = 0; index < cardsItem.length; index++) {
        const liCards = cardsItem[index];
        console.log(liCards);
        element.classList.add("image-border-size");
        modal.style.display = "none";
        modalColor.style.display = "none";
        modal.innerHTML = "";
        modal.append(modalClose);
        console.log(liCards.childElementCount);
        if (liCards.childElementCount == 0) {
          liCards.append(element);
        }
        
      }
    };
  };
}
