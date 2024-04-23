let menu = document.querySelector(".fixed-menu");

menu.addEventListener('click', function(event){
   let clickTarget = event.target;
   let activeBtn = document.querySelector('.active');
   
   if (clickTarget.classList.contains('nav-link')){
       clickTarget.classList.add('active');
       activeBtn.classList.remove('active');
       let mobile = document.querySelector('.mobile-menu');
        if (!mobile.classList.contains('hide')) {
            mobile.classList.add('hide');
        }
   }
   let body = document.querySelector("body");
   let mobileMenu = document.querySelector(".mobile-menu");
   if (!body.classList.contains("off-scroll") && !mobileMenu.classList.contains('hide')) {
    body.classList.add("off-scroll");
   }
   else {
    body.classList.remove("off-scroll");
   }
});


let classlink = '.main-link' ;
window.onscroll=function(){
    let h = document.documentElement.clientHeight;
    if (window.scrollY >=h*4){
        classlink = '.comments-link';
    }
    else if (window.scrollY >=h*3){
        classlink = '.works-link';
    }
    else if (window.scrollY >=h*2){
        classlink = '.skills-link';
    }
    else if (window.scrollY >=h){
        classlink = '.about-link';
    }
    else {
        classlink = '.main-link';
    }

    let activeBtn  = document.querySelector('.active');
    let newActiveBtn = document.querySelector(classlink);

    if (!newActiveBtn.classList.contains('active')) {
    newActiveBtn.classList.add('active');
    activeBtn.classList.remove('active')
};
};

document.querySelector(".mobile-button").addEventListener("click",function(event)
{
    document.querySelector(".mobile-menu").classList.toggle("hide");
}) ;





