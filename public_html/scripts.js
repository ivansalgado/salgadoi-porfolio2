$("document").ready(function(){
    $(".ivan").css("background-color", "orange");

    $("#boot").bind('click', alertButtonClick);
    
    $("#clickButton").bind('click', clickButton);
    $("#clickButtin").bind('click', clickButtin);
    
    $('#hide').bind('click', hideThePage);
    $('#show').bind('click', showThePage);
});

function alertButtonClick(){
    alert("go to bootstrap?");
}

function clickButton(){
    $('#me').html('<h6>now im an h6 tag</h6>');
}

function clickButtin(){
    $('#me').text('<h6>now im an h6 tag</h6>');
}

function hideThePage(){
    $('#show').css('visibility', 'hidden');
    $('div').hide('fold', {}, 2500);
    $('#show').show('puff', {}, 2500);
}

function showThePage(){
    $('div').hide('fold', {}, 2500);
}
  