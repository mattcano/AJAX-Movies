$(document).ready(function(){

  $("#searchButton").on("click", function(){

    var entry = $("input").val();
    var searchURL = "http://www.omdbapi.com/?s=" + entry;
    $.ajax({
      url: searchURL,
      method: "get",
      dataType: "json",
      success: function(results){
        console.log(results["Search"])
      },


    });

  });


});