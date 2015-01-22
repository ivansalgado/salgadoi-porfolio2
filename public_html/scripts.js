$("document").ready(function(){
    $(".ivan").css("background-color", "#FFB74D");
    $(".iv").css("background-color", "#FFF59D");
    $(".jq").css("background-color", "#CCFF90");
    $(".b").css("background-color", "#E3F2FD");
    $("#accordion").css("background-color", "#B3E5FC");
    $("#accordian").css("background-color", "#e0e0e0");
    $(".1").css("background-color", "#E0F7FA");
    $(".2").css("background-color", "#E0F7FA");
    $(".3").css("background-color", "#E0F7FA");
    $(".4").css("background-color", "#F5F5F5");
    $(".5").css("background-color", "#F5F5F5");
    $(".6").css("background-color", "#F5F5F5");
    $(".7").css("background-color", "#F5F5F5");
    $(".8").css("background-color", "#F5F5F5");
    $(".9").css("background-color", "#F5F5F5");
    $(".10").css("background-color", "#F5F5F5");
    $("#hide").css("background-color", "#FFB74D");
    
    $("#b").bind('click', alertButtonClick);
    
    $(".ivan").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    $(".iv").bind('mouseover', mouseOverMe1).bind('mouseout', mouseOutMe1);
    $(".jq").bind('mouseover', mouseOverMe2).bind('mouseout', mouseOutMe2);
    $(".b").bind('mouseover', mouseOverMe3).bind('mouseout', mouseOutMe3);
    $("#accordion").bind('mouseover', mouseOverMe4).bind('mouseout', mouseOutMe4);
    $(".1").bind('mouseover', mouseOverMe5).bind('mouseout', mouseOutMe5);
    $(".2").bind('mouseover', mouseOverMe6).bind('mouseout', mouseOutMe6);
    $(".3").bind('mouseover', mouseOverMe7).bind('mouseout', mouseOutMe7);
    $("#accordian").bind('mouseover', mouseOverMe15).bind('mouseout', mouseOutMe15);
    $(".4").bind('mouseover', mouseOverMe8).bind('mouseout', mouseOutMe8);
    $(".5").bind('mouseover', mouseOverMe9).bind('mouseout', mouseOutMe9);
    $(".6").bind('mouseover', mouseOverMe10).bind('mouseout', mouseOutMe10);
    $(".7").bind('mouseover', mouseOverMe11).bind('mouseout', mouseOutMe11);
    $(".8").bind('mouseover', mouseOverMe12).bind('mouseout', mouseOutMe12);
    $(".9").bind('mouseover', mouseOverMe13).bind('mouseout', mouseOutMe13);
    $(".10").bind('mouseover', mouseOverMe14).bind('mouseout', mouseOutMe14);
    
    $("#clickButton").bind('click', clickButton);
    $("#clickButtin").bind('click', clickButtin);
    
    $("#addFirstText").bind('click', addFirstText);
    $("#addText").bind('click', addText);
    $("#subText").bind('click', subText);
    $("#addBefore").bind('click', addBefore);
    $("#addAfter").bind('click', addAfter);
    
    $('#accordion').accordion({header: "h6"});
    $('#accordian').accordion({header: "article"});
    
    $('#hide').bind('click', hideThePage);
    $('#show').bind('click', showThePage);
});

function alertButtonClick(){
    alert("You clicked a button");
}

function mouseOverMe(){
$(".ivan").html("<h6>Welcome to the jQuery page!<div></div><div></div><div></div></div></h6>").css("background-color", "#FF9800");
}

function mouseOutMe(){
$(".ivan").html("<h6>Welcome to the jQuery page.<div></div><div></div><div></div></div></h6>").css("background-color", "#FFB74D");
}

function mouseOverMe1(){
$(".iv").html("<p>...or click any button!</p>").css("background-color", "#FFEE58");
}

function mouseOutMe1(){
$(".iv").html("<p>To change the jQuery page's elements, just hover over any highlight...</p>").css("background-color", "#FFF59D");
}

function mouseOverMe2(){
$(".jq").css("background-color", "#B2FF59");
}

function mouseOutMe2(){
$(".jq").css("background-color", "#CCFF90");
}

function mouseOverMe3(){
$(".b").css("background-color", "#BBDEFB");
}

function mouseOutMe3(){
$(".b").css("background-color", "#E3F2FD");
}

function mouseOverMe4(){
$("#accordion").css("background-color", "#E0F7FA");
}

function mouseOutMe4(){
$("#accordion").css("background-color", "#B3E5FC");
}

function mouseOverMe5(){
$(".1").css("background-color", "#B3E5FC");
}

function mouseOutMe5(){
$(".1").css("background-color", "#E0F7FA");
}

function mouseOverMe6(){
$(".2").css("background-color", "#B3E5FC");
}

function mouseOutMe6(){
$(".2").css("background-color", "#E0F7FA");
}

function mouseOverMe7(){
$(".3").css("background-color", "#B3E5FC");
}

function mouseOutMe7(){
$(".3").css("background-color", "#E0F7FA");
}

function mouseOverMe15(){
$("#accordian").css("background-color", "#e0e0e0");
}

function mouseOutMe15(){
$("#accordian").css("background-color", "#e0e0e0");
}

function mouseOverMe8(){
$(".4").css("color", "white");
}

function mouseOutMe8(){
$(".4").css("color", "#FF9800");
}

function mouseOverMe9(){
$(".5").css("color", "#81D4FA");
}

function mouseOutMe9(){
$(".5").css("color", "#FF9800");
}

function mouseOverMe10(){
$(".6").css("color", "#311B92");
}

function mouseOutMe10(){
$(".6").css("color", "#FF9800");
}

function mouseOverMe11(){
$(".7").css("color", "#FFEE58");
}

function mouseOutMe11(){
$(".7").css("color", "#FF9800");
}

function mouseOverMe12(){
$(".8").css("color", "blue");
}

function mouseOutMe12(){
$(".8").css("color", "#FF9800");
}

function mouseOverMe13(){
$(".9").css("color", "#64DD17");
}

function mouseOutMe13(){
$(".9").css("color", "#FF9800");
}

function mouseOverMe14(){
$(".10").css("color", "blue");
}

function mouseOutMe14(){
$(".10").css("color", "#FF9800");
}

function clickButton(){
    $('#me').html('<h6>now im an h6 tag</h6>');
}

function clickButtin(){
    $('#me').text('<h6>now im an h6 tag</h6>');
}

function addFirstText(){
    $('#p1').html('<p>This is a line</p>');
}

function addText(){
    $('#p1').append('<p>This is another line</p>');
}

function subText(){
    $('#p1 p:last').remove();
}

function addBefore(){
    $('#p1 p:first').before('<p>This line is first</p>');
}

function addAfter(){
    $('#p1 p:last').after('<p>This line is last</p>');
}

function hideThePage(){
    $('#show').css('visibility', 'hidden');
    $('div').hide('fold', {}, 2500);
    $('#show').show('puff', {}, 2500);
}

function showThePage(){
    $('div').hide('fold', {}, 2500);
}


  