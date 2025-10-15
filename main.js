$(document).ready(function() {

  $("#doorbutton1").click(function(){
  $("#scene1").show();
});
  $("#doorbutton2").click(function(){
  $("#scene2").show();
});
  $("#doorbutton3").click(function(){
  $("#scene3").show();
});
  $("#doorbutton4").click(function(){
  $("#scene4").show();
});
  $("#doorbutton5").click(function(){
  $("#scene5").show();
});

let clickCount1 = 0;
let scene1Imgs = ["scene1-eye1", "scene1-eye2", "scene1-eye3", "scene1-unknown", "scene1-ques", "scene1-notice","scene1-square1", "scene1-square2", "scene1-door", "scene1-fuhao3", "scene1-text4", "scene1-circle"];
  $("#scene1").click(function(e) {
    clickCount1 = clickCount1 + 1

    if (clickCount1 === 1) {
      $("#scene1-bg").attr("src", "assets/1(2).jpg");
    let images = $('.image');
    for (let i = 0; i < images.length; i++) {
    console.log(scene1Imgs[i]);
    }
    }
    
    else if (clickCount1 > 1) {
      let arrayLength = scene1Imgs.length;
      let randomImgID = scene1Imgs[Math.floor(Math.random() * arrayLength)];
      let $img = $("#" + randomImgID);
      let offset = $("#scene1").offset();
      let x = e.pageX - offset.left;
      let y = e.pageY - offset.top;

      $img.css({
        position: "absolute",
        left: x - $img.width() / 2 + "px",
        top: y - $img.height() / 2 + "px",
        display: "block",
        zIndex: 20
      });
      console.log(randomImgID);
    }
  });
  let clickCount2 = 0;
  let scene2Imgs = ["scene2-circle", "scene2-unknown", "scene2-ques","scene2-pic1", "scene2-pic2", "scene2-pic4","scene2-fuhao4", "scene2-fuhao5","scene2-text1", "scene2-text2", "scene2-text3", "scene2-text5","scene2-tan4"];

$("#scene2").click(function(e) {
  clickCount2 = clickCount2 + 1;

  if (clickCount2 === 1) {
    $("#scene2-bg").attr("src", "assets/2(2).jpg");
    for (let i = 0; i < scene2Imgs.length; i++) {
      console.log(scene2Imgs[i]);
    }
  } 
  
  else if (clickCount2 > 1) {
    let arrayLength = scene2Imgs.length;
    let randomImgID = scene2Imgs[Math.floor(Math.random() * arrayLength)];
    let $img = $("#" + randomImgID);
    let offset = $("#scene2").offset();
    let x = e.pageX - offset.left;
    let y = e.pageY - offset.top;

    $img.css({
      position: "absolute",
      left: x - $img.width() / 2 + "px",
      top: y - $img.height() / 2 + "px",
      display: "block",
      zIndex: 20
    });
    console.log(randomImgID);
  }
  });
let clickCount3 = 0;
let scene3Imgs = ["scene3-text5", "scene3-notice", "scene3-unknown","scene3-door", "scene3-ballon", "scene3-exit","scene3-nothing", "scene3-fuhao1"];

$("#scene3").click(function(e) {
  clickCount3 = clickCount3 + 1;

  if (clickCount3 === 1) {
    $("#scene3-bg").attr("src", "assets/3(2).jpg");
    for (let i = 0; i < scene3Imgs.length; i++) {
      console.log(scene3Imgs[i]);
    }
  } 
  
  else if (clickCount3 > 1) {
    let arrayLength = scene3Imgs.length;
    let randomImgID = scene3Imgs[Math.floor(Math.random() * arrayLength)];
    let $img = $("#" + randomImgID);
    let offset = $("#scene3").offset();
    let x = e.pageX - offset.left;
    let y = e.pageY - offset.top;

    $img.css({
      position: "absolute",
      left: x - $img.width() / 2 + "px",
      top: y - $img.height() / 2 + "px",
      display: "block",
      zIndex: 20
    });
    console.log(randomImgID);
  }
});

let clickCount4 = 0;
let scene4Imgs = ["scene4-square1", "scene4-square2", "scene4-unknown","scene4-text1", "scene4-text2", "scene4-text3", "scene4-text5","scene4-fuhao2", "scene4-ballon", "scene4-circle"];

$("#scene4").click(function(e) {
  clickCount4 = clickCount4 + 1;

  if (clickCount4 === 1) {
    $("#scene4-bg").attr("src", "assets/4(2).jpg");

    for (let i = 0; i < scene4Imgs.length; i++) {
      console.log(scene4Imgs[i]);
    }
  } 
  
  else if (clickCount4 > 1) {
    let arrayLength = scene4Imgs.length;
    let randomImgID = scene4Imgs[Math.floor(Math.random() * arrayLength)];
    let $img = $("#" + randomImgID);
    let offset = $("#scene4").offset();
    let x = e.pageX - offset.left;
    let y = e.pageY - offset.top;

    $img.css({
      position: "absolute",
      left: x - $img.width() / 2 + "px",
      top: y - $img.height() / 2 + "px",
      display: "block",
      zIndex: 20
    });
    console.log(randomImgID);
  }
});

let clickCount5 = 0;
let scene5Imgs = ["scene5-ques", "scene5-notice", "scene5-unknown", "scene5-circle","scene5-text1", "scene5-text2", "scene5-text3","scene5-tan1", "scene5-tan2", "scene5-tan3", "scene5-tan5"];

$("#scene5").click(function(e) {
  clickCount5 = clickCount5 + 1;

  if (clickCount5 === 1) {
    $("#scene5-bg").attr("src", "assets/5(2).jpg");
    for (let i = 0; i < scene5Imgs.length; i++) {
      console.log(scene5Imgs[i]);
    }
  } 
  
  else if (clickCount5 > 1) {
    let arrayLength = scene5Imgs.length;
    let randomImgID = scene5Imgs[Math.floor(Math.random() * arrayLength)];
    let $img = $("#" + randomImgID);
    let offset = $("#scene5").offset();
    let x = e.pageX - offset.left;
    let y = e.pageY - offset.top;


    $img.css({
      position: "absolute",
      left: x - $img.width() / 2 + "px",
      top: y - $img.height() / 2 + "px",
      display: "block",
      zIndex: 20
    });
    console.log(randomImgID);
  }
});

  $("#sceneexit1").click(function() {
  $("#scene1").css("display", "none"); 
  let scene1Imgs = ["scene1-eye1", "scene1-eye2", "scene1-eye3", "scene1-unknown", "scene1-ques", "scene1-notice","scene1-square1", "scene1-square2", "scene1-door", "scene1-fuhao3", "scene1-text4", "scene1-circle"];
  for (let i = 0; i < scene1Imgs.length; i++) {
    $("#" + scene1Imgs[i]).css("display", "none");
  }
  clickCount1 = 0; 
  });

  $("#sceneexit2").click(function() {
  $("#scene2").css("display", "none");
  let scene2Imgs = ["scene2-circle", "scene2-unknown", "scene2-ques","scene2-pic1", "scene2-pic2", "scene2-pic4","scene2-fuhao4", "scene2-fuhao5","scene2-text1", "scene2-text2", "scene2-text3", "scene2-text5","scene2-tan4"];
  for (let i = 0; i < scene2Imgs.length; i++) {
    $("#" + scene2Imgs[i]).css("display", "none");
  }
  clickCount2 = 0; 
});

  $("#sceneexit3").click(function() {
  $("#scene3").css("display", "none");
  let scene3Imgs = ["scene3-text5", "scene3-notice", "scene3-unknown","scene3-door", "scene3-ballon", "scene3-exit","scene3-nothing", "scene3-fuhao1"];
  for (let i = 0; i < scene3Imgs.length; i++) {
    $("#" + scene3Imgs[i]).css("display", "none"); 
  }
  clickCount3 = 0;
});

  $("#sceneexit4").click(function() {
  $("#scene4").css("display", "none");
  let scene4Imgs = ["scene4-square1", "scene4-square2", "scene4-unknown","scene4-text1", "scene4-text2", "scene4-text3", "scene4-text5","scene4-fuhao2", "scene4-ballon", "scene4-circle"];
  for (let i = 0; i < scene4Imgs.length; i++) {
    $("#" + scene4Imgs[i]).css("display", "none"); 
  }
  clickCount4 = 0; 
});

  $("#sceneexit5").click(function() {
  $("#scene5").css("display", "none");
  let scene5Imgs = ["scene5-ques", "scene5-notice", "scene5-unknown", "scene5-circle","scene5-text1", "scene5-text2", "scene5-text3","scene5-tan1", "scene5-tan2", "scene5-tan3", "scene5-tan5"];
  for (let i = 0; i < scene5Imgs.length; i++) {
    $("#" + scene5Imgs[i]).css("display", "none");
  }
  clickCount5 = 0;
  });

});

