$("document").ready(function(){
    $(".ivan").css("background-color", "#FFB74D");
    $(".iv").css("background-color", "#FFF59D");
    $(".jq").css("background-color", "#CCFF90");

    $("#b").bind('click', alertButtonClick);
    
    $(".ivan").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    $(".iv").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    $(".jq").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    
    $("#clickButton").bind('click', clickButton);
    $("#clickButtin").bind('click', clickButtin);
    
    $("#addFirstText").bind('click', addFirstText);
    $("#addText").bind('click', addText);
    $("#subText").bind('click', subText);
    $("#addBefore").bind('click', addBefore);
    $("#addAfter").bind('click', addAfter);
    
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
    $('#p1 p:first').before('<p>Now this line is first</p>');
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


  