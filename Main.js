Peter_pan_theme="";
Hedwigs_theme="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    Peter_pan_theme = loadSound("Peter pan theme.mp3");
    Hedwigs_theme = loadSound("Hedwigs theme.mp3");
}

function draw(){
    image(video,0,0,600,530);
}