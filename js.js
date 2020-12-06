let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

let chbx = document.getElementById('check');
let span = document.getElementById("slider");
function check(chbx) {
    if (chbx.checked) {
        let styleElem = document.head.appendChild(document.createElement("style"));
        styleElem.innerHTML = ".slider:before {content: 'Annually';}";
        document.getElementById("money").innerHTML = "$999<span>/annually</span>";
                  
    } else {
        let styleElem = document.head.appendChild(document.createElement("style"));
        styleElem.innerHTML = ".slider:before {content: 'Monthly';}";  
        document.getElementById("money").innerHTML = "$99<span>/month</span>";      
    }    
}



let slideIndex = 1;

showSlides(slideIndex);


function nextSlide() {
    showSlides(slideIndex += 1);
}


function previousSlide() {
    showSlides(slideIndex -= 1);
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    
    let slides = document.getElementsByClassName("item7");

 
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

   
    for (let slide of slides) {
        slide.style.display = "none";
    }
  
    slides[slideIndex - 1].style.display = "flex";
    slides[slideIndex - 1].style.alignItems = "center";
    slides[slideIndex - 1].style.justifyContent = "space-between";
}
