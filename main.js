song="";
function preload(){
	song= loadSound("song1.mp3");
}

function setup(){
	canvas = createCanvas(600,500);
	canvas.center();

	video=createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose,gotPoses');
}

function modelLoaded(){
	console.log('PoseNet ha iniciado');
}

function gotPoses(results){
	if(results.length>0){
		console.log(results);
	}
}

function draw(){
	image(video,0,0,600,500);
}

function Play(){
	song.play();
	song.setVolume(1);
	song.rate(1);
}