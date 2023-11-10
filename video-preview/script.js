var video = document.getElementById("myVideo");


video.addEventListener("mouseover", function() {
    video.muted = true;
    video.play();

});

video.addEventListener("mouseout", function() {
    video.pause();

});
