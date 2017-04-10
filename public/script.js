$(document).ready(function(){

// get location from user db or sign in value

// let endpoint = 'http://api.openweathermap.org/data/2.5/weather?q=Miami&units=imperial&APPID=142c478807cfdf791bc211f12745a186';

  $.ajax({
     url: 'http://api.openweathermap.org/data/2.5/weather?q=Miami&units=imperial&APPID=142c478807cfdf791bc211f12745a186',
      method: 'Get',
      dataType: 'json',
  }).success(function(data){
    console.log(data);
    let city = data.name;
    let temperature = data.main.temp;
    // pass data to
  })

// make a function to pass weather.data to be used to query db
// takes in data numeric value and change it to a value that corresponds to one of the weather conditions in our table

// http://api.shopstyle.com/api/VERSION/METHOD_NAME?pid=uid3841-22532279-49&format=FORMAT&

  $.ajax({
      url: 'http://api.shopstyle.com/api/VERSION/METHOD_NAME?pid=uid3841-22532279-49&format=FORMAT&'
      method: 'Get',
      dataType: 'json',
  }).success(function(data){
    console.log(data);

    // pass data to
  })


// return a random garment from that table

// use garment to make an api call to shopstyle, and get back a legit link and needed info
// send garment to search api to GET outfits img-urls with that garment

// you end up with a garment object, weather obj, img urls
// append .data on user page

}); //

// weather table
// garment table


// then obviously do all the log in stuff and make it look all nice
