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
const modalProjects = [
    {
        title: "Choose",
        skills: "#Django#Vue.js#PostgreSQL",
        src: "./assets/img/modal/choose.png",
        description: "Aimed at providing users with a comprehensive and user-friendly platform to search for various establishments in the Autonomous City of Buenos Aires marks a significant step forward in enhancing local tourism and facilitating exploration. It is designed to enable users to effortlessly find and explore hotels, restaurants, cafes, bars, and confectioneries within the vibrant and culturally rich city of Buenos Aires.",
        link: "./assets/resource/Choose - General Description.pdf"
    },
    {
        title: "Interactive Map",
        skills: "#React.js#GoogleMapsPlatform",
        src: "./assets/img/modal/mapai.png",
        description: "The project involved the development of a sophisticated website designed to showcase the various establishments affiliated with the AHRCC in Buenos Aires City. The primary objective was to create an interactive map that allowed users to explore and discover hotels, bars, cafés, and restaurants associated with the organization.",
        link: "https://nicocalde.github.io/mapai/"
    },
    {
        title: "Get-Films",
        skills: "#React.js#Sass#TMDbAPI",
        src: "./assets/img/modal/get-films.png",
        description: "Get-Films is a personal project developed to enhance my skills in web development while also learning about React, API integration, styling with SASS, and backend implementation with Firebase. The project aimed to create a streaming platform resembling Netflix, where users could discover and watch a wide range of movies and TV shows.",
        link: "https://nicocalde.github.io/23304-grupo1-getfilms/"
    },
    {
        title: "recetARIO.",
        skills: "#Django#REST#MySQL",
        src: "./assets/img/modal/recetario.png",
        description: "The Recipe Creator Website was a personal project undertaken to enhance programming skills and gain practical experience in web development using Python and the Django framework. The project's primary aim was to create an interactive and user-friendly platform where users could discover, share, and create their own recipes, while simultaneously serving as a practical learning opportunity to delve deeper into backend development and database management.",
        link:"http://caldegol.pythonanywhere.com/"
    },
    {
        title: "bgs",
        skills: "#HTML#CSS#js",
        src: "./assets/img/modal/bgs.png",
        description: "The goal of this project was to transform BGS's online presence by creating their website to effectively showcase their diverse service offerings in the field of hygiene and maintenance. As a service company specializing in fumigation, water tank cleaning, carpet cleaning, construction, and roof cleaning, they recognized the need for a modern, user-friendly website that would not only attract potential clients but also highlight the company's expertise and commitment to excellence.",
        link: "https://nicocalde.github.io/bgs/"
    },
    {
        title: "TodoApp",
        skills: "#HTML#CSS#js",
        src: "./assets/img/modal/todoapp.png",
        description: "TodoApp was a project undertaken to solidify and master your skills in JavaScript by creating a functional and user-friendly website for managing to-do lists. The primary objective of the project was to gain a deeper understanding of JavaScript programming concepts while providing a practical solution for organizing tasks.",
        link: "https://nicocalde.github.io/todoApp/"
    }
];

const galleryItems = document.querySelectorAll('.galleryItem');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalSkills = document.getElementById('modal-skills');
const modalImg = document.querySelector('.modal-body img');
const modalDescription = document.getElementById('modal-description');
const modalVisitSite = document.getElementById('modal-visit-site');
const closeButton = document.querySelector('.close');

galleryItems.forEach((item, index) => {
    const viewProjectButton = item.querySelector('.btnGallery');
    viewProjectButton.addEventListener('click', (e) => {
        e.preventDefault();
        modalTitle.textContent = modalProjects[index].title;
        modalSkills.textContent = modalProjects[index].skills;
        modalImg.src = modalProjects[index].src;
        modalDescription.textContent = modalProjects[index].description;
        modalVisitSite.href = modalProjects[index].link;
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

