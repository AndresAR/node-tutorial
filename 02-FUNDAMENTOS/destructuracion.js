// Declaración de variables
let deadpool = {
	nombre: 'Wade',
	apellido: 'Winstone',
	poder: 'Regenración',
	getNombre: function() {
		return `${ this.nombre } ${ this.apellido} - Poder: ${ this.poder}`;
	}
};
/*
	Se crea un arreglo con el nombre, apellido y poder
	Se crea una función que retorna el nombre apellido y el poder
	Se utiliza el this,para llamar al elemento del arreglo que está al mismo nivel que la función
*/

console.log(deadpool.getNombre());

// Extraemos datos de deadpool
// let nombre = deadpool.nombre;
// let apellido = deadpool.apellido;
// let poder = deadpool.poder;

// Extraemos datos con "destructuración"
let { nombre: primerNombre, apellido, poder } = deadpool;

// Imprimimos la información guardada
console.log(primerNombre,apellido,poder);