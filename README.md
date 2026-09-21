# PRODIGY_WD_05 - Dynamic Weather Tracker

A responsive web application that fetches and displays **current weather information** based on either user input (city name) or the user's current location using the **OpenWeatherMap API**.

---

## Features

- Search weather by **city name**.
- Get weather automatically using **geolocation** (current location).
- Displays:
  - Temperature (°C)
  - Humidity (%)
  - Wind speed (km/h)
  - Weather condition description
  - Weather icon
- Smooth **animations** for UI elements.
- Responsive and user-friendly design.

---

## Technologies Used

- **HTML** – Structure of the web page.
- **CSS** – Styling and animations (including glassmorphism and floating icons).
- **JavaScript** – Fetching API data, updating UI, geolocation features.
- **OpenWeatherMap API** – Provides real-time weather data.

---

## How to Use

1. **Open the `index.html` file** in your browser.
2. **Search by city:**
   - Enter a city name in the input field.
   - Click the "Search" button.
3. **Use current location:**
   - Click the 📍 "Current" button.
   - Allow location access when prompted.
4. Weather data will be displayed in a card with an icon, temperature, humidity, wind speed, and description.

---


---

## Setup Instructions

1. Clone this repository:
   ```bash
   git clone <your-repo-url>

2.Open the project folder.

3.pen index.html in a web browser.

4.Make sure you have a valid OpenWeatherMap API key in script.js:
const apiKey = "YOUR_API_KEY_HERE";

Notes

Requires an active internet connection to fetch data from OpenWeatherMap API.
Works best in modern browsers like Chrome, Firefox, or Edge.
If geolocation is denied, you can still search manually using a city name.

Author
Vaibhav Purwar – B.Tech CSE (Specialization: AI & ML)