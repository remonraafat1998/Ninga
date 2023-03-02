// navbar responsive
let navbarLinks = document.querySelector('.nav-links');
let showSide = document.querySelector('.menu-btn');
let hideSide = document.querySelector('.close-btn');
showSide.addEventListener('click', () => {
    navbarLinks.classList.add('show')
});
hideSide.addEventListener('click', () => {
    navbarLinks.classList.remove('show')
});


// show btn to top
let btnTop = document.querySelector('.top-btn');
window.onscroll = () => {
    if (window.pageYOffset >= 400) {
        btnTop.classList.add('active')
    } else {
        btnTop.classList.remove('active')
    }
}


// animation Show Sections when scroll
let slides = document.querySelectorAll('.ani');
const loadingObserv = new IntersectionObserver((enteris) => {
    enteris.forEach((ele) => {
        ele.target.classList.toggle('animationSections', ele.isIntersecting);
        if (ele.isIntersecting) {
            loadingObserv.unobserve(ele.target)
        }
    })
})
slides.forEach((sec) => { loadingObserv.observe(sec) })