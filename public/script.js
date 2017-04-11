$(document).ready(function(){

  let getWeather = function(){
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?q=Miami&units=imperial&APPID=142c478807cfdf791bc211f12745a186',
      method: 'GET',
      dataType: 'json',
        success: function(data){
        let city = data.name;
        let temp = data.main.temp;
        let desc = data.weather[0].description;
        let ifRain = data.weather[0].main;
        console.log(data, city, temp);
        $('.weather_today').text(`It's ${temp}F in ${city} with ${desc}`)
        // pass temp and rain to conditional, to pass to pass it db
      }
    })
  } // ends getWeather
  getWeather();

      // if (temp > 45 && temp < 80) {
      //   let temp_gauge = WARM;
      // } else if (temp_gauge > 81) {
      //   let temp_gauge = HOT;
      // } else {
      //   let temp_gauge = COLD;
      // }

// getProduct(garment_name) <--- pass in garment_name

  $.ajax({
    url: 'http://api.shopstyle.com/api/v2/products?pid=uid3841-22532279-49&format=JSON&fts=ankle+boots&offset=0&limit=1',
    method: 'GET',
    dataType: 'json',
      success: function(data){
        let product_name = data.products[0].brandedName;
        let click_url = data.products[0].clickUrl;
        let price = data.products[0].priceLabel;
        let product_img = data.products[0].image.sizes.Large.url;
        console.log(data, product_name, product_img, click_url, price);
        $('.garment_today').text(`It's a nice day to wear! <br> Why not try this out:`)
    }
  })




}); //




