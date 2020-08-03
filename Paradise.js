console.log("Hello")
var baseUrl = "/images/";
var pictureIndex = 0;
var pictures = [];
var backgroundImage = new Array();
backgroundImage[0] = "Paradise/We-are-fstvl-2-square.jpg";
backgroundImage[1] = "Paradise/we-are-fsvtl-4-square_2.jpg";
backgroundImage[2] = "Paradise/template.png";
backgroundImage[3] = "Paradise/Paradise-We-are-fstvl-1-Banner.jpg";
backgroundImage[4] = "Paradise/Insta-story-mockup.png";
backgroundImage[5] = "Paradise/We-are-fstvl-1-square.jpg";


function displayParadise() {
    for (i=backgroundImage.length - 1; i>=0;i--) {
        document.write("<div class='projectpage'><img src=" + backgroundImage[i] + "></div>");
    };
};