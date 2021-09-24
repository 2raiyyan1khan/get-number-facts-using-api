let switcher = document.getElementById("switcher");
const form = document.getElementById("form");
const number = document.getElementById("number");
const factBox = document.getElementById("facts");

form.addEventListener("submit", getNumber);

async function getNumber(e) {
  e.preventDefault();
  const fact = await fetch(`http://numbersapi.com/${parseInt(number.value)}`, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.text();
    })
    .then((data) => data)
    .catch((err) => alert(err.message));
  if (fact) {
    factBox.style.display = "block";
    factBox.innerHTML = `<p>${fact}</p>`;
  }
  number.value = "";
}

switcher.addEventListener("click", () => {
  if (document.body.dataset.theme === "dark") {
    document.body.dataset.theme = "light";
    switcher.innerHTML = '<i class="far fa-moon"></i>';
  } else {
    document.body.dataset.theme = "dark";
    switcher.innerHTML = '<i class="far fa-sun"></i>';
  }
});
