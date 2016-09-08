var oldusd;
var oldkey;
var oldqsk;

window.onLoad = function() {
	document.getElementById('usd1').value;
	updateOlds();
};

function update1() {
	var usd = document.getElementById('usd1');
	var key = document.getElementById('key1');
	var qsk = document.getElementById('qsk1');
	if (usd.value !== oldusd) {
		key.value = toDecimalPlaces(usd.value / 2.5, 1);
		qsk.value = toDecimalPlaces(key.value * 0.8, 1);
		updateOlds();
	} else if (key.value !== oldkey) {
		usd.value = toDecimalPlaces(key.value * 2.5, 2);
		qsk.value = toDecimalPlaces(key.value * 0.8, 1);
		updateOlds();
	} else if (qsk.value !== oldqsk) {
		key.value = toDecimalPlaces(qsk.value / 0.8, 1);
		usd.value = toDecimalPlaces(key.value * 2.5, 2);
		updateOlds();
	}
	usd.style.width = ((usd.value.length + 1) * 8) + 'px';
	key.style.width = ((key.value.length + 1) * 8) + 'px';
	qsk.style.width = ((qsk.value.length + 1) * 8) + 'px';
}

function updateOlds() {
	oldusd = document.getElementById('usd1').value;
	oldkey = document.getElementById('key1').value;
	oldqsk = document.getElementById('qsk1').value;
}

function toDecimalPlaces(val, decimal) {
	return Math.floor(val * Math.pow(10, decimal) + 0.5) / Math.pow(10, decimal);
}

window.setInterval(() => {
	update1();
}, 20);