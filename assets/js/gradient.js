document.addEventListener('mousemove', function(event) {
    var { innerWidth: width, innerHeight: height } = window;
    var x = event.clientX / width;
    var y = event.clientY / height;

    var gradient = `
        radial-gradient(circle at ${(x * 100)}% ${(y * 100)}%, #FF4AC3 10%, #FE5007 20%, #B0BEBF 100%)
    `;

    document.querySelector('body').style.background = gradient;
})