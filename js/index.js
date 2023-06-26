

// modal de relevamiento

const btnAbrirModal = document.getElementById('btn-abrir-relevamiento');
const btnCerrarModal = document.getElementById('btn-cerrar-relevamiento');
const modalRelenvamiento = document.getElementById('modalAreas');

btnAbrirModal.addEventListener("click",()=>{
    modalRelenvamiento.showModal();
});

btnCerrarModal.addEventListener("click",()=>{
    modalRelenvamiento.close();
});
// modal de plantines

const btnAbrirModalPlantines = document.getElementById('btn-abrir-plantines');
const btnCerrarModalPlantines = document.getElementById('btn-cerrar-plantines');
const modalPlantines = document.getElementById('modalPlantines');

btnAbrirModalPlantines.addEventListener("click",()=>{
    modalPlantines.showModal();
});
btnCerrarModalPlantines.addEventListener("click",()=>{
    modalPlantines.close();
});

// modal recoleccion
const btnAbrirModalRecoleccion = document.getElementById('btn-abrir-recoleccion');
const btnCerrarModalRecoleccion = document.getElementById('btn-cerrar-recoleccion');
const modalRecoleccion = document.getElementById('modalRecoleccion');

btnAbrirModalRecoleccion.addEventListener("click",()=>{
    modalRecoleccion.showModal();
});

btnCerrarModalRecoleccion.addEventListener("click",()=>{
    modalRecoleccion.close();
});

// modal Plantacion

const btnAbrirModalPlantacion = document.getElementById('btn-abrir-plantacion');
const btnCerrarModalPlantacion = document.getElementById('btn-cerrar-plantacion');
const modalPlantacion = document.getElementById('modalPlantacion');

btnAbrirModalPlantacion.addEventListener("click",()=>{
    modalPlantacion.showModal();
})
btnCerrarModalPlantacion.addEventListener("click",()=>{
    modalPlantacion.close();
})


// GALERIA

const contenedorGaleria = document.querySelector('.contenedorPadreImagenes');
// const btnCategorias = document.querySelectorAll('.btnCategoria');
const selectorCategoria = document.getElementById('selectorCategoria');    

function cargarGaleria (especieSeleccionada){

        especieSeleccionada.forEach((imagen)=>{
        const div = document.createElement('div');
        div.classList.add('imagenGaleria');
        div.innerHTML = `
        <img src="${imagen.imagen}" alt="${imagen.nombre}" class="tamanoImgGaleria">
        `
        contenedorGaleria.appendChild(div);
    })

};  

// cargarGaleria(imagenesArray);

selectorCategoria.addEventListener('change',(e)=>{
    const arrayFiltrado =  imagenesArray.filter (img => img.id === e.currentTarget.value);
    contenedorGaleria.innerHTML = "";
    cargarGaleria(arrayFiltrado);    
})

