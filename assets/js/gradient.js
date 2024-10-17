function updateGradient(x, y) {
    var { innerWidth: width, innerHeight: height } = window;

    var gradient = `
      radial-gradient(circle at ${x}px ${y}px, rgba(255, 74, 195, 1) 0%, rgba(254, 80, 7, 0.7) 2%, transparent 30%)
  `;

    document.querySelector('body').style.background = gradient;
}

document.addEventListener('mousemove', function (event) {
    updateGradient(event.pageX, event.pageY);
});

document.addEventListener('touchmove', function (event) {
    var touch = event.touches[0];
    updateGradient(touch.pageX, touch.pageY);
});