const stopButton1 = document.querySelector('#stopButton1'),
  stopButton2 = document.querySelector('#stopButton2'),
  stopButton3 = document.querySelector('#stopButton3'),
  stopButton4 = document.querySelector('#stopButton4');

let context,
	oscillator,
  contextGain,
  x = 1,
  type = '';

function start(){
	context = new AudioContext();
	oscillator = context.createOscillator();
  contextGain = context.createGain();
  
  oscillator.type = type;
  oscillator.connect(contextGain);
	contextGain.connect(context.destination);
	oscillator.start(0);
}

function stop(){
  start();
  contextGain.gain.exponentialRampToValueAtTime(
  	0.00001, context.currentTime + x
	)
}

stopButton1.addEventListener('click', function(){
	type = 'sine';
  stop();
});
stopButton2.addEventListener('click', function(){
	type = 'square';
  stop();
});
stopButton3.addEventListener('click', function(){
	type = 'triangle';
  stop();
});
stopButton4.addEventListener('click', function(){
	type = 'sawtooth';
  stop();
});
