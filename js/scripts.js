/* scipt to highlight link on map area hover */

var aberdeen = document.getElementById("aberdeen");
var dundee = document.getElementById("dundee");
var edinburgh = document.getElementById("edinburgh");
var glasgow = document.getElementById("glasgow");

aberdeen.addEventListener("mouseenter", function() {
	document.getElementById("AberdeenLink").className = "active";
	aberdeen.addEventListener("mouseleave", function() {
		document.getElementById("AberdeenLink").className = " ";
	});
});

dundee.addEventListener("mouseenter", function() {
	document.getElementById("DundeeLink").className = "active";
	dundee.addEventListener("mouseleave", function() {
		document.getElementById("DundeeLink").className = " ";
	});
});

edinburgh.addEventListener("mouseenter", function() {
	document.getElementById("EdinburghLink").className = "active";
	edinburgh.addEventListener("mouseleave", function() {
		document.getElementById("EdinburghLink").className = " ";
	});
});

glasgow.addEventListener("mouseenter", function() {
	document.getElementById("GlasgowLink").className = "active";
	glasgow.addEventListener("mouseleave", function() {
		document.getElementById("GlasgowLink").className = " ";
	});
});