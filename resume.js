//Script for the open and closing of the side menu
function OpenSideMenu() {
    document.getElementById('side-menu').style.height = '230px';
    document.getElementById('search-menu').style.width = '0%';
    document.getElementById('services').style.width = '0px';
}

function CloseSideMenu() {
    document.getElementById('side-menu').style.height = '0px';
    document.getElementById('services').style.width = 'block';
}

//Script to handle on scroll animation
let scroll = window.requestAnimationFrame || function(callback) {
    window.setTimeout(callback, 1000/60)
};


function isElementInViewpoint(el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    let rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0 && rect.bottom >= 0)
        || (rect.bottom >= (window.innerHeight 
        || document.documentElement.clientHeight)
        && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) 
        || (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}


function loop() {
    let elementsToShow = document.querySelectorAll('.show-on-scroll');
    elementsToShow.forEach(element => {
        if (isElementInViewpoint(element)) {
            element.classList.add('is-visible');
        } 
        else {
            element.classList.remove('is-visible');
        }
    });
    scroll(loop);
}
loop();