/* MENU BUTTON */

const $openMenu = document.querySelector(".open-menu-button");
const $mainNav = document.querySelector(".main-nav");
const $closeMenu =  document.querySelector(".close-menu-button");




$openMenu.addEventListener("click", ()=>{
    $mainNav.classList.add("-active");
})

$closeMenu.addEventListener("click", ()=>{
    $mainNav.classList.remove("-active");
})



/* Skills Buttons */
const $skillButtons = document.querySelectorAll(".skill-button");


function selectSkill(){
    let $skillactive = this
    if($skillactive.classList.contains("-active")){
        $skillactive.classList.remove("-active")
    }else{
        $skillactive.classList.add("-active")
    }
}

$skillButtons.forEach((skillItem) => {
    skillItem.addEventListener("click", selectSkill);
})

/*Qualification tabs */
const $tabQualification = document.querySelectorAll(".qualification-button")
let $tabActive = document.querySelector(".qualification-button.-active")

function selectQualification(item){
    item.preventDefault();
    let $tabClicked = this;
    $tabActive.classList.remove("-active");
    $tabClicked.classList.add("-active");
    $tabActive = $tabClicked;

    let $contentActive = document.querySelector(".qualification-content.-active");
    $contentActive.classList.remove("-active");
    let idContent = $tabClicked.getAttribute("href");
    let $targetContent = document.querySelector(idContent);
    $targetContent.classList.add("-active");

}

$tabQualification.forEach((tabItem)=>{
    tabItem.addEventListener("click", selectQualification)
})

/* Services Modal  */

const $cardButtons = document.querySelectorAll(".card-button")
const $serviceModals = document.querySelectorAll(".service-modal")
const $closeModals = document.querySelectorAll(".modal-close")


let modalService = (modalClick)  => {
    $serviceModals[modalClick].classList.add("-active")
}

$cardButtons.forEach(($cardButton, i) => {
    $cardButton.addEventListener("click", () => {
        modalService(i);
    })
})

$closeModals.forEach(($closeModal)=>{
    $closeModal.addEventListener("click", ()=>{
        $serviceModals.forEach(($serviceModal)=>{
            $serviceModal.classList.remove("-active")
        })
    })
})

/* PORTFOLIO CAROUSEL */
const $portfolioCarousel = document.querySelector(".glide.portfolio-carousel")

new Glide($portfolioCarousel, {
    type: "carousel",
    gap: 0,
    starAt: 1,
    perView: 1,
    autoplay: 1000,
    hoverpause: true,
    AnimationDuration: 1000

}).mount()

/* Scroll Event */ 
const scrollEvent = ( )=> {

    const $header = document.querySelector(".header")
    const $btntoTop = document.querySelector(".btn-totop")
    
    if(this.scrollY >= 50 ){
        $header.classList.add("-scroll");
    }else{
        $header.classList.remove("-scroll");
    }


    if(this.scrollY >= 550 ){
        $btntoTop.classList.add("-visible");
    }else{
        $btntoTop.classList.remove("-visible");
    }


}

window.addEventListener("scroll", scrollEvent)


/* Smooth scroll section active */ 
const $sections = document.querySelectorAll(".section[id]")



let sectionActive = () => {
    const $scroll_Y= window.pageYOffset
    $sections.forEach(current => {
        const $sectionHeight = current.offsetHeight
        const $sectionTop = current.offsetTop -50
        $sectionId = current.getAttribute("id")

        if($scroll_Y > $sectionTop && $scroll_Y <= $sectionTop + $sectionHeight){
            document.querySelector(".main-nav a[href*=" + $sectionId  +"]").classList.add("-active")
        }else{
            document.querySelector(".main-nav a[href*=" + $sectionId + "]").classList.remove("-active")
        }
    })

}

window,addEventListener("scroll", sectionActive);


/* Dark/Light Theme */
const $themeButton = document.querySelector(".theme-button");
const $body = document.body
const $themeActive = window.localStorage.getItem("theme")

if($themeActive === "dark"){
    $themeButton.classList.add("-dark-mode")
    $body.classList.add("dark-theme")
}else{
    $themeButton.classList.remove("-dark-mode")
    $body.classList.remove("dark-theme")
    
    
}



const toggleTheme = ()  => {
    let $darkMode = document.querySelector(".-dark-mode")

    if(!$darkMode){
        $themeButton.classList.add("-dark-mode")
        $body.classList.add("dark-theme")
        localStorage.setItem("theme", "dark")
    }else{
        $themeButton.classList.remove("-dark-mode")
        $body.classList.remove("dark-theme")
        localStorage.setItem("theme", "light")

        
        
    }
}


$themeButton.addEventListener("click", toggleTheme)