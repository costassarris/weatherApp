

$.ajax({
  url: "http://weather-api.herokuapp.com/cities",
  type: "GET",
  dataType: "jsonp",
  success: function(response) {
    $.each(response.cities, function(index, city) {

      $('.cities').append(

        $("<option></option>").val(city).html(city+"⌄")

      );


    });
  }
});



