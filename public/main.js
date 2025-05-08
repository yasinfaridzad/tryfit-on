const deepar = window.DeepAR;

const canvas = document.getElementById('deepar-canvas');

const selectedEffect = sessionStorage.getItem('selectedEffect') || 'on-run-cloudrock.deepar';

canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.6;

deepar.initialize({
  licenseKey: 'DEIN-LIZENZSCHLÜSSEL',
  canvas,
  effect: `public/effects/${selectedEffect}`,
  additionalOptions: {
    cameraConfig: {
      facingMode: 'environment',
    },
    hint: 'footInit'
  }
}).then(instance => {
  console.log("DeepAR ready");
  instance.callbacks.onFeetTracked = (left, right) => {
    if (left.detected || right.detected) {
      console.log('Feet detected!');
    }
  };
});

const cards = document.querySelectorAll('.product-card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    const effectName = card.getAttribute('data-effect');
    sessionStorage.setItem('selectedEffect', effectName);
    location.reload(); // neu laden mit neuem Effekt
  });
});
