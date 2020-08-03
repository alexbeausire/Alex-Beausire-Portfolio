console.log("Hello")
var baseUrl = "/BCA/";
var pictureIndex = 0;
var pictures = [];
var backgroundImage = new Array();
backgroundImage[0] = "BCA/BCAhomepage.png";
backgroundImage[1] = "BCA/windsorcastle.png";
backgroundImage[2] = "BCA/Parliament.png";
backgroundImage[3] = "BCA/bcalogo2.png";


function displayBCA() {
    document.write("<div class='projectpage'><img src=" + backgroundImage[backgroundImage.length - 1] + "></div>")
    for (i=backgroundImage.length - 2; i>=0;i--) {
        document.write("<div class='projectpage'><img src=" + backgroundImage[i] + "></div>");
    };
};