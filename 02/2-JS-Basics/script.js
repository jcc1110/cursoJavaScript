//LECTURE: Variables

/*var name = 'Raul';
var lastName = 'Burgos';
var age = 43;
console.log("His complete name is " + name + " " + lastName + " and he is " + age + " years old.");
*/

//CODING CHALLENGE 1
/* John y su amigo inventaron un juego, donde el jugador
con la mayor estatura (en centimetros) mas 5 veces su edad ganará.
*/

var jhonHeight = 172;
var mikeHeight = 172;
var raulHeight = 172;
var johnAge = 26;
var mikeAge = 24;
var raulAge = 26;
scoreJohn = scoreMike = scoreRaul = 0;

/*jhonHeight= prompt("How many centimeters does John mesure?:");
mikeHeight = prompt("How many centimeters does John's friend mesure?: ");

johnAge = prompt("How old is John: ");
mikeAge = prompt("How old is John's firned: ");*/

scoreJohn = jhonHeight + 5 * johnAge;
scoreMike = mikeHeight + 5 * mikeAge;
scoreRaul = raulHeight + 5 * raulAge;


console.log("John's score is: " + scoreJohn);
console.log("Mike's score is: " + scoreMike);
console.log("Raul's scrore is: " + scoreRaul);

/*if (scoreJohn === scoreMike) {
    alert("it's a Tie with " + scoreJohn + "=" + scoreMike);
} else if (scoreJohn > scoreMike) {
    alert("The winer is Jhon with " + scoreJohn + " points!" );
} else {
    alert("The winer is Jhon's friend with " + scoreMike + " points!");
}
*/

if (scoreJohn > scoreMike && scoreJohn > scoreRaul) {
    alert("The winer is Jhon with " + scoreJohn + " points!" );    
} else if(scoreMike > scoreJohn && scoreMike > scoreRaul) {
    alert("The winer is Mike with " + scoreMike + " points!" );        
} else if (scoreRaul > scoreJohn && scoreRaul > scoreMike) {
    alert("The winer is Raul with " + scoreRaul + " points!" );    
} else {
    alert('it\'s a draw');
}
