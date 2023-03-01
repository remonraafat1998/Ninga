let slides = document.querySelectorAll('.ani');
const loadingObserv = new IntersectionObserver((enteris)=> {
    enteris.forEach((ele)=> {
        ele.target.classList.toggle('animationSections', ele.isIntersecting);
        if(ele.isIntersecting){
            loadingObserv.unobserve(ele.target)
        }
    })
})
slides.forEach((sec)=> {loadingObserv.observe(sec)})