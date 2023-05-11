
let href = 'https://api.weatherapi.com/v1/current.json?key=d87e9dd374ea484cb91150034231102&q=USA&aqi=yes'

let user = {
   name: [],
}
async function api(url) {
   let resualt = [];
   await fetch(url)
      .then(response => response.json())
      .then(json => resualt = json)
   return resualt

}
api(href).then((res) => {
   user.name = res;
   $('.location_time').text(res.location.localtime)
   $('.country').text(res.location.country)
   $('.region').text(res.location.region)
   $('.temp>img').attr('src', "116.svg")
   $('.temp>p').prepend(res.current.temp_c)
   $('.cloud').append(res.current.condition.text)
   $('.wind_kph').append(res.current.wind_kph).append(" kp/h")
   $('.humidity').append(res.current.humidity).append(" %")
   console.log(res);
})

const apiUrl = "http:api.openweathermap.org/data/2.5/weather?q=Kiev&appid=d34ff8afb72199dff352920c1ef107c4&units=metric";

async function getWeather() {
  try {
    const response = await fetch(apiUrl);
    const weatherData = await response.json();
    console.log(weatherData);
  } catch (error) {
    console.log(error);
  }
}

getWeather();

$("#btn").click(function() {
   let val1 = $("#val1").val();
   let val2 = $("#val2").val();
   $("#val1").val(val2);
   $("#val2").val(val1);
 });
// let rows = document.getElementById("rows");
//     let cols = document.getElementById("cols");
//     let width = document.getElementById("width");
//     let height = document.getElementById("height");
//     let color = document.getElementById("color");
//     let button = document.getElementById("btn");

//     button.addEventListener("click",function() {
//         let table = "<table style='border:1px solid; width:" + width.value + "px;height:" + height.value + "px; >";
//     for (let i = 0; i < rows.value; i++) {
//       table += "<tr>";
//       for (let j = 0; j < cols.value; j++) {
//         table += "<td style = 'background-color:red;'></td>";
//       }
//       table += "</tr>";
//     }
//     table += "</table>";

//     document.getElementById("tableContainer").innerHTML = table;
//     })