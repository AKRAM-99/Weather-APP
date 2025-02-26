async function getWeather() {
    const city = document.getElementById("city").value;
    const api_key = "9bb3343729cbc1a93d41d700a9bd0761";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod == "404") {
            document.getElementById("weather-info").innerHTML = "City not found";
            return;
        } else {
            document.getElementById("weather-info").innerHTML = `
                <h3>${data.name}, ${data.sys.country}</h3>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
        }
    } catch (error) {
        document.getElementById("weather-info").innerHTML = "Error occurred";
    }
}
