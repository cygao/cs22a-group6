2/*global math: false, calc: false, console: false*/
/*jslint browser: true*/
// CS22A: A Basic Calculator Part 3 - calcu() function with if-else
// Cameron Gao, Will Wang

var calcu = function (calcValue) {
	if (calcValue) {
		// calcValue wasn't null or undefined'

		// Add missing code here
        // Handle ints
		if (calcValue == "1") {
            calc.output.value += '1';
        } else if (calcValue == "2") {
            calc.output.value += '2';
        } else if (calcValue == "3") {
             calc.output.value += '3';
        } else if (calcValue == "4") {
             calc.output.value += '4';
        } else if (calcValue == "5") {
             calc.output.value += '5';
        } else if (calcValue == "6") {
             calc.output.value += '6';
        } else if (calcValue == "7") {
             calc.output.value += '7';
        } else if (calcValue == "8") {
             calc.output.value += '8';
        } else if (calcValue == "9") {
             calc.output.value += '9';
            
        // Handle arith operators
        } else if (calcValue == "+") {
             calc.output.value += ' + ';
        } else if (calcValue == "-") {
             calc.output.value += ' - ';
        } else if (calcValue == "*") {
             calc.output.value += ' * ';
        } else if (calcValue == "/") {
             calc.output.value += ' / ';
            
        // Handle special cases
        } else if (calcValue == "equate") {
            calc.output.value = math.eval(calc.output.value);
        } else if (calcValue == "c") {
             calc.output.value = '';
        // Handles weirdness
        } else {
            calc.output.value += '';
        }
	}
};

// Bind onclick events below here and don't use window.onload.
// Usually using window.onload is a good idea,
// but that prevents the Jasmine test suite from loading and since the
// script tag for ifelse.js is near the bottom of the
// ABasicCalculator-switch.html page and there are no big images to
// slow the loading of the HTML elements down it will all work OK without that.

// create array with all the input buttons
var inputs = document.getElementsByTagName("input"); 

// shamelessly stolen/"borrowed" from the example
for (i = 0; i < inputs.length; i++) {
    if (inputs[i].type === "button") { // specified but redundant since in this case all inputs are buttons
        inputs[i].onclick = function (event){
            // actual logic to create
            calcu(this.id);
        }
    }
};
