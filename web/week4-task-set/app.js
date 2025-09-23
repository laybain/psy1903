/*

function celsiusToFahrenheit(temperature) {
    return (temperature * 1.8) + 32;
}

console.log(celsiusToFahrenheit(10)); // Expected output: 50
console.log(celsiusToFahrenheit(-5)); // Expected output: 23
*/

//function c-->f f-->c
function convertTemp(temperature, convertTo) {

    //conditional determining whether given temp is in c or f

    //if c then (°C * 1.8) + 32 = °F
    if (convertTo == 'c') {
        return ((temperature - 32) / 1.8)
    }
    //if f then (°F - 32) / 1.8 = °C
    else {
        return (temperature * 1.8) + 32;
    }

}

console.log(convertTemp(10, 'c')); // Expected output: -12.222222222222221
console.log(convertTemp(10, 'f')); // Expected output: 50