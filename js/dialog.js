let cuaderno = document.getElementById('descargarCuaderno');
let cancelar = document.getElementById('salirWebNo');
let salirWeb = document.getElementById('salirWeb');

// Update button opens a modal dialog
cuaderno.addEventListener('click', function() {
    salirWeb.showModal();
});

// Form cancel button closes the dialog box
cancelar.addEventListener('click', function() {
    salirWeb.close();
});