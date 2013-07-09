$(document).ready(function(){
  $("#get_color").on('click', function(e) {
  	e.preventDefault
  	$.ajax ({
  		method: "post",
  		url:    "/color"
  	}).done(function(response){
       $("#color_me li:nth-child(" + response.cell + ")").css("background-color", response.color);
  	}).fail(function(response) {
  		console.log("I totally failed");
  	})

  });
});


