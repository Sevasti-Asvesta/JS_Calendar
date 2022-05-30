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

const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

const firstDayOfMonth = new Date(year, month, 1);
const daysInMonth = new Date(year, month + 1, 0).getDate();

const dateString = firstDayOfMonth.toLocaleDateString("en-us", {
  weekday: "long",
  year: "numeric",
  month: "numeric",
  day: "numeric",
});

const paddingDays = weekdays.indexOf(dateString.split(", ")[0]);
console.log(paddingDays);

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
