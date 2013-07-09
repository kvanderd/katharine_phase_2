$(document).ready(function() {
  $('.awesomeness_teller').on('click', function(e) {
      var awesomeState = $(this).html();
      $("#awesomeness_holder").text(awesomeState);
  });

  $(".skill_teller").on('click', function(e) {
      var pathname = window.location.pathname;
      var lastAttr = pathname.split("/");
      $("#skill_holder").text(lastAttr[2]);
    });

  $('.meal_teller').on('click', function(e) {
    randomMeal = allMeals[Math.floor( Math.random() * ( allMeals.length ) )];
    $('#meal_holder').html(randomMeal);
  })
  // What other events do you need to bind to make the other pages work?
});

// Modify the meals page so the button updates the heading 
// with a random meal from the meals instance variable.