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

  console.log("Searching for city:", city); // Test output

  fetchWeather(city);
  input.value = ""; // Clear input
});

// Fetch current weather data for the given city
function fetchWeather(city) {
  // Log the city value for debugging
  console.log("fetchWeather called with:", city);

  // Build full API request URL with city, key, and metric units
  const url = `${currentWeatherURL}?q=${city}&appid=${apiKey}&units=metric`;

  // Log URL to verify correct request format
  console.log("STEP 1: about to call fetch with URL:", url);

  // Send HTTP request to OpenWeather API
  fetch(url)
    .then((res) => {
      // Log raw response object for debugging
      console.log("STEP 2: raw response:", res);

      // Check if API returned a success status (200–299)
      if (!res.ok) {
        // Log failed status code for debugging
        console.log("STEP 3: response NOT OK, status:", res.status);

        // Stop chain and send error to catch()
        throw new Error("City not found");
      }

      // Log success before converting to JSON
      console.log("STEP 3: response OK, converting to JSON");

      // Convert response body to JSON object
      return res.json();
    })
    .then((data) => {
      // Log parsed JSON for debugging
      console.log("STEP 4: parsed JSON data:", data);

      // Update UI with weather data
      updateCurrentWeather(data);
      fetchForecast(city); // Fetch forecast after current weather
    })
    .catch((error) => {
      // Log error message for debugging
      console.log("STEP 5: error in fetch chain:", error.message);

      // Show user-friendly error message
      message.textContent = "City not found.";

      // Clear message after 3 seconds
      setTimeout(() => (message.textContent = ""), 3000);
    });
}

// Update the Current Weather section with API data
function updateCurrentWeather(data) {
  // Get city name from API response
  const cityName = data.name;

  // Convert timestamp to readable date
  const date = new Date(data.dt * 1000).toLocaleDateString("en-GB");

  // Build icon URL using icon code from API
  const iconCode = data.weather[0].icon;
  const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  // Update city name and date in UI
  document.getElementById("city-name").textContent = cityName;
  document.getElementById("current-date").textContent = date;

  // Update weather icon image
  document.getElementById("weather-icon").src = iconURL;

  // Update temperature (°C)
  document.getElementById("temperature").textContent = `${Math.round(data.main.temp)}°C`;

  // Update weather description (e.g., "Cloudy")
  document.getElementById("description").textContent =
    data.weather[0].description;

  // Update "feels like" temperature
  document.getElementById("feels-like").textContent =
    `${Math.round(data.main.feels_like)}°C`;
    
  // Update humidity percentage
  document.getElementById("humidity").textContent = `${data.main.humidity}%`;

  // Update wind speed (m/s)
  document.getElementById("wind").textContent = `${data.wind.speed} m/s`;

  // Update pressure (hPa)
  document.getElementById("pressure").textContent = `${data.main.pressure} hPa`;

  // Log confirmation for testing
  console.log("STEP 4: UI updated with current weather data");
}

// Fetch 5-day forecast data from API
function fetchForecast(city) {
  // Build forecast API URL
  const url = `${forecastURL}?q=${city}&appid=${apiKey}&units=metric`;

  console.log("STEP 5: Fetching forecast with URL:", url);

  fetch(url)
    .then((res) => {
      console.log("STEP 5: raw forecast response:", res);

      // Handle invalid city
      if (!res.ok) {
        throw new Error("Forecast not found");
      }

      return res.json();
    })
    .then((data) => {
      console.log("STEP 5: forecast JSON data:", data);
      updateForecastUI(data);
    })
    .catch((error) => {
      console.log("STEP 5: forecast error:", error.message);
    });
}

function updateForecastUI(data) {

  // Select the forecast container
  const forecastContainer = document.getElementById("forecast-cards");
  forecastContainer.innerHTML = ""; // Clear previous results

 // Filter the list to get one forecast per day at 12:00
  const dailyData = data.list.filter(item =>
    item.dt_txt.includes("12:00:00")
  );

  // Loop through each day's forecast
  dailyData.forEach(day => {
    // Convert timestamp to readable date
  const date = new Date(day.dt * 1000).toLocaleDateString("en-GB");

  // Build icon URL
  const iconCode = day.weather[0].icon;
  const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  // Create forecast card HTML
    const card = `
      <div class="forecast-card">
        <h4>${date}</h4>
        <img src="${iconURL}" alt="Weather icon">
        <p>${day.main.temp}°C</p>
        <p>${day.weather[0].description}</p>
      </div>
    `;

    // Insert card into container
    forecastContainer.innerHTML += card;
  
  });

  console.log("STEP 5: Forecast UI updated");
}
