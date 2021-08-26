///nothing#@$#@#%$%**&$%$#%%%^%///
//G##li#ch//
//GASTERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR##########//
function setup() {
  video=createCapture(VIDEO);
  video.size(300,300);

  canvas=createCanvas(550,550);
  canvas.position(560,160);

  poseNet=ml5.poseNet(video,modelMan);
  poseNet.on('pose',gotPoses);
}

function draw() {
  background ("#969A97");
}

function modelMan(){
  console.log("(you know what i will say)");
}

function gotPoses(results) {
  if (results.length>0) {
    console.log(results);
  }
}




