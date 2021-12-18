/* Script codé par CHRZASZCZ Naulan */


/*
 * La page d'accueil
 */
let button0Illustration = document.getElementById("button0");
let button1Illustration = document.getElementById("button1");
let button2Illustration = document.getElementById("button2");

let illustrationSection = document.getElementById("illustration-UITpicture");
let scareButtonsIllustration = document.getElementById("allButtons");

let illustration0 = document.getElementById("illustration-UITpicture0");
let illustration1 = document.getElementById("illustration-UITpicture1");
let illustration2 = document.getElementById("illustration-UITpicture2");


let allButtons = [illustration0, illustration1, illustration2];
function addListenerButtonsIllustration(button, i)
{
    button.addEventListener("mouseover", (ev) => {
        illustrationSection.style.opacity = "0";

        for (let n = 0; n < allButtons.length; n++) {
            if (n === i)
                allButtons[i].style.opacity = "100%";
            else allButtons[n].style.opacity = "0";
        }
    })
}


addListenerButtonsIllustration(button0Illustration, 0);
addListenerButtonsIllustration(button1Illustration, 1);
addListenerButtonsIllustration(button2Illustration, 2);

scareButtonsIllustration.addEventListener("mouseleave", (ev) => {
    illustrationSection.style.opacity = "100%";

    for (let n = 0; n < allButtons.length; n++)
        allButtons[n].style.opacity = "0";
})


/*
 * Le "div" où il y a la météo
 * Un bout de code venant d'un site web, pas moi qui la fais :(
 */
window.weatherWidgetConfig =  window.weatherWidgetConfig || [];

window.weatherWidgetConfig.push({
    selector: "#weatherWidget",
    apiKey: "CNKJN5J8UUPMCGN6HVH4VMG9H",
    location: "Montreuil, FR",
    unitGroup: "metric",
    forecastDays: 5,
    title: "Montreuil, FR",
    showTitle: true,
    showConditions: true
});

(function() {
    var d = document, s = d.createElement('script');
    s.src = 'https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js';
    s.setAttribute('data-timestamp', + new Date());
    (d.head || d.body).appendChild(s);
})();

