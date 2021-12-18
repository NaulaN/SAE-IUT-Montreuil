/* Script codé par CHRZASZCZ Naulan */


let presentationOfUITOfMontreuilSection = document.getElementById("presentation-of-UIT-div");
let digitalFingerprintSection = document.getElementById("digital-fingerprint-div");


function showPresentationOfUit() {
    presentationOfUITOfMontreuilSection.style.display = "inherit";
    digitalFingerprintSection.style.display = "none";
}

function showdigitalFingerPrint() {
    presentationOfUITOfMontreuilSection.style.display = "none";
    digitalFingerprintSection.style.display = "inherit";
}


document.getElementById("little-nav-button-0").onclick = function() {showPresentationOfUit()};
document.getElementById("sommaire-part-presentation-of-UIT").onclick = function() {showPresentationOfUit()};
document.getElementById("little-nav-button-1").onclick = function() {showdigitalFingerPrint()};
document.getElementById("sommaire-part-digitalFingerprint").onclick = function() {showdigitalFingerPrint()};

