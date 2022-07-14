var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";

}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    speak();
}
function speak(){
    var synth= window.speechSynthesis;
    speak_data = document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");

function take_snapshot()
{
console.log(img_id);
Webcam.snap (function(data_uri) {
if(img_id=="selfiel"){
document.getElementById("result1").innerHTML = '<img id="selfiel" src="'+data_uri+'"/>';
}
if(img_id="selfie2"){
document.getElementById("result2").innerHTML = <img id="selfie2" src="'+data_uri+'"/>;
}
if(img_id=="selfie3"){
document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
}
});
}

setTimeout(function()
{
img_id="selfie1";
take_snapshot();
speak_data = "Taking your next Selfie in 10 seconds";
var utterThis = new SpeechSynthesisUtterance (speak_data);
synth.speak(utterThis);
}, 5000);

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_img").src;
    link.href = image;
    link.click();
}