const topNav = document.querySelector('.topNav');
const clickNav = document.querySelector('#menuButton');
// scroll for nav
window.onscroll = function(){
    let top = window.scrollY;
    if (top > 1){
        topNav.classList.add('active');
    }else{
        topNav.classList.remove('active');
    }
}
// click for nav
clickNav.addEventListener('click', (e)=>{
    topNav.classList.add('active');
})


