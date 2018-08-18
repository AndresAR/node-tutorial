// Declaración de Variables
let nombre = 'Deadpool';
let real = 'Wade Winston';

// Concatenación de la forma antigua
console.log('\nImprimir Concatenación tradicional');
console.log(nombre +' es '+ real);
// Concatenación con template literales
console.log('\nImprimir Concatenación template literal');
console.log(`${nombre} es ${real}`);


// Asignar valor en variable
let nombreCompleto = nombre + ' es '+ real;
let nombreTemplate = `${ nombre } es ${ real }`;

console.log('\nImprimir variable con concatenación tradicional');
console.log(nombreCompleto);
console.log('\nImprimir variable con concatenación template literal');
console.log(nombreTemplate);
console.log('Comprobar si la concatenación tradicional es igual a la concatenación con template literal');
console.log(nombreCompleto === nombreTemplate);

// Función que retorne un template literal
function getNombre(){
	return `${nombre} es ${real}`;
}

// Imprimir función getNombre, se debe poner los parentesis y hara la impresión de la función
console.log(`\nEl nombre de: ${ getNombre() }`);