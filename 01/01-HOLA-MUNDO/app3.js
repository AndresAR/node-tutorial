console.log('Inicio del Programa');

// setTimeout, ejecuta algo(callback) en un determinado tiempo
// setTimeout(callback,tiempo(ms));


setTimeout(function(){
	console.log('Primer timeout');
},3000);

setTimeout(function(){
	console.log('Segundo timeout');
},0);

setTimeout(function(){
	console.log('Tercer timeout');
},0);

console.log('Fin del Programa');

/****************************/
/*	 Orden de Ejecución: 	*/
/* 1.- Inicio del Programa 	*/
/* 2.- Fin del Programa		*/
/* 3.- Segundo timeout 		*/
/* 4.-Tercer timeout 		*/
/* 5.- Primer timeout 		*/
/****************************/