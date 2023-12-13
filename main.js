Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach(' #camera ');

function take_snapshot() {
    Webcam.snap(function (data_uri) {

            document.getElementById("result").innerHTML = '<img id = "captured_image" src ="' + data_uri + '"/>';

        });

}
console.log('ml5 version' , ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/XIzcQ_3H-/model.json',modelLoaded);

function modelLoaded()
{
    console.log("model_Loaded");
}
