// Función normal
function sumar(a,b){
	return a+b;
}

// Función de flecha normal
let sumaFlechaExtendido = (a,b) => {
	return a+b;
}

// Esta forma es aplicable cuando toda la función y return pueden ser expresados en una sola linea
let sumaFlechaResumido = (a,b) => a+b;

// Imprimimos el resultado de la función normal
console.log(sumar(10,20));
// Imprimimos el resultado de la función de flecha normal
console.log(sumaFlechaExtendido(10,20));
// Imprimimos el resultado de la función de flecha resumido
console.log(sumaFlechaResumido(10,20));


/*
	Ejercicio práctico, transformar está función a una de flecha
*/
function saludar(){
	return 'Hola mundo';
}

console.log(saludar());

// Función de flecha con un solo parametro, se puede representar de la siguiente manera
let saluda = nombre => `Hola ${ nombre }`;
// también se puede expresar entre parentesis el parametro para que quede definido explicitamente que es una función de flecha
// let saluda = (nombre) => `Hola ${ nombre }`;

console.log(saluda('Andrés'));


// Transformar ejercicio de Deadpool(Destructuración) a función de flecha
let deadpool = {
	nombre: 'Wade',
	apellido: 'Winstone',
	poder: 'Regenración',
	getNombre: () => {
		return `${ this.nombre } ${ this.apellido} - Poder: ${ this.poder}`;
	}
};

console.log(deadpool.getNombre());
/*
	Retorna: undefined undefined - Poder: undefined
*/

let deadpoolSolucionFlecha = {
	nombre: 'Wade',
	apellido: 'Winstone',
	poder: 'Regenración',
	getNombre(){
		return `${ this.nombre } ${ this.apellido} - Poder: ${ this.poder}`;
	}
};

console.log(deadpoolSolucionFlecha.getNombre());
/*
	Retorna: Wade Winstone - Poder: Regenración
*/




/* Respuesta del ejercicio de transformación

let saludarFlecha = ()=> 'Hola Mundo';
console.log(saludarFlecha());

*/