$(document).ready(function(){

// input = location from db
  let getWeather = function(){
    let input = 'New York';

    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&APPID=<APPID>`,
      method: 'GET',
      dataType: 'json',
      success: function(data){
        console.log(data);
        let city = data.name;
        let temp = data.main.temp;
        let desc = data.weather[0].description;
        let ifRain = data.weather[0].main;
        console.log(city, temp, desc);
        $('.weather_today').text(`It's ${temp}°F in ${city}, with ${desc}`)

        var weather_id;
        if (temp > 45 && temp < 80) {
          weather_id = 2;
        } else if (temp > 81) {
          weather_id = 3;
        } else {
          weather_id = 1;
        }

        getProduct(weather_id);
      }
    })


  } // ends getWeather
  getWeather()

  let getProduct = function(weather_id){
    let weather_tag = Math.floor(Math.random() * (2 - 1)) + 1;
    // Got help with this. getWeather() is on the front end, i needed to get to the backend in order to get garments from the db and pass them to the shopping API
    $.ajax({
      url: `/garments/?weather_id=${weather_id}`,
      method: 'GET',
      dataType: 'json',
      success: function(data) {
        let api_input = data[weather_tag].api_param;
        let offset_input = Math.floor(Math.random() * (1000 - 1)) + 1;
        $.ajax({
          url: `http://api.shopstyle.com/api/v2/products?pid=<APPID>&format=JSON&fts=${api_input}&offset=${offset_input}&limit=1`,
          method: 'GET',
          dataType: 'json',
            success: function(data){
              let product_name = data.products[0].brand.name;
              let title = data.products[0].unbrandedName;
              let click_url = data.products[0].clickUrl;
              let price = data.products[0].priceLabel;
              let product_img = data.products[0].image.sizes.Large.url;
              console.log(data, product_name, product_img, click_url, price);

              $('.garment_today').text()
              $('h2.brand').text(product_name);
              $('p.title').text(title)
              $('.display').attr('src', product_img);
              $('.price').text(price);
              $('.get_shop').attr('href', click_url);
          }
        })
      }
    })
  }


}); // ends document ready




