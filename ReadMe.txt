https://phppot.com/php/contact-us-page/ contact page draft
https://codepen.io/sanketbodke/pen/bGRVKYr?editors=0100(about page)
https://www.youtube.com/watch?v=NlFLuynxWFA&ab_channel=Divinector(Our partners page)
const reveal = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveal.forEach((item) => {
        const bottomOfObject = item.offsetTop + item.offsetHeight;
        const bottomOfWindow = window.scrollY + window.innerHeight;
        if (bottomOfWindow > bottomOfObject) {
            item.classList.add("active");
        }
    });
});

// scroll reveal
window.addEventListener("scroll", reveal);

function reveal (){
    var reveals = document.querySelectorAll('.reveals');

    for (var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}
Donate button across blogs,story and gallery

Boardmeetings Photograph
office group Photograph
Why we are here
journey so far
