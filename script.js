const apiKey="7e9c88d19ce36acd17e857d641de7313";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input"); 
const searchBtn  = document.querySelector(".search button");
 

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerText= data.name;
    document.querySelector(".temperature").innerText= Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerText= data.main.humidity + "%";
    document.querySelector(".wind").innerText = Math.round(data.wind.speed) + " km/h";

    if(data.weather[0].main =="Clear"){
        document.querySelector(".icon-image img").src ="images/clear.png";
    }
    else if(data.weather[0].main =="Clouds"){
        document.querySelector(".icon-image img").src ="images/clouds.png";
    }else if(data.weather[0].main =="Rain"){
        document.querySelector(".icon-image img").src ="images/rain.png";
    }
    else if(data.weather[0].main =="Snow"){
        document.querySelector(".icon-image img").src ="images/snow.png";
    }
    else if(data.weather[0].main =="Drizzle"){
        document.querySelector(".icon-image img").src ="images/drizzle.png";
    }
    else if(data.weather[0].main =="Mist"){
        document.querySelector(".icon-image img").src ="images/mist.png";
    }
    else if(data.weather[0].main =="Snow"){
        document.querySelector(".icon-image img").src ="images/snow.png";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})