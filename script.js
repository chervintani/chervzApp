
$(document).ready(function () {
      $("#button").click(function () {
        $.getJSON("https://restcountries.eu/rest/v2/name/" + $('#search').val().toLowerCase(), function (data) {
          $.each(data, function (key, val) {
            if(val.name.toLowerCase().includes($('#search').val().toLowerCase())){
                $('#table').show();
                $('#image').hide();
              $('#table').append("<tr id='exist'><td>"+val.name+"</td><td><img src='" + val.flag +"' style='height: 50px; width: auto;'></td><td>"+ val.alpha3Code + "</td><td>"+ val.population + "</td></tr>");
              return false;
            }
          })
        }).fail(function(){
            $('#table').hide();
                $('#image').show();
          });
        if($("#exist").length){
            $("#exist").remove();
        }
        $(this).prop('disabled', true);
      });

      $("#search").on("click",function(){
        $("#button").prop('disabled', false);
      })

    });
