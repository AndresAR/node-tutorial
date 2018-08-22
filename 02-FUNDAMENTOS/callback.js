// Un Callback es una función que se ejecuta cuando se cumple una condición
/*
	EJEMPO

	setTimeout(() => {
		console.log('Hola Mundo');
	},3000);
*/
	

let getUsuarioBtId = (id,callback) => {
	let usuario = {
		id,
		nombre: 'Andrés'
	}
	if(id === 20){
		callback(`El usuario con id ${ id }, no existe en la base de datos`);
	}else{
		callback(null, usuario);	
	}
	
}

getUsuarioBtId(1, (err, usuario) => {
	if(err){
		return console.log(err);
	}
	console.log('Usuario de Base de datos: ',usuario);
});