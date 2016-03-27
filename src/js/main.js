function change_track(sourceUrl) {
    var audio = $("#player");
    $("#mp3-src").attr("src", sourceUrl);
    /****************/
    audio[0].pause();
    audio[0].load();
    audio[0].play();
    $('.spinner-wrap').addClass('playing').addClass('pulse');
    /****************/
}
$( document ).ready(function() {

    $('.spinner-wrap').click(function() {

        var $this = $(this),
            audio = $this.siblings('audio')[0],
            bpm = Number($('.track').attr('data-bpm'));

        pulse = (60/bpm)*1000;
        console.log(bpm);


        if (audio.paused === false) {
            audio.pause();
            audio.currentTime = 0;
            $this.removeClass('playing');
            clearInterval(intervals);
        }

        else {
            audio.play();
            $this.addClass('playing');
            pulsing();
            intervals = setInterval(function() {pulsing()}, pulse);

        }


        function pulsing() {

            $this.addClass('pulse');

            setTimeout(function() {
                $this.removeClass('pulse');
            }, pulse-100);

        }


    });

});
