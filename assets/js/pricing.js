var slider = document.getElementById("children-counter-slider");
var counter = document.getElementById("children-counter");
var pricePerMonthBasic = document.getElementById("plan-price-basic");
var pricePerMonthNinja = document.getElementById("plan-price-ninja");
var pricePerMonthPro = document.getElementById("plan-price-pro");
var allThemChildren = document.getElementsByClassName("current-children-counter");
var sliderRange = slider.max - slider.min;

function updatePlans() {
    var sliderPercentAsDecimal = ( slider.value - slider.min ) / sliderRange;
    counter.innerHTML = slider.value;
    counter.style.left = "calc( " + ( 100 * sliderPercentAsDecimal ) + "% - " + ( sliderPercentAsDecimal - 0.5 ) * 40 + "px)";
    pricePerMonthBasic.innerHTML = slider.value;
    pricePerMonthNinja.innerHTML = parseInt(slider.value) + 20;
    pricePerMonthPro.innerHTML = parseInt(slider.value) * 2 + 20;
    for (var i = 0; i < allThemChildren.length; i++) {
        allThemChildren[i].innerHTML = slider.value;
    }
}

updatePlans();

slider.oninput = function() {
    updatePlans();
}