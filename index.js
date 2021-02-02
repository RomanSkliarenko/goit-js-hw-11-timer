const refs = {
  day: document.querySelector('[data-value="days"]'),
  hour: document.querySelector('[data-value="hours"]'),
  min: document.querySelector('[data-value="mins"]'),
  sec: document.querySelector('[data-value="secs"]'),
};
function startTimer() {
  const endTimer = new Date("February 4, 2021");
  setInterval(() => {
    const currentTime = new Date();
    const deltaTime = endTimer - currentTime;
    updateClockFace(deltaTime);
  }, 1000);
}
startTimer();
function updateClockFace(time) {
  function pad(value) {
    return String(value).padStart(2, "0");
  }
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  refs.day.textContent = `${days}`;
  refs.hour.textContent = `${hours}`;
  refs.min.textContent = `${mins}`;
  refs.sec.textContent = `${secs}`;
}
