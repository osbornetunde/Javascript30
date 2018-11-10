// console.log("connected");

function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.keyed[data-key="${e.keyCode}"]`);
	if(!audio) return;
	audio.currentTime = 0; //Rewind to the start
	audio.play();
	key.classList.add("playing");
}

// function removeTransition(e) {
// 	if(e.propertyName !== 'transform') return; //skip if its not a transform
// 	this.classList.remove("playing");
//}

window.addEventListener('keydown', playSound);
// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  function endSound (e) {
    const key = document.querySelector(`.keyed[data-key="${e.keyCode}"]`);
    if(!key) return;
    key.classList.remove('playing');
  }

  window.addEventListener('keyup', endSound);
