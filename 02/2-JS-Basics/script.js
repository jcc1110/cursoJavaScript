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

//Hay que notar que esta solucion no considera el empate de dos jugadores y uno con menor score

/*Expresion produce un valor:
3+2;
var x=3;
Un statement no produce un valor inmediato:
function someFun(par){
    //code
};
*/

//Arrays
/*
var names = ['Raul', 'Pedro', 'John'];
var years = new Array(1975,2001,1964);

var ArrayOfRaul = ['Raul', 'Burgos', 1975, 'rojo', true, 'sales man'];

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(ArrayOfRaul);
console.log(ArrayOfRaul.indexOf(1975));
console.log(ArrayOfRaul.indexOf('Burgos'));
if (ArrayOfRaul.indexOf('programer') === -1){
    console.log('Raul is not a programer');
} else {
    console.log('Raul is a programer');
}
console.log(ArrayOfRaul);
console.log(ArrayOfRaul.push('Azules')); //agrega un elemento al final
console.log(ArrayOfRaul);
console.log(ArrayOfRaul.pop()); //quita un elemento del final
console.log(ArrayOfRaul);
console.log(ArrayOfRaul.shift()); //quita un elemento del principio
console.log(ArrayOfRaul);
console.log(ArrayOfRaul.unshift('test')); //agrega un elemento al principio
console.log(ArrayOfRaul);
*/

//Objets

/* var raul = {
    name: 'Raul',
    lastName: 'Burgos',
    yearOfBirth: 1975,
    job: 'Sales man',
    isMarried: true    
}

//acceso a los valores de las propiedades
console.log(raul.name + ' ' + raul.lastName);
console.log(raul['yearOfBirth']);

//acceso a una propiedad mediante una variable con el nombre de la propiedad

var elTrabajo = 'job';
console.log(raul[elTrabajo]);

//Creacion del objeto en linea
var manuel = new Object();
manuel.name = 'Manuel';
manuel.lastName = 'Murray';
manuel.yearOfBirth = 1977;
manuel.job = 'Programmer';
manuel.isMarried = false;

console.log(manuel); */

//Objetos y metodos
var raul = {
    name: 'Raul',
    lastName: 'Burgos',
    yearOfBirth: 1975,
    job: 'Sales man',
    isMarried: true,
    family: ['Sofia', 'Jimena', 'Corina', 'Elena'],
    /*calculateAge: function() {
        return 2018 - this.yearOfBirth;
    }*/
    calculateAge: function() {
        this.age = 2018 - this.yearOfBirth;
    }
}

console.log(raul);
raul.calculateAge();

console.log(raul.age);
