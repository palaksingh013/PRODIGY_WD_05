function getWeather() {
  const locationInput = document.getElementById("locationInput").value;
  const apiKey = "YOUR_API_KEY";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      displayWeather(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

function displayWeather(weatherData) {
  const weatherInfo = document.getElementById("weatherInfo");
  weatherInfo.innerHTML = `
      <h2>${weatherData.name}, ${weatherData.sys.country}</h2>
      <p>${new Date().toDateString()}</p>
      <p>Weather: ${weatherData.weather[0].description}</p>
      <p>Temperature: ${weatherData.main.temp} &#8451;</p>
      <p>Feels like: ${weatherData.main.feels_like} &#8451;</p>
      <p>Humidity: ${weatherData.main.humidity}%</p>
      <p>Wind Speed: ${weatherData.wind.speed} m/s</p>
    `;
}
