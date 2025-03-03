document.getElementById("submitButton").onclick = function() {
    let temp;
    let input = document.getElementById("textBox");

    if(document.getElementById("celsiusBtn").checked) {
        temp = input.value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°C";
    } else if(document.getElementById("fahrenheitBtn").checked) {
        temp = input.value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°F";
    } else {
        document.getElementById("tempLabel").innerHTML = "Please select a unit";
    }

    // Clear the input field
    input.value = '';
}

let temp = 32;
temp = toFahrenheit(temp);
console.log(temp);

function toCelsius(temp) {
    return (temp - 32) * 5 / 9;
}

function toFahrenheit(temp) {
    return (temp * 9 / 5) + 32;
}
