var limit;
var foundPrimes = [];

function primeBelowLimit(upperLimit) {
	for (i=1; i<=upperLimit; i++) {
		var m;
		var n;
		for (j=1; j<=i; j++) {
			if (j != 1 && j != i) {
				m=i/j;
				n=m-Math.floor(m);
				if (n == 0) {
					break;
				}
			}
		}
		if (n == 0) {
			continue;
		} else {
			foundPrimes.push(i);
		}
	}
}

function printArray(arrayToPrint) {
	document.getElementById("output").innerHTML = "";
	for (i=1; i<arrayToPrint.length; i++) {
		document.getElementById("output").innerHTML += "<p>"+arrayToPrint[i]+"</p>";
	}
}

function outputPrimes(e) {
	e.preventDefault();
	limit = document.getElementById("limit").value;
	primeBelowLimit(limit);
	printArray(foundPrimes);
	foundPrimes=[];
}

window.onload = function() {
	var primeLimitForm = document.getElementById("prime-limit-form");
	primeLimitForm.addEventListener("submit", outputPrimes);
};
