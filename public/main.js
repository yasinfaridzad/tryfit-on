const startButton = document.getElementById('getStartBtn');
if (startButton) {
  startButton.addEventListener('click', function() {
    window.location.href = 'getInfo.html';
  });
}

try {
  const showButton = document.getElementById('showBtn');
  if (showButton) {
    showButton.addEventListener('click', function() {
      window.location.href = 'tryon.html';
    });
  }
} catch (err) {
  console.log("Kein showBtn auf dieser Seite.");
}
