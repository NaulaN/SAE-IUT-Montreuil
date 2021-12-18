/* Script codé par CHRZASZCZ Naulan */


let presentationOfUITOfMontreuilSection = document.getElementById("presentation-of-UIT-div");
let digitalFingerprintSection = document.getElementById("digital-fingerprint-div");

let littleNavButton0 = document.getElementById("little-nav-button-0");
let littleNavButton1 = document.getElementById("little-nav-button-1");


function showPresentationOfUit(ev) {
    presentationOfUITOfMontreuilSection.style.display = "inherit";
    littleNavButton0.style.backgroundColor = "#fba292";
    littleNavButton0.style.border = "solid 5px #fba292";
    digitalFingerprintSection.style.display = "none";
    littleNavButton1.style.backgroundColor = "#4e5a65";
    littleNavButton1.style.border = "solid 5px #4e5a65";
}

function showdigitalFingerPrint(ev) {
    presentationOfUITOfMontreuilSection.style.display = "none";
    littleNavButton0.style.backgroundColor = "#4e5a65";
    littleNavButton0.style.border = "solid 5px #4e5a65";
    digitalFingerprintSection.style.display = "inherit";
    littleNavButton1.style.backgroundColor = "#fba292";
    littleNavButton1.style.border = "solid 5px #fba292";
}


littleNavButton0.onclick = function(ev) {showPresentationOfUit(ev)};
document.getElementById("sommaire-part-presentation-of-UIT").onclick = function() {showPresentationOfUit()};
littleNavButton1.onclick = function(ev) {showdigitalFingerPrint(ev)};
document.getElementById("sommaire-part-digitalFingerprint").onclick = function() {showdigitalFingerPrint()};

