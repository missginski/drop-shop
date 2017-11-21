let weatherKey = config.WEATHER_KEY;
let shopKey = config.SHOP_KEY;


$(document).ready(function(){

// input = location from db
  let getWeather = function(){
    let input = 'New York';

    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&APPID=${weatherKey}` ,
      method: 'GET',
      dataType: 'json',
      success: function(data){
        let city = data.name;
        let temp = Math.round(data.main.temp);
        let desc = data.weather[0].description;
        let ifRain = data.weather[0].main;
        let icon = data.weather[0].icon;
        let maxTemp = Math.round(data.main.temp_max);
        let minTemp = Math.round(data.main.temp_min);
        let pressure = data.main.pressure;
        let humidity = data.main.humidity;
        console.log(data, ifRain, icon, pressure, humidity);

        $('.location').text(city);
        $('.weather_today').text(`${temp}°F`);
        $('.summary').text(desc);
        $('.temp_max').text(maxTemp);
        $('.temp_min').text(minTemp);

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
    $.ajax({
      url: `/garments/?weather_id=${weather_id}`,
      method: 'GET',
      dataType: 'json',
      success: function(data) {
        let api_input = data[weather_tag].api_param;
        let offset_input = Math.floor(Math.random() * (1000 - 1)) + 1;
        $.ajax({
          url: `http://api.shopstyle.com/api/v2/products?pid=${shopKey}&format=JSON&fts=${api_input}&offset=${offset_input}&limit=1
`,
          method: 'GET',
          dataType: 'json',
            success: function(data){
              // let product_name = data.products[0].brand.name;
              // let title = data.products[0].unbrandedName;
              let click_url = data.products[0].clickUrl;
              // let price = data.products[0].priceLabel;
              let product_img = data.products[0].image.sizes.Best.url;
              console.log(data);

              // $('.garment_today').text()
              // $('h2.brand').text(product_name);
              // $('p.title').text(title)
              $('.display').attr('src', product_img);
              // $('.price').text(price);
              $('.get_shop').attr('href', click_url);
          }
        })
      }
    })
  }


});
