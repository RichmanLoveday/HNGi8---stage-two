//Script for the open and closing of the side menu
function OpenSideMenu() {
    HideOpenmenu();
    DisplayCloseMenu();
    document.getElementById('side-menu').style.height= '260px';
}
function HideOpenmenu() {
    document.querySelector('.open-menu').style.display= "none";
}

function CloseSideMenu() {
    DisplayOpenMenu();
    CloseMenu();
    document.getElementById('side-menu').style.height = '0px';
}

function DisplayOpenMenu() {
    document.querySelector('.open-menu').style.display= "flex";
}

function DisplayCloseMenu() {
    document.querySelector('.menu-close').style.display= "flex";
}

function CloseMenu() {
    document.querySelector('.menu-close').style.display= "none";
}


//Script to display projects
function DisplaySecFouFif() {
    document.getElementById('second-image').style.display = "flex";
    document.getElementById('fourth-image').style.display = "flex";
    document.getElementById('fifth-image').style.display = "flex";
    document.getElementById('first-image').style.display = "none";
    document.getElementById('third-image').style.display = "none";
    document.getElementById('sixth-image').style.display = "none";
}

function DisplayFirThirSix() {
    document.getElementById('first-image').style.display = "flex";
    document.getElementById('third-image').style.display = "flex";
    document.getElementById('sixth-image').style.display = "flex";
    document.getElementById('second-image').style.display = "none";
    document.getElementById('fourth-image').style.display = "none";
    document.getElementById('fifth-image').style.display = "none";
}

function DisplayAll() {
    document.getElementById('first-image').style.display = "flex";
    document.getElementById('third-image').style.display = "flex";
    document.getElementById('sixth-image').style.display = "flex";
    document.getElementById('second-image').style.display = "flex";
    document.getElementById('fourth-image').style.display = "flex";
    document.getElementById('fifth-image').style.display = "flex"
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


//Defined variables
let btt = document.getElementById('back-to-top'),
    body = document.body,
    docElem = document.documentElement,
    offset = 100,
    scrolPos, docHeight,
    isFirefox = navigator.userAgent.toLowerCase().indexOf( "firefox" ) > -1;

//Calculate the document height and set the offset to a quater of the value
docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.scrollHeight, docElem.offsetHeight);
if ( docHeight != 'undefined' ) {
    offset = docHeight / 4;
}
//console.log(docHeight)
//Adding scroll event listener 
window.addEventListener( 'scroll', function( event ) {
    scrollPos = body.scrollTop || docElem.scrollTop;

    if ( scrollPos > offset) {
        btt.classList = "visible";
    }
    else {
        btt.classList = " ";
    }

    //btt.classList = ( scrollPos > offset ) ? "visible" : "";
});

//Add click event
/*btt.addEventListener( "click", function( event ) {
    event.preventDefault();

    if( isFirefox ) {
        docElem.scrollTop = 0;
    }
    else {
        body.scrollTop = 0;  
    }
});*/

/*let myButton = document.getElementById("back-to-top");

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if(document.body.scroll > 100 || document.documentElement.scrollTop > 100) {
        myButton.style.display = "block";
    }
    else {
        myButton.style.display = "none";
    }
};*/


/*const goTopBtn = document.querySelector('.go-top-btn');

window.addEventListener('scroll', checkHeight)

function checkHeight(){
  if(window.scrollY > 200) {
    goTopBtn.style.display = "flex"
  } else {
    goTopBtn.style.display = "none"
  }
}

goTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})*/