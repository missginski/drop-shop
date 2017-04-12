$(document).ready(function(){

// input = location from db
  let getWeather = function(){
    let input = 'New York';

    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&APPID=142c478807cfdf791bc211f12745a186`,
      method: 'GET',
      dataType: 'json',
        success: function(data){
        let city = data.name;
        let temp = data.main.temp;
        let desc = data.weather[0].description;
        let ifRain = data.weather[0].main;
        console.log(city, temp, desc);
        $('.weather_today').text(`It's ${temp}°F in ${city}, with ${desc}`)
      }
    })
      // if (temp > 45 && temp < 80) {
      //   let temp_gauge = 'WARM';
      // } else if (temp_gauge > 81) {
      //   let temp_gauge = 'HOT';
      // } else {
      //   let temp_gauge = 'COLD';
      // }

  } // ends getWeather
  getWeather()



// getProduct(garment_name) <--- pass in garment_name from table
// can you pass a db value to a function? of course..

  let getProduct = function(data){
    let offset_input = (Math.floor(Math.random() * (1000 - 1)) + 1)
    let api_input = 'ankle+boots'

    $.ajax({
      url: `http://api.shopstyle.com/api/v2/products?pid=uid3841-22532279-49&format=JSON&fts=${api_input}&offset=${offset_input}&limit=1`,
      method: 'GET',
      dataType: 'json',
        success: function(data){
          let product_name = data.products[0].brand.name;
          let title = data.products[0].unbrandedName;
          let click_url = data.products[0].clickUrl;
          let price = data.products[0].priceLabel;
          let product_img = data.products[0].image.sizes.Large.url;
          console.log(data, product_name, product_img, click_url, price);

          $('.garment_today').text(`It's a nice day to wear xxxxxxx !`)
          $('h2.brand').text(product_name);
          $('p.title').text(title)
          $('.display').attr('src', product_img);
          $('.price').text(price);
          $('form').attr('action', click_url);
      }
    })
  }
getProduct()




}); //




