
// Función saludar
function saludar(nombre){
	// declarar variable mensaje
	let mensaje = `Hola ${ nombre }`;
	// retornar mensaje
	return mensaje;

	// Opción resumida
	// return `hola ${ nombre }`;
}

// Asignamos el valor de que retorna la función a nuestra variable
let saludo = saludar('Andrés');
console.log(saludo);