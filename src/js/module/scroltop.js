// Scroll To top
export function scrolToTop() {
    let body = document.querySelector("body");
    let bHeight = body.getBoundingClientRect().height;
    let screenY = window.innerHeight / 2;
    let btn = document.querySelector('#btn');

    window.onscroll = function () {
        if (pageYOffset > screenY) {
            btn.classList.add("fixed");
        } else {
            btn.classList.remove("fixed");
        }
    }

    btn.addEventListener("click", scrollToTop);

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}

//Scroll To Top
//let basicScrollTop = function () {  
    // The button
   // let btnTop = document.querySelector('#go-top');
    // Reveal the button
       // let btnReveal = function () { 
           // if (window.scrollY >= 300) {
           // btnTop.classList.add('is-visible');
           // } else {
           // btnTop.classList.remove('is-visible');
       // }    
   // }  
    // Smooth scroll top
       // let TopscrollTo = function () {
           // if(window.scrollY!=0) {
           // setTimeout(function() {
           // window.scrollTo(0,window.scrollY-140);
           // TopscrollTo();
            //}, 5);
        //}
   // }
    // Listeners
        //window.addEventListener('scroll', btnReveal);
       // btnTop.addEventListener('click', TopscrollTo);  
   // };
    //basicScrollTop();

