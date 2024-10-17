document.addEventListener('mousemove', function (event) {
    var { innerWidth: width, innerHeight: height } = window;
    var x = event.pageX / width;
    var y = event.pageY / height;
    var gradient = `
        radial-gradient(circle at ${event.pageX}px ${event.pageY}px, rgba(255, 74, 195, 1) 0%, rgba(254, 80, 7, 0.7) 1%, transparent %)
    `;

    document.querySelector('body').style.background = gradient;
});