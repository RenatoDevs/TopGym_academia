let menuLight = document.querySelector('.menu');

window.addEventListener('scroll', () =>{
    menuLight.classList.toggle('sticky', window.scrollY > 0);
})