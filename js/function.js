window.addEventListener("load", function () {

    const nav = document.querySelector('header nav');
    const llamarMenu = document.querySelector('#llamarmenu');
    const ulNav = document.querySelector('.menu');
    const iconoMenu = document.querySelector('nav button .hamburguesa');
    const cruz = document.querySelector('nav button .cruz');

    llamarMenu.addEventListener("click", function(){
        ulNav.classList.toggle("novisible");
        nav.classList.toggle("menudesplegado");
        iconoMenu.classList.toggle("novisible");
        cruz.classList.toggle("novisible");
    })
    
    const botones = document.querySelector('header .menu');
    const inicioB = document.querySelector('.a');
    const experienciaB = document.querySelector('.b');
    const habilidadesB = document.querySelector('.c');
    const portafolioB = document.querySelector('.d');
    const contactoB = document.querySelector('e')

    botones.addEventListener("click", function() {
        inicioB.classList.toggle("boton_prendido");
        experienciaB.classList.toggle("boton_prendido");
        habilidadesB.classList.toggle("boton_prendido");
        portafolioB.classList.toggle("boton_prendido");
        contactoB.classList.toggle("boton_prendido");
    });





})