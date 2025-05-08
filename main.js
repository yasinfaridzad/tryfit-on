const startButton = document.getElementById('getStartBtn');
if (startButton) {
  startButton.addEventListener('click', function() {
    window.location.href = 'getInfo.html';
  });
}
const showButton = document.getElementById('showBtn');
if (showButton) {
  showButton.addEventListener('click', function() {
    window.location.href = 'tryon.html';
  });
}

const deepar = window.DeepAR;
const canvas = document.getElementById('deepar-canvas');
if (canvas) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight * 0.6;
  const selectedEffect = sessionStorage.getItem('selectedEffect') || 'on-run-cloudrock.deepar';
  deepar.initialize({
    licenseKey: 'your-license-key',
    canvas,
    effect: selectedEffect,
    additionalOptions: { cameraConfig: { facingMode: 'environment' }, hint: 'footInit' }
  }).then(instance => {
    instance.callbacks.onFeetTracked = (l, r) => {
      if (l.detected || r.detected) console.log('Feet erkannt');
    };
  });

  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      sessionStorage.setItem('selectedEffect', card.dataset.effect);
      location.reload();
    });
  });
}