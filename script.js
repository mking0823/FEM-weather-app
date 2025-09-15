//const date = new Date();
//let  output = date.toDateString()

//console.log(output)

const unitsBnt = document.querySelector("#units-btn");

const unitsBox = document.querySelector("#units-box");
const url ="https://api.open-meteo.com/v1/forecast?latitude=40.4406&longitude=-79.9959&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m,relative_humidity_2m,precipitation&timezone=America%2FNew_York&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch"

//test

const heroDisplay =    document.querySelectorAll(".grid-child--main_hero")

const currentDisplay = document.querySelectorAll(".current-data")

const dailyDisplay =   document.querySelectorAll(".grid-child--daily")

const hourlyDisplay =  document.querySelectorAll(".grid-child--hourly")






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

const hourlyContent =`
<div class="hourly-flex-wrapper">
<div>
<div class="hourly-img-container"><img class="hourly-img hourly-data " src="./assets/images/icon-drizzle.webp" alt=""></div>
<span class="hourly-time hourly-">4 PM</span>
</div>
<span class="hourly-temp hourly-data">90°</span>
</div>`

function getCurrentData(data){
  currentDisplay[0].innerText = `${data.current.apparent_temperature}°`
   currentDisplay[1].innerText = `${data.current.relative_humidity_2m}%`
   currentDisplay[2].innerText = `${data.current.wind_speed_10m} ${data.current_units.wind_speed_10m} `
   currentDisplay[3].innerText = `${data.current.precipitation} ${getUnits(data.current_units.precipitation)} `

}


function getUnits(unit){
  if (unit == "inch"){
    return "in"
  }
  else{
    return "mm"
  }
}



const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//dailyDisplay[1].insertAdjacentHTML("beforeend",dailyContent) 
function getDailyData(data){
 

    dailyDisplay.forEach((box, i)=>{
   
   dailyDisplay[i].insertAdjacentHTML("beforeend", 
                     `<div class="daily-content">
                      <h5 class="daily-date daily-data">Tue</h5>
                      <img src="./assets/images/icon-drizzle.webp" alt="">
                      <div class="daily-temp--wrapper">
                     <span class="daily-temp daily-data">${Math.round(data.daily.temperature_2m_max[i])}°</span>
                    <span class="daily-temp daily-data">${Math.round(data.daily.temperature_2m_min[i])}°</span>
                    </div>`) 
 })

}


   //box.insertAdjacentHTML("beforeend",hourlyContent)
 





// function populateCurrent(data){
//   currentDisplayDisplay[4].innerText = `${data.current.temperature_2m} ${data.current_units.temperature_2m}`
// }
      
    



async function getWeatherData(url){
  let promise = await fetch(url)
  let data = await promise.json()
             await  console.log(data)
             await  getDailyData(data)
             await  getCurrentData(data)
             let  currentDate =  await (new Date(data.daily.time[0]));
             await console.log(currentDate);
             let newTime =  await currentDate.setMinutes(currentDate.getMinutes() + 240);
             await  console.log(currentDate)
             
}


getWeatherData(url) 