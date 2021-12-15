let data = {
  "coord": {
    "lon": -122.08,
    "lat": 37.39
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 282.55,
    "feels_like": 281.86,
    "temp_min": 280.37,
    "temp_max": 284.26,
    "pressure": 1023,
    "humidity": 100
  },
  "visibility": 16093,
  "wind": {
    "speed": 1.5,
    "deg": 350
  },
  "clouds": {
    "all": 1
  },
  "dt": 1560350645,
  "sys": {
    "type": 1,
    "id": 5122,
    "message": 0.0139,
    "country": "US",
    "sunrise": 1560343627,
    "sunset": 1560396563
  },
  "timezone": -25200,
  "id": 420006353,
  "name": "Mountain View",
  "cod": 200
}
let API_URL_OpenWeatherMap = 'http://api.openweathermap.org/data/2.5/weather?id=1835848&appid=97114296e507aca6aed856324586647d';
let cityName = document.querySelector('.cityName')
const citySearch = document.querySelector('#citySearch')//버튼
citySearch.onclick=function () {
  let cityNameValue = document.querySelector('.cityName').value
  let API_URL_OpenWeatherMap= `http://api.openweathermap.org/data/2.5/weather?q=${cityNameValue}&appid=97114296e507aca6aed856324586647d`
  //만약 cityNameValue가 없는 값일 때 오류 메시지 출력 
    //클릭했을 시에 새로운 cityNameValue를 넣어주고 getData에 새로운 값을 넣어주는
    // if("cod": "404",)
  getData(API_URL_OpenWeatherMap);
}
function renderWeatherData() {
  // TODO: 여기에 DOM을 이용하여 날씨 데이터를 표시하세요
  //   console.log(data["weather"][0].main)
  //   let cloud = document.querySelector('#cloud')
  //   cloud.textContent = data["weather"][0].main
  //   let temp = document.querySelector('#temp')
  //   temp.textContent = `${Math.floor(data["main"].temp - 273.15)} 도`
  //   //계산ㄴ을 먼저해놓고 
  //   let cityResult = document.querySelector('#cityResult')
  //   cityResult.textContent = data["sys"].country
  // 
}
    function getData(API_URL_OpenWeatherMap) { //첫번째로는 서울 정보만
      const temp = document.querySelector('#temp')
      const cloud = document.querySelector('#cloud')
      const cityResult = document.querySelector('#cityResult')
      fetch(API_URL_OpenWeatherMap) //클릭시 새로운 값이 입력된다.
      .then(function(resp) {
        return resp.json()
      })
      .then(function(json) {
        // TODO:
        // 요청이 완료되고 나면 여기서부터 날씨 데이터(json)를 사용할 수 있습니다.
        // 하드코딩된 data를 대체하세요.  
        if(json.name === undefined){
          alert('도시 이름을 다시 확인하세요.')
        } else if(cityName.value.toUpperCase() === json.name.toUpperCase()){
          temp.textContent = `${Math.round((json.main.temp * 100) / 100 - 273.15).toFixed(1)}°` 
          cloud.textContent = json.weather[0].main
          cityResult.textContent = json.name
        } 
          let iconsrc = document.createElement('img');
          let iconUrl = "https://openweathermap.org/img/wn/" + data.weather[0].icon +"@2x.png"
          iconsrc.setAttribute("src", iconUrl);
          info.appendChild(iconsrc);
      });
    }
// fetch('http://서버주소/weather?q=Seoul')
// .then(function(resp) {
//   // 응답 형식에 따라 resp.text() 가 될 수도 있다
//   return resp.json();
// })
// .then(function(json) {
//   console.log(json); // { tempature: 27 }
// });