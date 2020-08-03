console.log("Hello")
var baseUrl = "/project/";
var pictureIndex = 0;
var pictures = [];
var backgroundImage = new Array();
backgroundImage[0] = "projects/krish@3x_2x.jpg";
backgroundImage[1] = "projects/BillySims.png";
backgroundImage[2] = "projects/wwfm.png";
backgroundImage[3] = "projects/logoArtboard.png";
backgroundImage[4] = "projects/Willow02.png";
backgroundImage[5] = "projects/midland-gif-frame.png";
backgroundImage[6] = "projects/Voodoorays-02.jpg";
backgroundImage[7] = "projects/027.png";
backgroundImage[8] = "projects/8yearsshirt.jpeg";
backgroundImage[9] = "projects/We-are-fstvl-1-square.jpg";
backgroundImage[10] = "projects/vaccArtboard.png";
backgroundImage[11] = "projects/bcalogo2.png";
backgroundImage[12] = "projects/IllustrationArtboard.png";
backgroundImage[13] = "projects/Off-Week-SquareArtboard-1.png";


console.log("Hello")
var titleIndex = 0;
var title = [];
var projectTitle = new Array();
projectTitle[0] = "The Heat Death <p></p> of Hip-hop Vol.1";
projectTitle[1] = "Our House <p></p> Residents Special";
projectTitle[2] = "Worldwide FM: <p></p> Global Roots";
projectTitle[3] = "Good Measure";
projectTitle[4] = "Billy Low";
projectTitle[5] = "Our House <p></p> 5th Birthday";
projectTitle[6] = "Voodoo Rays: <p></p> Golazzo";
projectTitle[7] = "Secretsundaze <p></p> Record Label";
projectTitle[8] = "8 Years of Our House";
projectTitle[9] = "Paradise <p></p> @ WE ARE FSTVL";
projectTitle[10] = "Vauxhaull Arches";
projectTitle[11] = "BCA School of English";
projectTitle[12] = "Editorial Illustrations";
projectTitle[13] = "Secretsundaze SS20";

console.log("Hello")
var linkIndex = 0;
var link = [];
var projectLink = new Array();
projectLink[0] = "heatdeath.html";
projectLink[1] = "residents-special.html";
projectLink[2] = "WWFM.html";
projectLink[3] = "goodemeasure.html";
projectLink[4] = "BillyLow.html";
projectLink[5] = "5thbday.html";
projectLink[6] = "voodoorays.html";
projectLink[7] = "sslabel.html";
projectLink[8] = "8years.html";
projectLink[9] = "paradise.html";
projectLink[10] = "va.html";
projectLink[11] = "bca.html";
projectLink[12] = "editorialillustrations.html";
projectLink[13] = "ss.html";

function displayProjectImages() {
    document.write("<div class='imglist col-xs-offset-4'><a href=" + projectLink[projectLink.length - 1] + "><img src=" + backgroundImage[backgroundImage.length - 1] + "><div class='overlay' ><div class='text'>" + projectTitle[projectTitle.length - 1] + "</a></div></div></div>")
    for (i=backgroundImage.length - 2; i>=0; i--) {
        document.write("<div class='imglist'><a href=" + projectLink[i] + "><img src=" + backgroundImage[i] + "><div class='overlay'><div class='text'>" + projectTitle[i] + "</a></div></div></div>");
    };
};


