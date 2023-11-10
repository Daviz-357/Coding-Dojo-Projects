function select(element){
    alert('Selecciono: '+ element.textContent);
}

function aceptarCookies() {
      document.getElementById('cookie-message').remove();
    }

window.onload = function() {
    document.getElementById('cookie-message');
};

var rangosClima = {
    Soleado: { maxTemp: [20, 40], minTemp: [5, 20], icon: "../assets/some_sun.png" },
    Nublado: { maxTemp: [15, 35], minTemp: [5, 20], icon: "../assets/some_clouds.png" },
    Lluvia: { maxTemp: [10, 30], minTemp: [5, 20], icon: "../assets/some_rain.png" },
    Nieve: { maxTemp: [-10, 5], minTemp: [-20, -5], icon: "../assets/some_snow.jpg" },
    TormentaElectrica: { maxTemp: [15, 35], minTemp: [5, 20], icon: "../assets/thunderstorm.png" }
};

// Almacena las temperaturas originales en Celsius
var temperaturasOriginales = [];

function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function convertirCelsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function actualizarInformacionTiempo(day) {
    var tiposClima = Object.keys(rangosClima);
    var climaAleatorio = tiposClima[Math.floor(Math.random() * tiposClima.length)];

    var maxTempCelsius = generarNumeroAleatorio(rangosClima[climaAleatorio].maxTemp[0], rangosClima[climaAleatorio].maxTemp[1]);
    var minTempCelsius = generarNumeroAleatorio(rangosClima[climaAleatorio].minTemp[0], rangosClima[climaAleatorio].minTemp[1]);

    // Almacena las temperaturas originales
    temperaturasOriginales.push({ maxTemp: maxTempCelsius, minTemp: minTempCelsius });

    // Mostrar temperaturas en Celsius por defecto
    day.querySelector('.max').textContent = maxTempCelsius.toFixed(2) + "°C";
    day.querySelector('.min').textContent = minTempCelsius.toFixed(2) + "°C";

    day.querySelector('.weather-icon').src = rangosClima[climaAleatorio].icon;
    day.querySelector('p').textContent = climaAleatorio;
}

function select_type() {
    var days = document.querySelectorAll('.day');
    var typeSelect = document.getElementById('type');

    days.forEach(function(day, index) {
        var maxTempCelsius = parseFloat(day.querySelector('.max').textContent);
        var minTempCelsius = parseFloat(day.querySelector('.min').textContent);

        if (!isNaN(maxTempCelsius) && !isNaN(minTempCelsius)) {
            if (typeSelect.value === 'fahrenheit') {
                var maxTempFahrenheit = convertirCelsiusAFahrenheit(maxTempCelsius);
                var minTempFahrenheit = convertirCelsiusAFahrenheit(minTempCelsius);

                day.querySelector('.max').textContent = maxTempFahrenheit.toFixed(2) + "°F";
                day.querySelector('.min').textContent = minTempFahrenheit.toFixed(2) + "°F";
            } else {
                // Restaurar a las temperaturas originales
                day.querySelector('.max').textContent = temperaturasOriginales[index].maxTemp.toFixed(2) + "°C";
                day.querySelector('.min').textContent = temperaturasOriginales[index].minTemp.toFixed(2) + "°C";
            }
        }
    });
}

// Obtener todas las instancias de la clase "day"
var days = document.querySelectorAll('.day');

// Iterar sobre cada instancia y actualizar la información del tiempo
days.forEach(function(day) {
    actualizarInformacionTiempo(day);
});
