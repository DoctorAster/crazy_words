var alldiv = document.querySelectorAll("div");
var allparagr = document.querySelector("p");

alldiv.forEach((elem) => {
    elem.style.backgroundColor = randColor_div();
});

allparagr.forEach((elem) => {
    elem.style.color = randColor_p();
});

function randColor_div() {
    var r = Math.floor(Math.random() * (15)) + 25,
        g = Math.floor(Math.random() * (15)) + 25,
        b = Math.floor(Math.random() * (15)) + 25;
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

function randColor_p() {
    var r = Math.floor(Math.random() * (215)) + 25,
        g = Math.floor(Math.random() * (215)) + 25,
        b = Math.floor(Math.random() * (5)) + 5;
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}