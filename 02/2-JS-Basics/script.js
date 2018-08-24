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

/*var jhonHeight = 172;
var mikeHeight = 172;
var raulHeight = 172;
var johnAge = 26;
var mikeAge = 24;
var raulAge = 26;
scoreJohn = scoreMike = scoreRaul = 0;
*/
/*jhonHeight= prompt("How many centimeters does John mesure?:");
mikeHeight = prompt("How many centimeters does John's friend mesure?: ");

johnAge = prompt("How old is John: ");
mikeAge = prompt("How old is John's firned: ");

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
/*var raul = {
    name: 'Raul',
    lastName: 'Burgos',
    yearOfBirth: 1975,
    job: 'Sales man',
    isMarried: true,
    family: ['Sofia', 'Jimena', 'Corina', 'Elena'],
    /*calculateAge: function() {
        return 2018 - this.yearOfBirth;
    }*/
/*    calculateAge: function() {
        this.age = 2018 - this.yearOfBirth;
    }
}

console.log(raul);
raul.calculateAge();

console.log(raul.age);*/

///////////////////////////////////////
// CODING CHALLENGE 2

/*
1. Create an array with some years where persons were born
2. Create an empty array (just [] )
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into the console whether each person is of full age (18 or older), as well as their age

5. Finally, create a function called printFullAge which receives the array of years as an argument, executes the steps 2., 3. and 4. and returns an array of true/false boolean values: true if the person is of full age (>= 18 years) and false if not (< 18 years)
6. Call the function with two different arrays and store the results in two variables: full_1 and full_2

Example input:  [1965, 2008, 1992]
Example output: [true, false, true]

Hint: you can use a loop not only to read from an array, like y[i], but also to set values in an array, like y[i] = ... You can also use the specific array methods.
*/

//var persons = new Array(1975, 1998, 1985,2005);
var persons = [1975, 2018, 1985,2005];


function printFullAge(persons=[]){
    var i=0;    
    var mayor=[];
    var ages = [];
    for (i=0; i<persons.length; i++){
        ages.push(2018 - persons[i]);
    }
    for(i=0; i<ages.length;i++){
        persona=i+1;
        if(ages[i]>=18){
            console.log("La persona " + persona + " nacida en " + persons[i] + " Es mayor de edad, puesto que tiene " + ages[i] + " años.");
            mayor.push(true);
        }else{
            console.log("La persona " + persona + " nacida en " + persons[i] + " NO es mayor de edad, puesto que tiene " + ages[i] + " años.");
            mayor.push(false);
        }
    }    
    return mayor;
}

var losMayores = printFullAge(persons);
console.log(losMayores);

