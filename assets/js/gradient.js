document.addEventListener('mousemove', function (event) {
    var { innerWidth: width, innerHeight: height } = window;
    var x = event.pageX / width;
    var y = event.pageY / height;

    // Ajouter de la transparence à la couleur rouge (#FF4AC3 devient rgba(255, 74, 195, 0.7))
    var gradient = `
        radial-gradient(circle at ${event.pageX}px ${event.pageY}px, rgba(255, 74, 195, 1) 0%, rgba(254, 80, 7, 0.5) 2%, transparent 30%)
    `;

    // Appliquer le dégradé comme arrière-plan du body
    document.querySelector('body').style.background = gradient;
});