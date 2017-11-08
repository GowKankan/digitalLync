

var audioBox = document.getElementById("audio");
var playlist = document.getElementById("playlist");

var playBtn = document.getElementById("playBtn");
var pauseBtn = document.getElementById("pauseBtn");
var stopBtn = document.getElementById("stopBtn");

playlist.onclick = startPlayList;
//pauseBtn.onclick = pauseTheSong(audioBox);

function startPlayList(e) {
  console.log("event", e.target);

  var currentTrk = document.getElementsByTagName("audio");
  for (var i = 0; i < currentTrk.length; i++) {
    if (!currentTrk[i].paused) {
      currentTrk[i].pause();
    }
  }

  var songSrc = e.target.getAttribute("data-src");
  var newAudioEl = document.createElement("audio");
  newAudioEl.src = songSrc;
  newAudioEl.class="";
  newAudioEl.setAttribute("class", "active");

  document.body.appendChild(newAudioEl);
  console.log("New Track selected", newAudioEl);
  playTheSong(newAudioEl);
}

function playTheSong(audio) {
  console.log("Playing: ", audio);
  audio.play();
}

function pauseTheSong(audio) {
  console.log("paused the song");
  audio.pause();
}
