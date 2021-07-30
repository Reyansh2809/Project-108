Prediction1 = "";
Prediction2 = "";
Webcam.set({
width: 350,
height: 300,
image_format:'png',
png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot()
{
Webcam.snap(function(data_uri)
{
document.getElementById("result").innerHTML = '<img id="captured_image" src="'+ data_uri + '">';
});   
}
console.log("ml5 version:", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/gBpFngCrT/model.json", modelLoaded);
function modelLoaded()
{
console.log("model is Loaded");    
}
function speak()
{
var synth = window.speechSynthesis;
speak_data_1 = "The first prediction is " + Prediction1;
speak_data_2 = "The second prediction is" + Prediction2;
var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
synth.speak(utterThis);      
}
function check()
{
img = document.getElementById("captured_image");
classifier.classify(img , gotResult);    
}
function gotResult(error , results){
if (error) {
console.error(error);    
}else{
console.log(results);
document.getElementById("result_hand_gesture_name").innerHTML = results[0].label;
document.getElementById("result_hand_gesture_name2").innerHTML = results[1].label;
Prediction1 = results[0].label;
Prediction2 = results[1].label;
speak();
if (results[0].label == "What a amazign victory you had . Special right ? ") 
{
document.getElementById("update_hand_gesture").innerHTML = "&#9996;";    
}
if (results[0].label == "Oh good job for the hard work") 
{
document.getElementById("update_hand_gesture").innerHTML = "&#128077;";    
}
if (results[0].label == "Hey guys will you call me ? ") 
{
document.getElementById("update_hand_gesture").innerHTML = "&#129305;";    
}
if (results[0].label == "Hey give me a high five") 
{
document.getElementById("update_hand_gesture").innerHTML = "&#9995;";    
}
if (results[1].label == "What a amazign victory you had . Special right ? ") 
{
document.getElementById("update_hand_gesture2").innerHTML = "&#9996;";    
}
if (results[1].label == "Oh good job for the hard work") 
{
document.getElementById("update_hand_gesture2").innerHTML = "&#128077;";    
}
if (results[1].label == "Hey guys will you call me ? ") 
{
document.getElementById("update_hand_gesture2").innerHTML = "&#129305;";    
}
if (results[1].label == "Hey give me a high five") 
{
document.getElementById("update_hand_gesture2").innerHTML = "&#9995;";    
}
}
}
