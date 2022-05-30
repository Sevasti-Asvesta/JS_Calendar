/*let calender = document.getElementById("root");

let table = document.createElement("table");
let tableHead = document.createElement("thead");
tableHead.innerText = "Calendar";
let tableBody = document.createElement("tbody");
table.style.border = "1px solid";
tableHead.style.textAlign = "center";
table.style.width = "200px";
table.style.height = "200px";

for (let i = 0; i < 3; i++) {
  let row = document.createElement("tr");
  tableBody.append(row);
  row.style.textAlign = "center";

  for (let i = 0; i < 3; i++) {
    let collumn = document.createElement("td");
    row.append(collumn);
    collumn.style.border = "1px solid";
    collumn.style.width = "50px";
  }
}
table.append(tableBody, tableHead);
calender.append(table);

let td = document.querySelectorAll("td");
let counter = 0;

for (let i = 0; i < td.length; i++) {
  counter++;
  td[i].innerHTML = counter;
}
*/
