function updateClock() {
  const now = new Date();
  const hours = now.getHours() % 12 || 12;
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
  document.getElementById('currentTime').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}
setInterval(updateClock, 1000);
updateClock();

// Stopwatch Functionality
let stopwatchInterval = null;
let elapsedTime = 0; // in milliseconds
const stopwatchDisplay = document.getElementById('stopwatch');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function updateStopwatch() {
  elapsedTime += 1000;
  const hours = Math.floor(elapsedTime / 3600000);
  const minutes = Math.floor((elapsedTime % 3600000) / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  stopwatchDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

startBtn.addEventListener('click', () => {
  if (!stopwatchInterval) {
    stopwatchInterval = setInterval(updateStopwatch, 1000);
  }
});

stopBtn.addEventListener('click', () => {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
});

resetBtn.addEventListener('click', () => {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
  elapsedTime = 0;
  stopwatchDisplay.textContent = '00:00:00';
});
