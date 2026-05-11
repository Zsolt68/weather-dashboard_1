

//DOM elements for weather app
// Select form, input, and message elements
const form = document.getElementById("search-form");
const input = document.getElementById("city-input");
const message = document.getElementById("search-message");

//DOM elements for weather app
// Select current weather elements
const cityNameEl = document.getElementById("city-name");
const dateEl = document.getElementById("current-date");
const iconEl = document.getElementById("weather-icon");
const tempEl = document.getElementById("temperature");
const descEl = document.getElementById("description");
const feelsEl = document.getElementById("feels-like");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");
const pressureEl = document.getElementById("pressure");

// ---------------------------------------------
// API Key + Base URLs
// ---------------------------------------------
// My OpenWeather API key
const apiKey = "7ee36c6b983b4032432c855dd97f79f3";

// Base URL for current weather
const currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather";

// Base URL for 5-day / 3-hour forecast endpoint
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast";


// Listen for form submit of form submit handler
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

// Fetch current weather data for the given city
function fetchWeather(city) {
  // Build API URL with city name and API key
  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}` +
    `&appid=${apiKey}&units=metric`;

}