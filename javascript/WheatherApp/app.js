const city = document.querySelector("#city");
const search = document.querySelector("#Search");
const image = document.querySelector("#img");
const temp = document.querySelector("#temp1");
const humidity = document.querySelector("#humidity1");
const wind = document.querySelector("#wind1");
const weatherContainer = document.querySelector(".weather");

const API_KEY = "f63afdac0d78ac3d3632bfd31d1faac0";

weatherContainer.style.display = "none";


async function getWeather(cityVal) {
    try {
        const URL = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${cityVal}`;
        const response = await fetch(URL);
        const data = await response.json();
        if (data.current.temperature >= 30) {
            image.src = "images/sun.png";
        } 
        else if (data.current.temperature > 15 && data.current.temperature < 30) {
            image.src = "images/cloudy.png";
        } 
        else {
            image.src = "images/snowflake.png";
        }
        
        console.log(data);
        temp.innerText = `${data.current.temperature}°C`;
        humidity.innerText = `${data.current.humidity}%`;
        wind.innerText = `${data.current.wind_speed} KpH`;
        weatherContainer.style.display = "block";
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

search.addEventListener("click", () => {
    let cityVal = city.value;
    if (cityVal === "") {
        alert("Please enter a city name.");
        return;
    }
    getWeather(cityVal);
});


