function Dice(sides, selector) {
  this.sides    = sides;
  this.selector = selector;
}
 
Dice.prototype.addDice = function() {
  $('.dice').append('<div class="die">0</div>');
};
 
Dice.prototype.roll = function() {
  $('#roller button.roll').on('click', function() {
    $('.die').each(function(k, die) {
      var value = Math.floor((Math.random()*6)+1);
      $(die).text(value);
    });
  });
};
 
 
 
 
// ? Driver Code ?//
 
$(document).ready(function() {
  $('#roller button.add').on('click', function() {
    var dice = new Dice(6, "#element");
    dice.addDice();
    dice.roll();
  });
});