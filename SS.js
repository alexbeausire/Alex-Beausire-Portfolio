console.log("Hello")
var baseUrl = "/images/";
var pictureIndex = 0;
var pictures = [];
var backgroundImage = new Array();
backgroundImage[0] = "SS/SummerBlockPartyE1SquareArtboard1.png"
backgroundImage[1] = "SS/Dates-SquareArtboard1.png";
backgroundImage[2] = "SS/MothClubPortraitPosterArtboard.png";
backgroundImage[3] = "SS/SSGIF2.gif";
backgroundImage[4] = "SS/SSGIF.gif";
backgroundImage[5] = "SS/OpeningParty1202Artboard.png";
backgroundImage[6] = "SS/Off-Week-SquareArtboard-1.png";


function displaySS() {
    for (i=backgroundImage.length - 1; i>=0;i--) {
        document.write("<div class='projectpage'><img src=" + backgroundImage[i] + "></div>");
    };
};