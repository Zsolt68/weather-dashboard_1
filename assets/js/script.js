// Select form, input, and message elements
const form = document.getElementById("search-form");
const input = document.getElementById("city-input");
const message = document.getElementById("search-message");

// Handle form submit
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop page reload

  const city = input.value.trim(); // Get city text

  if (city === "") {
    message.textContent = "Please enter a city name.";
    setTimeout(() => (message.textContent = ""), 3000);
    return;
  }

  console.log("Searching for city:", city); // Temp test output
  input.value = ""; // Clear input
});