(function() {
  var pollId = 0;
  pollId = setInterval(function() {
    var pos = getComputedStyle(document.querySelector('.mdc-button')).position;
    if (pos === 'relative') {
      init();
      clearInterval(pollId);
    }
  }, 250);
  function init() {
    var btns = document.querySelectorAll('.mdc-button:not([data-demo-no-js]');
    for (var i = 0, btn; btn = btns[i]; i++) {
      mdc.ripple.MDCRipple.attachTo(btn);
    }
  }
})();
