// Selects the HTML element with the class "container" and assign it to the variable containers
const container = document.querySelector(".container");

// Adds a click event listener to the HTML element with the class "open-navbar-icons"
// When clicked, it adds the class "change" to the container element
document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

// Adds a click event listener to the HTML element with the class "close-navbar-icons"
// When clicked, it removes the class "change" fromM the container elements
document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});
// Defines an array of colors
const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];

// Initializes a variable i with value 0
let i = 0;

// Loops through each HTML element with the class "nav-links"
// Assigns a background color from the colors array to each elements
Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});

const homeLink = document.querySelector('.nav-list a:first-child');
homeLink.addEventListener('click', () => {
  // Redirects to the main page (replace 'index.html' with the name of yours main HTML file)
  window.location.href = 'index.html';
  // Closes the navbars
  container.classList.remove("change");
});

// Loops through each HTML element with the classes "navigation-button"
// Toggles the class "change" on the parent element of the clicked button's parent elements
Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});


