$(document).ready(function (e) {

// dice
var Die = function(sides) {
	this.sides = sides;
	this.dieValue = 0;
}

Die.prototype.roll = function() {
  return this.value = Math.floor((Math.random()*this.sides)+1);
};

// dice bag

var Bag = function() {
	this.bag = [];
}

Bag.prototype.addDie = function(die) {
	this.bag.push(die);
}

var diceBag = new Bag;

Bag.prototype.updateAll = function(diceBag) {
	for (var i=0; i < diceBag.bag.length; i++) {
		diceBag.bag[i].dieValue = roll();
}
  // loop through the dice bag and update each dice with new value
}


Bag.prototype.showDice = function() {
  $('.dice').html('');
  for (var i=0; i < this.bag.length; i++) {
  	$('.dice').append('<div class="die">' + this.bag[i].dieValue + '</div>');
  }
}


// event handlers
  $(".add").on('click', function(e) {
  	diceBag.addDie(new Die(6));
    diceBag.showDice();
  });


 $('.roll').on('click', function(e){
 	diceBag.updateAll(diceBag);
 })
 


});