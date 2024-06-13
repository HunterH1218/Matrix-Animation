const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

const resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const fontSize = 18;
const columns = canvas.width / fontSize;

const rainDrops = [];
for (let x = 0; x < columns; x++) {
  rainDrops[x] = 1;
}

const characters = 'アァカサタナハマヤャラワヲンイィキシチニヒミリウゥクスツヌフムユュルエェケセテネヘメレヱオォコソトノホモヨョロヲン0123456789';
const charactersArray = characters.split('');

const draw = () => {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#0F0'; // Green text
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < rainDrops.length; i++) {
    const text = charactersArray[Math.floor(Math.random() * charactersArray.length)];
    ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      rainDrops[i] = 0;
    }
    rainDrops[i]++;
  }
};

setInterval(draw, 50);