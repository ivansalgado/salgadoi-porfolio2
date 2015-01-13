$("document").ready(function(){
    $(".ivan").css("background-color", "orange");

    $("#boot").bind('click', alertButtonClick);
    
    $("#clickButton").bind('click', clickButton);
    $("#clickButton").bind('click', clickButtin);
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

  