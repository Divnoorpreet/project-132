img = "";
status = "";

function navi(){
    window.location="index.html";
}

function preload(){
    img = loadImage("tv.jpg");
}

function setup(){
    canvas = createCanvas(500, 300);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting objects";
}

function modelLoaded(){
    console.log("Model Loaded");
    status = true;
    objectDetector.dectect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}