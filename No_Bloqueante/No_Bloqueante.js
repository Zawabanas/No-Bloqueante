'use strict';

setTimeout(function(){
    console.log('Tarea 1');
}, 3000); // Esperar 3 segundos

setTimeout(function()  {
    console.log('Tarea 2');
}, 20000); // Esperar 20 segundos

setTimeout(function(){
    console.log('Tarea 3');
}, 10000); // Esperar 10 segundos

setTimeout(function(){
    console.log('Tarea 4');
}, 2000); // Esperar 4 segundos

console.log('Tarea 5');
console.log(process.uptime()); // Tiempo de actividad del proceso actual
console.log('Fin del programa');
