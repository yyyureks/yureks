const playButton = document.getElementById("playButton");
const music = document.getElementById("music");
const currentlyPlaying = document.getElementById("currentlyPlaying");
const enterButton = document.getElementById("enterButton");

const transitionScreen = document.getElementById("transitionScreen");
const buyText = document.getElementById("buyText");
const yayText = document.getElementById("yayText");

const trackName = "EUGHHH 154 BPM PROD. XPREE & YUREKS";

currentlyPlaying.textContent = "CURRENTLY PLAYING: " + trackName;


/* PLAY / PAUSE */

playButton.addEventListener("click", function() {

    playButton.classList.add("pressed");

    setTimeout(function() {
        playButton.classList.remove("pressed");
    }, 150);

    if (music.paused) {

        music.play();

        playButton.textContent = "PAUSE";

        currentlyPlaying.classList.remove("hidden");

    } else {

        music.pause();

        playButton.textContent = "PLAY";

        currentlyPlaying.classList.add("hidden");

    }

});


/* ENTER */

enterButton.addEventListener("click", function(event) {

    event.preventDefault();

    document.body.classList.add("leaving");

    setTimeout(function() {

        transitionScreen.classList.add("show");

        setTimeout(function() {
            buyText.classList.add("show");
        }, 300);

        setTimeout(function() {
            buyText.classList.remove("show");
        }, 1800);

        setTimeout(function() {
            yayText.classList.add("show");
        }, 2300);

        setTimeout(function() {
            yayText.classList.remove("show");
        }, 3200);

        setTimeout(function() {
            window.location.href = "store.html";
        }, 3800);

    }, 800);

});