console.log("Hello")
var baseUrl = "/VA/";
var pictureIndex = 0;
var pictures = [];
var backgroundImage = new Array();
backgroundImage[0] = "8years/InstaWhiteShirtLong.jpeg";
backgroundImage[1] = "8years/8bdayShirt.png";
backgroundImage[2] = "8years/8yearsshirt.jpeg";

function display8years() {
    for (i=backgroundImage.length - 1; i>=0;i--) {
        document.write("<div class='projectpage'><img src=" + backgroundImage[i] + "></div>");
    };
};