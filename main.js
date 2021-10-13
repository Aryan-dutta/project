function preload() {
}

function setup() {
	createCanvas(650, 400);
	video = createCapture(VIDEO);
	video.size(600, 300);

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log('Model Loaded!');
}

function gotPoses(results) {
	if (results.length > 0) {
		console.log(results);
	}
}

function draw() {
	background("#D3D3D3");

}


