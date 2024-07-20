let inputs = document.querySelectorAll("input");
let labels = document.querySelectorAll("label");
let switcher = document.getElementById("switch");
let convert = document.getElementById("convert");

switcher.addEventListener("click", function () {
    if (labels[0].innerHTML == "Celsius") {
        labels[0].innerHTML = "Fahrenheit";
        inputs[0].placeholder = "Enter Temperature in Fahrenheit";
        labels[1].innerHTML = "Celsius";
        inputs[1].placeholder = "Temperature in Celsius";
    } else if (labels[0].innerHTML == "Fahrenheit") {
        labels[0].innerHTML = "Celsius";
        inputs[0].placeholder = "Enter Temperature in Celsius";
        labels[1].innerHTML = "Fahrenheit";
        inputs[1].placeholder = "Temperature in Fahrenheit";
    }
});

convert.addEventListener("click", function () {
    if (labels[0].innerHTML == "Celsius") {
        let celsius = inputs[0].value;
        let fahrenheit = (celsius * 9) / 5 + 32;
        inputs[1].value = fahrenheit.toFixed(2);
    } else if (labels[0].innerHTML == "Fahrenheit") {
        let fahrenheit = inputs[0].value;
        let celsius = ((fahrenheit - 32) * 5) / 9;
        inputs[1].value = celsius.toFixed(2);
    }
});
