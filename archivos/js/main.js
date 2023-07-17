
/*=============== HOME ===============*/

const sr = ScrollReveal({
  distance: '65px',
  duration: 2600,
  delay: 100,
  reset: true
});

sr.reveal('.hero-text, .section__title', { delay: 400, origin: 'top' });
sr.reveal('.hero-img', { delay: 500, origin: 'top' });
sr.reveal('.icons', { delay: 500, origin: 'left', interval: 200 });
sr.reveal('.form1', { delay: 500, origin: 'right' });
sr.reveal('.card_noticias', { delay: 500, origin: 'bottom', interval: 300 });

/*=============== SECCIONES DE DESPLAZAMIENTO ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)


/*=============== CAMBIAR EL FONDO HEADER ===============*/

function scrollHeader() {
  const header = document.getElementById('header')

  // Cuando el desplazamiento es mayor que 80 de altura de ventana gráfica, agregue la clase de encabezado de desplazamiento a la etiqueta del encabezado
  if (this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)



/*=============== js del contactanos ===============*/

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

