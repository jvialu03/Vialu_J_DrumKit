(() => {
  let keys = Array.from(document.querySelectorAll('.key'));

  keys.forEach(key => key.addEventListener('transitionend', resetKey));

  function resetKey() {
    this.classList.remove('playing');
  }

  function playSound() {
    //debugger;
    let audioElement = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    let key = document.querySelector(`div[data-key="${event.keyCode}"]`);

    // the ! operator is a check for inequality (it mean the condition is false)
    // also called a bang operator
    // if there is o matching audio element, then kill the function and do nothing
    if (!audioElement) {
      return;
    }

    // if we get a match, then play the sound that goes with the keyboard key
    audioElement.currentTime = 0; // no brackets means it's a property
    audioElement.play(); // round brackets means that its a method or function

    key.classList.add('playing');
  }

  // add an event listener to the window and capture al the keyboard key presses
  window.addEventListener('keydown', playSound);
})();
