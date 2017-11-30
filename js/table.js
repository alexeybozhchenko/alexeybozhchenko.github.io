$('table tr').mouseover(function() {
    $(this).addClass('hovered');
}).mouseout(function() {
    $(this).removeClass('hovered');
});