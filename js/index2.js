var i;
var logger = function() {
	console.log('Hi');
	alert("Hellooo World");
};
for(i=0; i<5; i++) {
	//logger();
};
var loggerBonzo = (function() {
	var kolesie = ['many', 'penny', 'johnny', 'fonny'];

	return function (n) {
		return kolesie[n];
	};
}());

var loggerBonzoExtra = (function() {
	var kolesie;
	return function (n) {
		if(!names) {
			kolesie = ['many', 'penny', 'johnny', 'fonny'];
		};
		return kolesie[n];
	};
}());

// alert(loggerBonzo(2));  

// LAZY

var digit_name = function (n) {
	var names = ['zero', 'one', 'two'];

	digit_name = function (n) {
		return names[n];
	}
	return digit_name(n);
};
// alert(digit_name(2));

function fade(id) {
	var dom = document.getElementById(id),
		level = 1;
	function step() {
		var h = level.toString(16);
		dom.style.backgroundColor =
			'#FFFF' + h + h;
		if (level < 15) {
			level += 1;
			setTimeout(step, 100);
		}
	}
	setTimeout(step, 100);
}
fade('znikacz');
