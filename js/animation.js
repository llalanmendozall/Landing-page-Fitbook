let fadeleft = document.querySelectorAll(".fadeLeft");
let fadeup = document.querySelectorAll(".fadeUp");
let faderight = document.querySelectorAll(".fadeRight");

function fadeLeft(){
    let scrollTop = document.documentElement.scrollTop;
    for( var i=0; i<fadeleft.length; i++){
        let heightAnimation= fadeleft[i].offsetTop;
        if(heightAnimation - 500 < scrollTop){
            fadeleft[i].style.opacity=1;
            fadeleft[i].classList.add("fade-left");
        }
    }
}

function fadeUp(){
    let scrollTop = document.documentElement.scrollTop;
    for( var i=0; i<fadeup.length; i++){
        let heightAnimation= fadeup[i].offsetTop;
        if(heightAnimation - 500 < scrollTop){
            fadeup[i].style.opacity=1;
            fadeup[i].classList.add("fade-up");
        }
    }
}
function fadeRight(){
    let scrollTop = document.documentElement.scrollTop;
    for( var i=0; i<faderight.length; i++){
        let heightAnimation= faderight[i].offsetTop;
        if(heightAnimation - 500 < scrollTop){
            faderight[i].style.opacity=1;
            faderight[i].classList.add("fade-right");
        }
    }
}


window.addEventListener('scroll', fadeLeft);
window.addEventListener('scroll', fadeUp);
window.addEventListener('scroll', fadeRight);
