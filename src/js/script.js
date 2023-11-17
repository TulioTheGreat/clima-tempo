const apiCountryURL = "https://countryflagsapi.com/png/";

 const cityInput = document.getElementById("city-input");
 const searchBtn = document.getElementById("search")

 const cityElement = document.getElementById("city");
 const tempElement = document.getElementById("temperature-span");
 const descElement = document.getElementById("description");
 const weatherIconElement = document.getElementById("weather-icon");
 const countryElement = document.getElementById("country");
 const humidityElement = document.getElementById("humidity-span");
 const windElement = document.getElementById("wind-span");

 const weatherContainer = document.getElementById("weather-data");


const getWeatherData = async(city) =>{
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return data
};

const showWeatherData = async (city) => {
    const data = await getWeatherData(city);
    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryElement.setAttribute("src", apiCountryURL + data.sys.country);
    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = parseInt(data.wind.speed) + "km/h";

    weatherContainer.classList.remove("hide")
};

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city);
});