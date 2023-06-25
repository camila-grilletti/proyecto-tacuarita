// Cuaderno naturista

let cuaderno = document.getElementById('descargarCuaderno');
let cancelar = document.getElementById('salirWebNo');
let salirWeb = document.getElementById('salirWeb');

cuaderno.addEventListener('click', function() {
    salirWeb.showModal();
});

cancelar.addEventListener('click', function() {
    salirWeb.close();
});


// Manual germinación

let cuaderno2 = document.getElementById('descargarManualGerminacion');
let cancelar2 = document.getElementById('salirWebNo2');
let salirWeb2 = document.getElementById('salirWeb2');

cuaderno2.addEventListener('click', function() {
    salirWeb2.showModal();
});

cancelar2.addEventListener('click', function() {
    salirWeb2.close();
});


// Manual digital

let cuaderno3 = document.getElementById('descargarManualDigital');
let cancelar3 = document.getElementById('salirWebNo3');
let salirWeb3 = document.getElementById('salirWeb3');

cuaderno3.addEventListener('click', function() {
    salirWeb3.showModal();
});

cancelar3.addEventListener('click', function() {
    salirWeb3.close();
});


// Todos los descargables

let cuaderno4 = document.getElementById('descargarTodos');
let cancelar4 = document.getElementById('salirWebNo4');
let salirWeb4 = document.getElementById('salirWeb4');

cuaderno4.addEventListener('click', function() {
    salirWeb4.showModal();
});

cancelar4.addEventListener('click', function() {
    salirWeb4.close();
});