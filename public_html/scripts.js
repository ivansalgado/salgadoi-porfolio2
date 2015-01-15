$("document").ready(function(){
    $(".ivan").css("background-color", "#FF9800");
    $(".iv").css("background-color", "#FFEE58");

    $("#b").bind('click', alertButtonClick);
    
    $("#henri").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    
    $("#clickButton").bind('click', clickButton);
    $("#clickButtin").bind('click', clickButtin);
    
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
    $("#henri").html("you put your cursor on the picture");
}

function mouseOutMe(){
    $("#henri").html("you stopped touching the picture");
}

function clickButton(){
    $('#me').html('<h6>now im an h6 tag</h6>');
}

function clickButtin(){
    $('#me').text('<h6>now im an h6 tag</h6>');
}

function addText(){
    $('#p1').append('<p>This is another line</p>');
}

function subText(){
    $('#p1 p:last').remove();
}

function addBefore(){
    $('#p1 p:firsts').before('This line is first');
}

function addAfter(){
    $('#p1 p:last').remove();
}

function hideThePage(){
    $('#show').css('visibility', 'hidden');
    $('div').hide('fold', {}, 2500);
    $('#show').show('puff', {}, 2500);
}

function showThePage(){
    $('div').hide('fold', {}, 2500);
}
  