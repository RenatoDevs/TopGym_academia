class MobileNavBar{
    constructor(mobileMenu,navList,navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "activeMenu";
        //usando metodo bind para o this não perder a referencia
        this.handleClick = this.handleClick.bind(this);

    }
    animateLinks(){
        this.navLinks.forEach((link,index) =>{
            link.style.animation 
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)
                
        });
    }
    addClickEventLinks(){
        this.navLinks.forEach((link) => {
            link.addEventListener('click', ()=>{
                this.handleClick()
            })
        })
    }
    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        //animação dos links
        this.animateLinks();
    }
    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
    init(){
        if(this.mobileMenu){
            this.addClickEvent();
            this.addClickEventLinks();
        }
        return this;
    }
}
//letra inicial maiuscula igual o nome da classe
const mobileNavBar = new MobileNavBar(
    //classes do css
    ".mobileMenu",
    ".navList",
    ".navList li"
);

let menuLight = document.querySelector('.menu');

window.addEventListener('scroll', () =>{
    menuLight.classList.toggle('sticky', window.scrollY > 0);
})

mobileNavBar .init();