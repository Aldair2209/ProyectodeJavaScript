
/*=============== HOME ===============*/

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text', {delay:200, origin:'top'});
sr.reveal('.hero-img', {delay:450, origin:'top'});
sr.reveal('.icons', {delay:500, origin:'left'});




/*=============== SECCIONES DE DESPLAZAMIENTO ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== CAMBIAR EL FONDO HEADER ===============*/

function scrollHeader(){
    const header = document.getElementById('header')
    
// Cuando el desplazamiento es mayor que 80 de altura de ventana gráfica, agregue la clase de encabezado de desplazamiento a la etiqueta del encabezado
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
