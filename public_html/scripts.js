$("document").ready(function(){
    $(".ivan").css("background-color", "green");

    $(".btn-group").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
});

$('.btn-group').bind(function(mouseOverMe){
    $('btn-group').fadeIn(2000);
});    