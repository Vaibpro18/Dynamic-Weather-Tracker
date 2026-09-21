
/* Get weather for typed city */
async function getWeather() {
    const city = document.getElementById("cityInput").value;     // Get the value entered in the input field
    const card = document.getElementById("weatherCard");  // Grab references to the weather card and error message elements
    const errorMsg = document.getElementById("errorMsg");

    // Check if input is empty or just spaces
    if (!city.trim()) {
        errorMsg.textContent = "Please enter a city name!";
        card.style.display = "none"; // Hide weather card if no input
        return;
    }

    errorMsg.textContent = ""; // Clear any previous error messages
   
    // Construct the API URL and call function to fetch data
    fetchWeatherByURL(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
}

/* Function to Fetch weather from OpenWeather API */
async function fetchWeatherByURL(url) {
    try {
        const response = await fetch(url);       // Fetch data from the API
        const data = await response.json();     // Convert the response to JSON format

        if (data.cod == "404") {               // If city is not found, show error message
            document.getElementById("errorMsg").textContent = "City not found!";
            document.getElementById("weatherCard").style.display = "none";
            return;
        }

        updateUI(data);     // If data is valid, update the UI
    } catch (error) {      // Catch network errors or other failures
        document.getElementById("errorMsg").textContent = "Unable to fetch weather!";
    }
}

/*Function to  Update the weather card with API data */
function updateUI(data) {
    const card = document.getElementById("weatherCard");
    card.style.display = "block";    // Show the weather card

    document.getElementById("cityName").textContent = data.name;    // Update the city name
    document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;   // Update temperature (°C)
    document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;       // Update humidity (%)

    const windKmH = (data.wind.speed * 3.6).toFixed(1);     // Convert wind speed from m/s to km/h and update
    document.getElementById("windSpeed").textContent = `Wind Speed: ${windKmH} km/h`;
    // Update weather condition description
    document.getElementById("condition").textContent = `Condition: ${data.weather[0].description}`;
    // Update weather icon dynamically from OpenWeather
    document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

/* Function to get Weather using user's geolocation */
function getLocationWeather() {
    const errorMsg = document.getElementById("errorMsg");

    if (!navigator.geolocation) {   // Check if browser supports geolocation, navigator.geolocation is a built-in browser API
        errorMsg.textContent = "Geolocation is not supported!";
        return;
    }
    // Inform user that location detection is in progress
    errorMsg.textContent = "Detecting location...";
     // Request the user's current position
    navigator.geolocation.getCurrentPosition(success, error);
}

/* On geolocation success */
function success(position) {        // Get latitude and longitude from the geolocation API
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    document.getElementById("errorMsg").textContent = "";   // Clear any error messages
    
    // Construct API URL using latitude and longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    
    // Fetch weather data using coordinates
    fetchWeatherByURL(url);
}

/* On geolocation error */
function error() {       // Show error message if user denies location access or if location cannot be retrieved
    document.getElementById("errorMsg").textContent = "Location access denied!";
}
