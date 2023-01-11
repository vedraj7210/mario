noseX=""
noseY=""
function preload() {
	world_start = loadSound("world_start.wav");
	jump= loadSound("jump.wav");
	coin_play=loadSound("coin.wav");
	gameover_play= loadSound("gameover.wav");
	kick_play= loadSound("kick.wav");
	die_play= loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');
	instializeInSetup(mario);

	poseNet=ml5.poseNet(video,modelLoaded);
	poseNet.on("pose",gotPoses);
}
function modelLoaded(){
	console.log("Model Loaded!");
} function gotPoses(results){
	if(results.length>0){
    noseX=results[0].pose.nose.x;
	noseY=results[0].pose.nose.y;
	
	}
}

function draw() {
	game()
}






