status="";
function preload(){

}
function start(){
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "Status :- Detecting objects";
  }
  
function setup(){
  canvas=createCanvas(480,380);
  canvas.center(); 
  video= createCapture(VIDEO);
 video.size(480,380);
 video.hide();
}
function draw(){
  image(video, 0,0,480,380); 
}
function start(){
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML= "Status:- Detecting Objects";
    document.getElementById('input').value;
}
function modelLoaded(){
    console.log('Model is Loaded- Devyansh');
    status= true;
}