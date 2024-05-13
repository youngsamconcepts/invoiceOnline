// Function - Calculate the max of an input
function inputMax(input, output, max, value) {
	for (let i = 1; i <= max; i++) {
		value = i - input.value.length;
		output.innerHTML = value;
	}
	// Alert the user if input value's length reaches max
	if (input.value.length === max) output.innerHTML = 'Max';
};

// Telephone Max
function telMax() {
	const inputElement = document.querySelector('#tel');
	const outputElement = document.querySelector('#tel-output');
	let max = inputElement.maxLength;	
	inputMax(inputElement, outputElement, max);
};

// Password Max
function descMax() {
	const inputElement = document.querySelector('#desc');
	const outputElement = document.querySelector('#desc-output');
	let max = inputElement.maxLength;
	inputMax(inputElement, outputElement, max);
};