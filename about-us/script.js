/* Script codé par CHRZASZCZ Naulan */


let littleNavButton0 = document.getElementById("little-nav-button-0");
let littleNavButton1 = document.getElementById("little-nav-button-1");

let presentationOfUITOfMontreuilSection = document.getElementById("presentation-of-UIT-div");
let digitalFingerprintSection = document.getElementById("digital-fingerprint-div");


littleNavButton0.addEventListener("click", (ev) => {
    presentationOfUITOfMontreuilSection.style.display = "inherit";
    digitalFingerprintSection.style.display = "none";
});

littleNavButton1.addEventListener("click", (ev) => {
    presentationOfUITOfMontreuilSection.style.display = "none";
    digitalFingerprintSection.style.display = "inherit";
});

