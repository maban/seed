$("#tofocus").attr("tabindex","-1").css("outline","0");
$("tofocus").focus();


$("#popover a:first").get(0).keydown(function(e){
    if(e.shiftKey && e.keyCode == 9){
        e.preventDefault();
        $(lastLink).focus();
    }
});

$("#popover a:last").get(0).keydown(function(e) {
    if (!e.shiftKey && e.keyCode == 9){
        e.preventDefault();
        $(firstLink).focus();
    }
});