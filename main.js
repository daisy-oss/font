nosex=0;
nosey=0;
difference=0;
leftWristx=0;
rightWristx=0;
function setup() {
    canvas=createCanvas(600,552);
    canvas.position(600,150);
    video=createCapture(VIDEO);
    video.size(550,500);
    poseNet=ml5.poseNet(video,modelLoded);
    poseNet.on("pose",gotPoses);
}

function draw(){
    background("#ddb892");
    document.getElementById("sq_size").innerHTML=difference+"px"
    textsize(difference)
    fill("#606c38");
    text("Rachel",50,400)
}

function modelLoded(){
console.log("WORKING!")
}

function gotPoses(results){
    if(results.length>0){
    console.log(results);
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
    console.log("nosex= "+nosex+"nosey= "+nosey)

    leftWristx=results[0].pose.leftWrist.x;
    rightWristx=results[0].pose.rightWrist.x;
    difference=floor(leftWristx-rightWristx);
    
}
}