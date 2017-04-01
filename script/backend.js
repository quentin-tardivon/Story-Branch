function increaseScore() {
  remote.getGlobal('sharedObj').score +=1
  document.getElementById("score").innerHTML = "Your Score: " + remote.getGlobal('sharedObj').score;
}

function decreaseScore() {
  remote.getGlobal('sharedObj').score -=1
  document.getElementById("score").innerHTML = "Your Score: " + remote.getGlobal('sharedObj').score;
}

function initScore() {
  remote.getGlobal('sharedObj').score = 0;
}

function printResponse(response, link) {
  document.getElementById("response").innerHTML = response;
  document.getElementById("response").className = "mdc-ripple-surface demo-surface";

  if (document.getElementById("response1") != null) {
      document.getElementById("response1").onclick = "";
  }

  if (document.getElementById("response2") != null) {
      document.getElementById("response2").onclick = "";
  }

  if (document.getElementById("response3") != null) {
      document.getElementById("response3").onclick = "";
  }

}

function printBadResponse(response, link) {
  document.getElementById("badResponse").innerHTML = response;
  document.getElementById("badResponse").className = "mdc-ripple-surface demo-surface";

  if (document.getElementById("response1") != null) {
      document.getElementById("response1").onclick = "";
  }

  if (document.getElementById("response2") != null) {
      document.getElementById("response2").onclick = "";
  }

  if (document.getElementById("response3") != null) {
      document.getElementById("response3").onclick = "";
  }

}

function readText(text) {
  var msg = new SpeechSynthesisUtterance();
  var voices = window.speechSynthesis.getVoices();
  msg.voice = voices[0]; // Note: some voices don't support altering params
  msg.voiceURI = 'Native';
  msg.volume = 1; // 0 to 1
  msg.rate = 1; // 0.1 to 10
  msg.pitch = 1.2; //0 to 2
  msg.text = text;
  msg.lang = 'en-GB';
  speechSynthesis.speak(msg);
}
