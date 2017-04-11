$(document).ready(function(){

  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?q=Miami&units=imperial&APPID=142c478807cfdf791bc211f12745a186',
    method: 'GET',
    dataType: 'json',
      success: function(data){
      let city = data.name;
      let temp = data.main.temp;
      // get rain?
      console.log(data, city, temp);


      $('.weather_today').text(`It's ${temp}F in ${city}`)
    }
  })


  // $.ajax({
  //   url: 'http://api.shopstyle.com/api/v2/products?pid=uid3841-22532279-49&format=FORMAT&',
  //   method: 'GET',
  //   dataType: 'json',
  //     success: function(data){
  //     console.log(data);
  //     let city = data.name;
  //     let temp = data.main.temp;
  //   }
  // })




















}); //




