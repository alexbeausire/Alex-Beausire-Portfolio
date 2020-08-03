
console.log("Hello")
var baseUrl = "/ES/";
var pictureIndex = 0;
var pictures = [];
var backgroundImage = new Array();
backgroundImage[0] = "ES/NYT-Bushwick.png";
backgroundImage[1] = "ES/houseshreArtboard1.png";
backgroundImage[2] = "ES/Browser_window.png";
backgroundImage[3] = "ES/music-for-portfolio.png";

function displayEditorialIllustrations() {
    document.write("<div class='projectpage'><img src=" + backgroundImage[backgroundImage.length - 1] + "></div>")
    for (i=backgroundImage.length - 2; i>=0;i--) {
        document.write("<div class='projectpage'><img src=" + backgroundImage[i] + "></div>");
    };
};