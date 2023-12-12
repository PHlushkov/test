import { allCusromers } from "./data.js";
import { showCustomers, updatePagination } from "./function.js";

showCustomers(allCusromers);
updatePagination(1);

const listItems = document.querySelectorAll(".left-panel__li");

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    const activeItem = document.querySelector(".left-panel__li.active");
    if (activeItem) {
      activeItem.classList.remove("active");
    }
    item.classList.add("active");
  });
});

const burgerMenuElem = document.querySelector(".left-panel__footer");
const listHeaderMenu = document.querySelector(".left-panel__list");
const listActiveElem = document.querySelectorAll(".right-panel__list-active");
const listInactiveElem = document.querySelectorAll(
  ".right-panel__list-inactive"
);
function handleResize() {
  var screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (screenWidth < 1250) {
    updateStylesElemStatus(listActiveElem, listInactiveElem);

    addClickHandler();
  } else {
    removeClickHandler();
    resetStylesElemStatus(listActiveElem, listInactiveElem);
  }
}

function handleClick() {
  listHeaderMenu.classList.toggle("active");
}

function addClickHandler() {
  burgerMenuElem.addEventListener("click", handleClick);
}

function removeClickHandler() {
  burgerMenuElem.removeEventListener("click", handleClick);
  listHeaderMenu.classList.remove("active");
}

function updateStylesElemStatus(listActiveElem, listInactiveElem) {
  listActiveElem.forEach((element) => {
    element.style.fontSize = "11px";
  });
  listInactiveElem.forEach((element) => {
    element.style.fontSize = "11px";
  });
}

function resetStylesElemStatus(listActiveElem, listInactiveElem) {
  listActiveElem.forEach((element) => {
    element.style.fontSize = "14px";
  });
  listInactiveElem.forEach((element) => {
    element.style.fontSize = "14px";
  });
}

window.addEventListener("resize", handleResize);

handleResize();

document.addEventListener("DOMContentLoaded", function () {
  const contactList = document.getElementById("contactList-mobile");

  allCusromers.forEach((contact) => {
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact");

    const heading = document.createElement("h2");
    heading.textContent = contact.name;

    const companyParagraph = document.createElement("p");
    companyParagraph.textContent = `Company: ${contact.company}`;

    const phoneNumberParagraph = document.createElement("p");
    phoneNumberParagraph.textContent = `Phone Number: ${contact.phoneNumber}`;

    const emailParagraph = document.createElement("p");
    emailParagraph.textContent = `Email: ${contact.email}`;

    const countryParagraph = document.createElement("p");
    countryParagraph.textContent = `Country: ${contact.country}`;

    const statusParagraph = document.createElement("p");
    statusParagraph.textContent = `Status: ${contact.status}`;

    contactDiv.appendChild(heading);
    contactDiv.appendChild(companyParagraph);
    contactDiv.appendChild(phoneNumberParagraph);
    contactDiv.appendChild(emailParagraph);
    contactDiv.appendChild(countryParagraph);
    contactDiv.appendChild(statusParagraph);

    contactList.appendChild(contactDiv);
  });
});
