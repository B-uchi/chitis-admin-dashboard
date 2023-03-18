const menu_close = document.querySelector("#menu-close");
const menuView = document.querySelector("#left");
const menu_btn = document.querySelector("#menu-toggle");
const order_list = document.querySelector("#order-body");
const lightMode_btn = document.querySelector("#light-mode");
const darkMode_btn = document.querySelector("#dark-mode");
const hamburger_btn = document.querySelector("#hamburger");
const orders = {
  0: ['16" Meatzza Pizza', "3f44d2", "Successful", "Pending"],
  1: ["15 Sausage Rolls", "389ef2", "Failed", "Failed"],
  2: ["9 Meatpies", "210de7", "Pending", "Pending"],
  3: ["Plate of Spaghetti", "4re210", "Successful", "Delivered"],
  4: ["BeafPie Shawarma", "3320le", "Successful", "Successful"],
};

menuView.getAttribute("data-view") === "visible"
  ? (menu_btn.style.display = "none")
  : (menu_btn.style.display = "flex");

menu_close.addEventListener("click", () => {
  menuView.setAttribute("data-view", "hidden");
  menu_btn.style.display = "flex";
});
menu_btn.addEventListener("click", () => {
  menuView.setAttribute("data-view", "visible");
  menu_btn.style.display = "none";
});

hamburger_btn.addEventListener("click", () => {
  menuView.setAttribute("data-view", "visible");
});

for (let j = 0; j < 5; j++) {
  const row = document.createElement("tr");
  for (let i = 0; i < 4; i++) {
    const data = document.createElement("td");
    data.innerText = orders[j][i];
    row.appendChild(data);
    if (i === 3) {
      const bla = document.createElement("a");
      var linkText = document.createTextNode("Details");
      bla.appendChild(linkText);
      bla.href = "#";
      const blu = document.createElement("td");
      blu.appendChild(bla);
      row.appendChild(blu);
    }
  }
  order_list.appendChild(row);
}

lightMode_btn.addEventListener("click", () => {
  document.querySelector("body").classList.remove("dark-theme-variables");
  lightMode_btn.classList.add("active");
  darkMode_btn.classList.remove("active");
});
darkMode_btn.addEventListener("click", () => {
  document.querySelector("body").classList.add("dark-theme-variables");

  lightMode_btn.classList.remove("active");
  darkMode_btn.classList.add("active");
});

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    menuView.setAttribute("data-view", "visible");
    menu_btn.style.display = "none";
  }
}

var x = window.matchMedia("(max-width: 768px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
