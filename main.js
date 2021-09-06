objects = [];
status = "";

function setup() {
    canvas = createCanvas(370, 370);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
  
   
  
  }

function START() {
    objectDetector = ml5.objectDetector("cocossd",modelloaded);
    var userInput = document.getElementById("nameofobject").value; 

}
  
  function draw() {
    image(video,0,0,370,370);
    if(status != "") {
      objectDetector.detect(video,gotresult);
      for(i = 0; i < objects.length; i++) {
            document.getElementById("showstatus").innerHTML = "Status : Object Detected";
            document.getElementById("sohwnumberofobjects").innerHTML = "Number Of Objects Detected Are :" + " " + objects.length;
            fill(r,g,b);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%" , objects[i].x + 15 , objects[i].y + 15 );
            noFill();
            stroke(r,g,b);
            rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
        }
    }
    
  }
  
  function modelloaded() {
    console.log("Model is loaded!@#$%^&*()");
    status = true;


  }
  
  function gotresult(error,results) {
    if(results) {
      console.log(results);
    }
  
    else{
      console.log(error);
    }
}