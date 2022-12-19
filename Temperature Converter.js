
function myFunction() {
const inputTemperature = document.getElementById("inputtemperature");
const inputOptions = document.getElementById("inputoptions");
const outputOptions = document.getElementById("outputoptions");
const innerText = document.getElementById("innertext");
if (inputOptions.options[inputOptions.selectedIndex].text=="Celsius" && outputOptions.options[outputOptions.selectedIndex].text == "Celsius") {
    innerText.innerHTML = inputTemperature.value
} else if (inputOptions.options[inputOptions.selectedIndex].text=="Celsius" && outputOptions.options[outputOptions.selectedIndex].text == "Fahrenheit") {
    innerText.innerHTML = (inputTemperature.value * 9/5) + 32;
} else if (inputOptions.options[inputOptions.selectedIndex].text=="Celsius" && outputOptions.options[outputOptions.selectedIndex].text == "Kelvin") {
    innerText.innerHTML = (inputTemperature.value * 1) +273.15;
} else if (inputOptions.options[inputOptions.selectedIndex].text=="Kelvin" && outputOptions.options[outputOptions.selectedIndex].text == "Kelvin") {
    innerText.innerHTML = inputTemperature.value;
} else if (inputOptions.options[inputOptions.selectedIndex].text=="Kelvin" && outputOptions.options[outputOptions.selectedIndex].text == "Celsius") {
    innerText.innerHTML = (inputTemperature.value * 1) - 273.15;
} else if (inputOptions.options[inputOptions.selectedIndex].text=="Kelvin" && outputOptions.options[outputOptions.selectedIndex].text == "Fahrenheit") {
    innerText.innerHTML = ((inputTemperature.value - 273.15) * 9/5) + 32;
} else if (inputOptions.options[inputOptions.selectedIndex].text=="Fahrenheit" && outputOptions.options[outputOptions.selectedIndex].text == "Fahrenheit") {
    innerText.innerHTML = (inputTemperature.value * 1);
}  else if (inputOptions.options[inputOptions.selectedIndex].text=="Fahrenheit" && outputOptions.options[outputOptions.selectedIndex].text == "Celsius") {
    innerText.innerHTML = 5/9 * (inputTemperature.value-32);
} else if (inputOptions.options[inputOptions.selectedIndex].text=="Fahrenheit" && outputOptions.options[outputOptions.selectedIndex].text == "Kelvin") {
    innerText.innerHTML =  (inputTemperature.value + 459.67) * 5/9;
}
}