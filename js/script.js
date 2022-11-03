

const btDev = document.querySelector('.bt-dev');
const devArea = document.querySelector('.dev');
const btTop = document.querySelector('.bt-top');
const sectionTop = document.querySelector('#init');

function expand() {
    devArea.classList.toggle('active')
    console.log('clicou')
}

btDev.addEventListener('click', expand);

/* Escondendo botão top*/
window.addEventListener('scroll', () =>{
    btTop.classList.toggle('hide', !window.scrollY > 0);
})

function scrollToTopOnclick(){
    const top = sectionTop.offsetTop;
    window.scroll({
        top:top,
        behavior:'smooth'
    })
    btTopLocation()
}

btTop.addEventListener('click', scrollToTopOnclick)