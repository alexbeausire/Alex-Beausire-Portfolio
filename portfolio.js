console.log("Hello")
var baseUrl = "/images/";
var pictureIndex = 0;
var pictures = [];
var backgroundImage = new Array();
backgroundImage[0] = "images/banoffe-pies-poster.jpg";
backgroundImage[1] = "images/2_orig.jpg";
backgroundImage[2] = "images/dj-sports---ck-a3_2x.jpg";
backgroundImage[3] = "images/midland-gif-frame2.gif";
backgroundImage[4] = "images/central_and_manamdeartboard1@2x_2x.png";
backgroundImage[5] = "images/boogaloo_baba1@3x_2x.png";
backgroundImage[6] = "images/bruce-a3_2x.jpg";
backgroundImage[7] = "images/boogie-nights-poster_2x.jpg";
backgroundImage[8] = "images/we-are-fsvtl-4-square_2x.jpg";
backgroundImage[9] = "images/fio52_2x.jpg";
backgroundImage[10]= "images/holly_1@3x_2x.png";
backgroundImage[11]= "images/jon-rust-poster_2x.jpg";
backgroundImage[12]= "images/kornel_2x.png";
backgroundImage[13]= "images/meraki1_2x.png";
backgroundImage[14]= "images/ourhouse1@2x_2x.png";
backgroundImage[15]= "images/plo_man_poster-01_2x.jpg";
backgroundImage[16]= "images/rezzies_posterartboard_1@3x_2x.jpg";
backgroundImage[17]= "images/the-bakery_2x.jpg";
backgroundImage[18]= "images/peach_a3artboard_1-u20460_2x.png";
backgroundImage[19]= "images/residents_a3_onlineartboard_1@3x_2x.png";
backgroundImage[20]= "images/krish@3x_2x.jpg";
backgroundImage[21]= "images/ramzi_poster_a3artboard_1@4x_2x.png";
backgroundImage[22]= "images/salt_mines_a3artboard_1@4x_2x.png";
backgroundImage[23]= "images/neuropol_2x.jpg";
backgroundImage[24]= "images/CThruA3.png";
backgroundImage[25]= "images/priori1@3x_2x.png";
backgroundImage[26]= "images/PosterArtboard_1@4x.png";
backgroundImage[27]= "images/003_A3Artboard_1@3x.png";
backgroundImage[28]= "images/LNTG_A3_OnlineArtboard_1@3x.png";
backgroundImage[29]= "images/AD.jpg";
backgroundImage[30]= "images/RezziesJanA3Artboard1@3x.png";
backgroundImage[31]= "images/SJ_BannerArtboard_1@3x.png";
backgroundImage[32]= "images/br2.png";
backgroundImage[33]= "images/ED_A3Artboard_@4x.png";
backgroundImage[34]= "images/Livity001.png";
backgroundImage[35]= "images/Insta---White-Shirt.jpeg";
backgroundImage[36]= "images/The_Cause_SquareArtboard1.png";
backgroundImage[37]= "images/OffWeekPortraitArtboard.png";
backgroundImage[38]= "images/028Artboard_1@4x.png";
backgroundImage[39]= "images/029.png";
backgroundImage[40]= "images/027Artboard_4x.png";
backgroundImage[41]= "images/OpeningParty1202Artboard.png";
backgroundImage[42]= "images/music-for-portfolioArtboard-1@3x.png";
backgroundImage[43]= "images/Record-Sleeve-v2.jpeg";
backgroundImage[44]= "images/RezziesMarchInstagramArtboard.png";
backgroundImage[45]= "images/Hero-100s.png";
backgroundImage[46]= "images/willow02Artboard-1.png";
backgroundImage[47]= "images/SAVESS-Square.png";
backgroundImage[48]= "images/Hero-HRW.png";
backgroundImage[49]= "images/Billy-Low-03.png";
backgroundImage[50]= "images/Artboard-4.png";
backgroundImage[51]= "images/EP2.png";
backgroundImage[52]= "images/EP3.png";
backgroundImage[53]= "images/SS_BIRTHDAY_Square.png";
backgroundImage[54]= "images/SS_THECLUB_Banner.png";
backgroundImage[55]= "images/SECRET030-3-ONLINE-12.png";
backgroundImage[56]= "images/SECRET030-3-ONLINE-1.png";


function displayAllImages() {
    document.write("<div class='imglist col-xs-offset-4'><img src=" + backgroundImage[backgroundImage.length - 1] + "></div>")
    for (i=backgroundImage.length - 2; i>=0;i--) {
        document.write("<div class='imglist'><img src=" + backgroundImage[i] + "></div>");
    };
};


