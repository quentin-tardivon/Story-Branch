function increaseScore() {
  remote.getGlobal('sharedObj').score +=1
  document.getElementById("score").innerHTML = "Your Score: " + remote.getGlobal('sharedObj').score;
}

function decreaseScore() {
  remote.getGlobal('sharedObj').score -=1
  document.getElementById("score").innerHTML = "Your Score: " + remote.getGlobal('sharedObj').score;
}

function printResponse(response, link) {
  document.getElementById("response").innerHTML = response;
  document.getElementById("response").className = "mdc-ripple-surface demo-surface mdc-elevation--z2";

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
