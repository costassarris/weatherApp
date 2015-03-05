var apiData = $.get("http://weather-api.herokuapp.com/cities");
console.log(apiData);
// var temperature = 22;
// var weatherIcon = 'snow';
// $.each(apiData, function(index, city) {
//   $('.cities').append(
//     $('<option></option>').val(city).html(city + " ⌄")
//   );
// });
// $('.temperature').text(temperature);
// $('img').attr('src', 'images/' + weatherIcon + '.svg')
