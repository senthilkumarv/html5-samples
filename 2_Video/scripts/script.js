var video = document.getElementById('sampleVideo');
var button = document.getElementById('btnPlay');

playClicked = function(event) {
	console.log('hi');
	if(button.value == 'Play'){
		button.value = 'Pause';
		video.play();
	}
	else {
		button.value = 'Play';
		video.pause();
	}
};

videoEnded = function(event) {
	button.value = 'Play';
};

button.onclick = playClicked;
video.addEventListener('ended', videoEnded, false);