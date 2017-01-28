var xhr = new XMLHttpRequest();

xhr.open( "GET", "/images/bird.jpg", true ); xhr.responseType = "arraybuffer";

xhr.onload = function(/*e*/) {
	var blob = new Blob([xhr.response], {type: "image/png"}),
		url = URL.createObjectURL(blob),
		img = new Image();

	img.onload = function() {
		URL.revokeObjectURL(this.src);     // clean-up memory
		document.body.appendChild(this);   // adds image to DOM
	};

	img.src = url;
};
xhr.send();