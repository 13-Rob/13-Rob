function random(min, max) {
    return min + Math.random() * (max + 1 - min);
}

const body = document.querySelector('body');
const canvasSize = body.offsetWidth * body.offsetHeight;
const starsFraction = canvasSize / 2000;

for (let i = 0; i < starsFraction; i++) {
    let xPos = random(0, 98);
    let yPos = random(0, 98);
    let alpha = random(0.5, 1);
    let size = random(0, 2);
    let color = '#ffffff';

    const star = document.createElement('div');
    star.style.position = 'absolute';
    star.style.left = xPos + '%';
    star.style.top = yPos + '%';
    star.style.opacity = alpha;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.backgroundColor = color;
    document.body.appendChild(star);
}