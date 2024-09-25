const menuBurguerMobie = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");



function showHideMobileMenu(){
    const isClose = mobileMenu.classList.contains('inactive');

    if(isClose){
        mobileMenu.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function autoHideMenuScreenResolution(){
    if(window.innerWidth > 1000){
        mobileMenu.classList.add('inactive');
    }
}

menuBurguerMobie.addEventListener('click',showHideMobileMenu);
window.addEventListener('resize',autoHideMenuScreenResolution);

