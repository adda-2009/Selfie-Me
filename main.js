var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start()
{
document.getElementById("textbox").innerHTML="";
recognition.start();
}
recognition.onresult = function run(event)
{
console.log(event);
var Content = event.results[0][0].transcript;
console.log(Content);
if (Content=="take my selfie")
{
console.log("taking selfie ---");
speak();
}
document.getElementById("textbox").innerHTML=Content;
}

function speak()
{
var synth = window.speechSynthesis ;
speak_data = "taking your selfie in 5 seconds";
var utterThis = new SpeechSynthesisUtterance (speak_data) ;
synth.speak(utterThis);
Webcam.attach(camera);
setTimeout(function()
{
takesnapshot();
save();
},3000);
}
camera = document.getElementById("camera");
Webcam.set({
width:360 ,
height:250 ,
image_format:'png',
png_quality:90
});

function takesnapshot()
{
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML= '<img id="selfieimage" src="'+data_uri+'">';
});
}
function save()
{
link=document.getElementById("link");
image=document.getElementById("selfieimage").src;
link.href=image;
link.click();
}