difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,450);
    
    canvas = createCanvas(550,450);
    canvas.position(560,150);
    
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
    }
    
    function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
    rightwristX = results[0].pose.rightWrist.y;
    difference = floor(leftwristX - rightwristX);   
    console.log("leftWristX = "+leftwristX+"rightwristX="+rightwristX+"Difference = "+difference);
    }
    }
    
    function modelLoaded(){
        console.log('posenet is initialised');
    }
    
    function draw(){
    background('#969A67');
    textSize(difference);
    fill('#FFFFF');
    text("Devansh",100,50);
    document.getElementById("font_size").innerHTML = "font_size will be ="+difference+"px"
    }
