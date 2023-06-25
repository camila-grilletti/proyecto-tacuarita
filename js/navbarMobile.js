const nav = document.querySelector('#menu-hamburguesa');
const abrirNav = document.querySelector('#btn-abrir-hamburguesa');
const cerrarNav = document.querySelector('#btn-cerrar-hamburguesa');
const navContainer = document.querySelector('.containerMobileButtom');

abrirNav.addEventListener('click', () => {

    nav.classList.add("visible");
});

cerrarNav.addEventListener('click', () => {

    nav.classList.remove("visible");
}
)
document.addEventListener('click', (e) => {
    if (e.target.id !== 'menu-hamburguesa' && e.target.id !== 'btn-abrir-hamburguesa') {
        nav.classList.remove("visible");
    }
})

window.addEventListener('scroll', (e) => {
    if (window.scrollY > 540) {
        navContainer.classList.add('movible');
    } else {
        navContainer.classList.remove('movible');
    }
});
