var SpeechRecognition = window.webkitSpeechRecognition;
var myspeechrecognizer = new SpeechRecognition()

function start() {
    document.getElementById("textbox").innerHTML = "";
    myspeechrecognizer.start();
    myspeechrecognizer.onresult = function(whenrecognizergetsresult) {
        console.log(whenrecognizergetsresult);
        var myspeech = whenrecognizergetsresult.results[0][0].transcript;
        console.log(myspeech);
        document.getElementById("textbox").innerHTML = myspeech;
        if (myspeech == "take my selfie") {
            console.log("taking selfie");
            speak1();
        }
    }
}

function speak1() {
    var TEXTtoSPEECH = window.speechSynthesis;
    var myspokentext = "taking your selfie in 5 seconds"
    var myspeakerspeech = new SpeechSynthesisUtterance(myspokentext);
    TEXTtoSPEECH.speak(myspeakerspeech);
    Webcam.attach(camera);
    setTimeout(function() {
        clickpicture();
        savepicture();
    }, 5000);
}
var camera = document.getElementById("camera");
Webcam.set({
    width: 400,
    height: 300,
    image_format: "png",
    png_quality: 100
});

function clickpicture() {
    Webcam.snap(function(picturesource) {
        document.getElementById("selfie").innerHTML = '<img id="selfiepic" src="' + picturesource + '">';
    });

}

function savepicture() {
    var anchortag = document.getElementById("link");
    var clickedimage = documement.getElementById("selfiepic").src;
    anchortag.href = clickedimage;
    anchortag.click();

}