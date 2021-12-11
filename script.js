
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
