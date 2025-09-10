const unitsBnt = document.querySelector("#units-btn");

const unitsBox = document.querySelector("#units-box");
const url ="https://api.open-meteo.com/v1/forecast?latitude=40.4406&longitude=-79.9959&daily=temperature_2m_min,temperature_2m_max,weather_code&hourly=temperature_2m,weather_code&current=apparent_temperature,temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation"


const  dayDisplay = document.getElementsByClassName("day-display")

const mainDisplay = document.getElementsByClassName("main-display")


const weatherCodes = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Depositing rime fog",
  51: "Light drizzle",
  53: "Moderate drizzle",
  55: "Dense drizzle",
  56: "Light freezing drizzle",
  57: "Dense freezing drizzle",
  61: "Slight rain",
  63: "Moderate rain",
  65: "Heavy rain",
  66: "Light freezing rain",
  67: "Heavy freezing rain",
  71: "Slight snowfall",
  73: "Moderate snowfall",
  75: "Heavy snowfall",
  77: "Snow grains",
  80: "Slight rain showers",
  81: "Moderate rain showers",
  82: "Violent rain showers",
  85: "Slight snow showers",
  86: "Heavy snow showers",
  95: "Thunderstorm (slight or moderate)",
  96: "Thunderstorm with slight hail",
  99: "Thunderstorm with heavy hail"
};



unitsBnt.onclick = ()=>{
    unitsBox.classList.toggle("inactive")
}

Array.from(dayDisplay).forEach((i , b)=>{
    
 })

function populateCurrent(data){
  mainDisplay[3].innerText = `${data.current.temperature_2m} ${data.current_units.temperature_2m}`
}



async function getWeatherData(url){
  let promise = await fetch(url)
  let data = await promise.json()
             await  console.log(data.current.temperature_2m)
             await populateCurrent(data)
            await console.log("fin")
}


getWeatherData(url)