function increaseScore() {
  remote.getGlobal('sharedObj').score +=1
  document.getElementById("score").innerHTML = "Your Score: " + remote.getGlobal('sharedObj').score;
}

function decreaseScore() {
  remote.getGlobal('sharedObj').score -=1
  document.getElementById("score").innerHTML = "Your Score: " + remote.getGlobal('sharedObj').score;
}

function printResponse(response) {
  document.getElementById("response").innerHTML = response;
}
