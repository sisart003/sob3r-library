const scrollTop = document.querySelector('.scroll-top');

window.addEventListener('scroll', (e) => {
    if(document.documentElement.scrollTop > 300 ){
        scrollTop.style.display = "block";
    }else{
        scrollTop.style.display = "none";
    }
})