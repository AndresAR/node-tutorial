// Simulación de Base de datos
let empleados = [{
	id: 1,
	nombre: 'Andrés'
},
{
	id: 2,
	nombre: 'Katherine'
},
{
	id: 3,
	nombre: 'Benjamín'
}];

let salarios = [{
	id: 1,
	salario: 1000
},
{
	id: 2,
	salario: 2000
}];

// Función para traer empleados
let getEmpleado = (id, callback) => {
	// Retornamos un empleado que su id sea igual al pasado por parametro
	let empleadoDB = empleados.find(empleado => empleado.id === id);
	if(!empleadoDB){
		callback(`No existe empleado con ID ${ id }`)
	}else{
		callback(null, empleadoDB);
	}
	//console.log(empleadoDB);
}


let getSalario = (empleado, callback) => {
	let salarioDB = salarios.find(salario => salario.id === empleado.id);
	if(!salarioDB){
		callback(`No se encontró un salario para ${ empleado.nombre }`);
	}else {
		callback(null,{
			empleado: empleado.nombre,
			salario: salarioDB.salario,
			id: empleado.id
		});
	}
}


getEmpleado(1, (err, empleado) => {
	if(err){
		return console.log(err);
	}
	let salario = getSalario(empleado, (err, resp) => {
		if(err){
			return console.log(err);
		}
		console.log(`El salario de ${ resp.empleado } es de ${ resp.salario }`);
	});
});

/*
	Problemas comunes:
	1.- Ejecutar un callback más de una vez

*/