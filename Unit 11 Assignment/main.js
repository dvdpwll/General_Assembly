//HTMl for the memory card game

//functions
//create game board
var createBoard = function(){
	for (var i = 0; i < cards.length; i++) {
		var y = document.createElement('div');
		y.className = 'card';
		x.appendChild(y);
		y.setAttribute('data-card', cards[i]);
		y.addEventListener('click', isTwoCards);
		if (cards[i] === 'king') {
			y.addEventListener('click', y.innerHTML = '<img src="Hearts_13.png" alt="King" />');
		}
		if (cards[i] === 'queen') {
			y.addEventListener('click', y.innerHTML = '<img src="Spades_12.png" alt="Queen" />');
		}
	}
};
//check if two cards have been clicked
var isTwoCards = function(y){
	cardsInPlay.push(this.getAttribute('data-card'));
	if(cardsInPlay.length === 2){
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
};
//check for matching cards
var isMatch = function(CIP){
	//check for equality
	if (CIP[0] === CIP[1]) {
		window.alert("You found a match!");
	}
	else{
		window.alert("Sorry, try again.");
	}
	var z = document.getElementsByClassName('card');
	z.innerHTML = "";
};
/*
//display a king for queen
function kingOrQueen(card, y){
	if (card === 'king') {
		y.innerHTML = '<img src="Hearts_13.png" alt="King" />';
	}
	else if (card === 'queen') {
		y.innerHTML = '<img src="Spades_12.png" alt="Queen" />';
	}
}
*/

//variables
var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

//main
var x = document.getElementById('game-board');
createBoard();





/*
//check for equality
if (cardOne === cardTwo) {
	window.alert("You found a match!");
}
if (cardThree === cardFour) {
	window.alert("You found a match!");
}
if (cardOne === cardThree) {
	window.alert("Sorry, try again.");
}
if (cardTwo === cardFour) {
	window.alert("Sorry, try again.");
}
*/