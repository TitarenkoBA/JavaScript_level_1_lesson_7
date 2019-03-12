var doc = document;
var h = 0;
var m = 0;
var s = 0;
var h1;
var m1;
var s1;


// timer

var timer = function () {
		
	if (s > 58) {
		if (m > 58) {
			if (h > 22) {
				window.location.reload ();
			}
			h++;
			m = 0;
			if (h < 10) h = '0' + h;
		}
		m++;
		if (m < 10) m = '0' + m;
		s = 0;
	}
	else s++;
	if (s < 10) s = '0' + s;

	let time = h + ":" + m +":" + s;
	doc.getElementById ('my_timer').innerText = time;

	setTimeout (timer, 1000);
	
};

timer ();



// time

var time = function () {
	
	var date = new Date ();

	h1 = date.getHours ();
	m1 = date.getMinutes ();
	s1 = date.getSeconds ();

	if (h1 < 10) h1 = '0' + h1;
	if (m1 < 10) m1 = '0' + m1;
	if (s1 < 10) s1 = '0' + s1;

	let time1 = h1 + ":" + m1 +":" + s1;
	doc.getElementById ('my_time').innerText = time1;
	setTimeout (time, 1000);
	
};

time ();