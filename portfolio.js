console.log("Hello")
var baseUrl = "/images/";
var pictureIndex = 0;
var pictures = [];
var backgroundImage = new Array();
backgroundImage[0] = "images/image1.png";
backgroundImage[1] = "images/image2.png";
backgroundImage[2] = "images/image3.png";
backgroundImage[3] = "images/image4.jpg";

function displayAllImages() {
    document.write("<div class='imglist col-xs-offset-4'><img src=" + backgroundImage[backgroundImage.length - 1] + "></div>")
    for (i=backgroundImage.length - 2; i>=0;i--) {
        document.write("<div class='imglist'><img src=" + backgroundImage[i] + "></div>");
    };
};
