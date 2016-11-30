function veranderText(multiplier) {
    var element = document.getElementsByTagName("body")[0];
    var huidigeGrootte = element.style.fontSize || 1;

    element.style.fontSize = (parseFloat(huidigeGrootte) + (multiplier * 2)) + "px";




}