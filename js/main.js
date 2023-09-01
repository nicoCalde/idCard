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

// works modal
const galleryItems = document.querySelectorAll('.galleryItem');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeButton = document.querySelector('.close');

galleryItems.forEach((item, index) => {
    const viewProjectButton = item.querySelector('.btnGallery');
    viewProjectButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent event propagation to parent elements
        modalTitle.textContent = `PROJECT TITLE ${index + 1}`;
        modalDescription.textContent = `This is the description for Project ${index + 1}. Lorem ipsum dolor sit amet... lakslas lk lkal klak lak lkls klaklska  l kl kslakl ksal klsklk sla l    lasl ask lakslaksl al al lskal ksla sl ls la lskal sklaks lak lsakl`;
        modal.style.display = 'block';
    });
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

