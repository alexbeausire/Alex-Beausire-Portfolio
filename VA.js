console.log("Hello")
var baseUrl = "/VA/";
var pictureIndex = 0;
var pictures = [];
var backgroundImage = new Array();
backgroundImage[0] = "VA/VA-front.png";
backgroundImage[1] = "VA/VA-Front-On.png";
backgroundImage[2] = "VA/CardsArtboard3.png";
backgroundImage[3] = "VA/vaccArtboard.png";

function displayVA() {
    for (i=backgroundImage.length - 1; i>=0;i--) {
        document.write("<div class='projectpage'><img src=" + backgroundImage[i] + "></div>");
    };
};