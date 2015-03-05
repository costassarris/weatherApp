



$.ajax({
  url: "http://weather-api.herokuapp.com/cities",
  type: "GET",
  dataType: "jsonp",
  success: function(response, textStatus, request) {
    console.log(JSON.stringify(response));
    console.log(textStatus);
    console.log(request);
  },
});










var temperature = 22;
var weatherIcon = 'snow';

 $('.temperature').text(temperature);
 $('img').attr('src', 'images/' + weatherIcon + '.svg')
