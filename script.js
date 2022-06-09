let nav = 0;
const calendar = document.getElementById("calendar");
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function load() {
  const date = new Date();

  if (nav !== 0) {
    date.setMonth(new Date().getMonth() + nav);
  }
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const dateString = firstDayOfMonth.toLocaleDateString("en-DE", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const paddingDays = weekdays.indexOf(dateString.split(", ")[0]);
  console.log(paddingDays);

  document.getElementById(
    "monthDisplay"
  ).innerText = `${date.toLocaleDateString("en-DE", {
    month: "long",
  })} ${year}`;

  calendar.innerHTML = "";

  for (let i = 1; i <= paddingDays + daysInMonth; i++) {
    const days = document.createElement("div");
    days.classList.add("day");

    if (i > paddingDays) {
      days.innerText = i - paddingDays;
    } else {
      days.classList.add("padding");
    }

    calendar.append(days);
  }
}
load();
// Add API functionality
let img = document.createElement("img");
let block = document.getElementById("api");
block.prepend(img);
let filmDescription = document.getElementById("film--description");
let filmTitle = document.getElementById("film--title");

const fetchApi = function () {
  //studio ghibli
  fetch("https://ghibliapi.herokuapp.com/films")
    .then(function (response) {
      // Successfull fetch return as json
      return response.json();
    })
    .then((data) => {
      let random = Math.floor(Math.random() * data.length);

      filmTitle.textContent = data[random].title;
      img.src = `${data[random].image}`;
      filmDescription.textContent = data[random].description;
      console.log(data);
    });
};
fetchApi();

// buttons function

function initButtons() {
  document.getElementById("nextButton").addEventListener("click", () => {
    nav++;
    load();
    fetchApi();
  });
  document.getElementById("backButton").addEventListener("click", () => {
    nav--;
    load();
    fetchApi();
  });
}

initButtons();
