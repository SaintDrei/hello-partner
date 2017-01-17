$(document).ready(function() {
    

$(".about-link").click(function() {
    $('html,body').animate({
        scrollTop: $(".about-container").offset().top},
        'slow');
});
    
$(".stats-link").click(function() {
    $('html,body').animate({
        scrollTop: $(".stats-container").offset().top},
        'slow');
});
    
    $(".top5-link").click(function() {
    $('html,body').animate({
        scrollTop: $(".top5-container").offset().top},
        'slow');
});
        
});
    
