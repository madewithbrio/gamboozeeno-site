var issueImages = Array.from(document.getElementsByClassName("issue"));
var featureImages = Array.from(document.getElementsByClassName("mockup"));
var images = issueImages.concat(featureImages);
var windowBottom = window.scrollY + window.innerHeight;
var windowHeight = ( window.innerHeight / 2 );

function shoveit() {
    for (var i = 0, len = images.length; i < len; i++) {
        var image = images[i];
        var imagePosition = image.getBoundingClientRect();
        if ( ( image.getBoundingClientRect().top + windowHeight ) < window.innerHeight ) {
            image.classList.add("shove-it");
        }
    }
}

window.addEventListener('scroll',shoveit);
window.addEventListener('load', shoveit);