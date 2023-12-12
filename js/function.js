export function showCustomers(allCusromers) {
  allCusromers.map((val) => {
    for (const key in val) {
      if (document.getElementById(key)) {
        const newLiElem = document.createElement("li");
        document.getElementById(key).appendChild(newLiElem);
        newLiElem.textContent = val[key];

        if (key === "status") {
          newLiElem.style.borderRadius = "4px";
          newLiElem.style.textAlign = "center";
          newLiElem.style.fontSize = "14px";
          if (val[key] === "Active") {
            newLiElem.style.backgroundColor = "rgba(22, 192, 152, 0.38)";
            newLiElem.className = "right-panel__list-active";
            newLiElem.style.color = "#008767";
            newLiElem.style.borderColor = "#00B087";
          } else if (val[key] === "Inactive") {
            newLiElem.className = "right-panel__list-inactive";
            newLiElem.style.backgroundColor = "#FFC5C5";
            newLiElem.style.color = "#DF0404";
            newLiElem.style.borderColor = "#DF0404";
          }
        }
      }
    }
  });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

const pagesElem = document.getElementById("pages");

export function updatePagination(clickedIndex) {
  pagesElem.innerHTML = "";

  const totalPages = 40;
  const pagesToShow = 4;

  let startPage = Math.max(1, clickedIndex - Math.floor(pagesToShow / 2));
  let endPage = Math.min(totalPages, startPage + pagesToShow - 1);

  if (endPage - startPage < pagesToShow - 1) {
    startPage = Math.max(1, endPage - pagesToShow + 1);
  }

  if (startPage > 1) {
    addButton(1);
    if (startPage > 2) {
      addEllipsis();
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    addButton(i, i === clickedIndex);
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      addEllipsis();
    }
    addButton(totalPages);
  }
}

function addButton(pageNumber, isActive = false) {
  const numberPage = document.createElement("button");
  numberPage.textContent = pageNumber;
  if (isActive) {
    numberPage.classList.add("active");
  }
  numberPage.addEventListener("click", () => updatePagination(pageNumber));
  pagesElem.appendChild(numberPage);
}

function addEllipsis() {
  const ellipsis = document.createElement("span");
  ellipsis.textContent = "...";
  pagesElem.appendChild(ellipsis);
}
