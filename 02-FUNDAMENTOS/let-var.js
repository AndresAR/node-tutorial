console.log('---------------------------------------');
console.log('Declarar e Imprimir variables VAR y LET');
console.log('---------------------------------------');
console.log('                                       ');
console.log('---------------------------------------');
console.log('Variables con VAR');
console.log('---------------------------------------');
console.log('                                       ');
var nombre = 'Wolverine';

// Condición que siempre se ejecutara
if(true){
	var nombre = 'Magneto';
}

// Imprimimos el nombre
console.log(nombre);



/*
	USO DE LET
	Pueden ser usado los mismos nombres, pero utilizan distintos puntos de memoria

*/
console.log('                                       ');
console.log('---------------------------------------');
console.log('Variables con LET');
console.log('---------------------------------------');
console.log('                                       ');
let nombre_let = 'Wolverine';

// Condición que siempre se ejecutara
if(true){
	nombre_let = 'Magneto';
}

// Imprimimos el nombre
console.log(nombre_let);


console.log('                                       ');
console.log('---------------------------------------');
console.log('Ciclo FOR');
console.log('---------------------------------------');
console.log('                                       ');


/*
	CICLO FOR CON VAR
*/

console.log('Imprimimos valor de i hasta 5 con VAR\n');
for (var i = 0; i <= 5; i++) {
	console.log(`i: ${ i }`);
}
console.log('\nValor de I después del FOR');
console.log(i);


let x;
console.log('\nImprimimos valor de X con LET');
for (let x = 0; x <= 5; x++) {
	console.log(`x: ${ x }`);
}

console.log('\nValor de x después del FOR');
console.log(`x: ${ x }`);


/*
	Resumen del Ejercicio:
	Las declaraciones var, pueden ser renombradas o reutilizadas N cantidad de veces,
	mantendrá el valor de la última inicialización
	Las declaraciones let, viven en una espacio separado de memoria dependiendo de donde son usadas
*/