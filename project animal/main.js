function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/6435s8JpK/',modelReady);
}


function modelReady(){
    classifier.classify(gotResults);
}
function gotResults (erro, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = math.floor(Math.ramdom() * 255) + 1;
        random_number_g = math.floor(Math.ramdom() * 255) + 1;
        random_number_b = math.floor(Math.ramdom() * 255) + 1;
    
        document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (result[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("+ramdom_number_r+","+ramdom_number_g+","+ramdom_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+ramdom_number_r+","+ramdom_number_g+","+ramdom_number_r+")";


        img = document.getElementById('aline1');
        img1 = document.getElementById('aline2');
        img2 = document.getElementById('aline3');
        img3 = document.getElementById('aline4');


        if (result[0].label == "Clap"){
            img.src = 'aliens-01.gif';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';
        } else if (result[0].label == "tapping") {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.gif';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';  
        } else if (result[0].label == "paper") {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.gif';
            img3.src = 'aliens-04.png';  
        }else{
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.gif'; 
        } 
    }
}