// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
$('.track').click(function(){
    change_track($(this).attr('data-location'));// function to change the track of the loaded audio player without page refresh preferred...
});
$(document).ready(function(){
    $('.modal-trigger').leanModal();
});

$(window).swipe( {
    swipeUp:function(event, direction, distance, duration) {
        $('.playlist').click();
    },
    swipeRight:function(event, direction, distance, duration) {
        $('.button-collapse').click();
    },
    threshold:100,
    allowPageScroll:"vertical"
});
$(".button-collapse").sideNav();
$('.cover-video-link').click(function(){
    var playingflag=false;
    if(playingflag){
        playingflag=false;
        $('#background-video')[0].src += "&autoplay=1";
    }
    else{
        playingflag=true;
        $('#background-video').pauseVideo();
    }
});
