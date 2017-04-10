$(document).ready(function(){

  let getWeather = function(){
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?q=Miami&units=imperial&APPID=142c478807cfdf791bc211f12745a186',
      method: 'GET',
      dataType: 'json'
    }).success(function(data){
      console.log(data);
      let city = data.name;
      let temperature = data.main.temp;
    });
  }
  getWeather()


















}); //




