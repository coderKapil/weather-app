const apiKey = "95d85d8f967ed8cf8e950d03bd3db1b1";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

        const searchBox = document.querySelector(".search input")
        const searchBtn = document.querySelector(".search button")
        const weatherIcon = document.querySelector(".weather-icon")

        async function checkWeather(city){
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
           
            //cecking if the city name is valid or not
             if(response.status == 404){
               document.querySelector(".error").style.display = "block"
               document.querySelector(".weather").style.display = "none"
             }
             else{
                var data  = await response.json();

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

//to update the weather image according to the weathe condn
if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "./images/clouds.png"
}
else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "./images/clear.png"
}
else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "./images/rain.png"
}
else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "./images/drizzle.png"
}
else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "./images/mist.png"
}
else if(data.weather[0].main == "Snow"){
    weatherIcon.src = "./images/snow.png"
}

document.querySelector(".weather").style.display = "block"
document.querySelector(".error").style.display = "none"
             }

        }

        searchBtn.addEventListener('click',()=>{
            //searchbox.value ye wo value which we enter and on the basis of that value it will fetch out the weather
            checkWeather(searchBox.value)
        })