const countdownDisplay = {
  days: document.getElementById('days'),
  hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds')
};

function startCountdown(endTimeStr) {
  const endTime = new Date(endTimeStr).getTime();
  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = endTime - now;

    if (distance <= 0) {
      clearInterval(interval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    countdownDisplay.days.textContent = days;
    countdownDisplay.hours.textContent = hours;
    countdownDisplay.minutes.textContent = minutes;
    countdownDisplay.seconds.textContent = seconds;
  }, 1000);
}

// Ganti tanggal acara di sini
startCountdown("2025-12-31T23:59:59");
