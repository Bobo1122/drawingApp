window.addEventListener('load', function () {
    var canvas = document.querySelector('canvas');
    var c = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // <-- variables -->
    var isDrawing = false;
    var isErasing = false;
    // <-- drawing functions -->
    function startPosition(e) {
        isDrawing = true;
        draw(e);
    }
    function endPosition() {
        isDrawing = false;
        c.beginPath();
    }
    function draw(e) {
        if (!isDrawing)
            return;
        c.lineWidth = 10;
        c.lineCap = 'round';
        c.lineTo(e.clientX, e.clientY);
        c.stroke();
        c.strokeStyle = 'red';
        c.beginPath();
        c.moveTo(e.clientX, e.clientY);
    }
    // <-- Erasing functions -->
    function erase(e) {
    }
    function clearCanvas() {
        c.clearRect(0, 0, canvas.width, canvas.height);
        console.log('canvas cleared');
    }
    // <-- EventListeners -->
    //<-- Mouse Events -->
    window.addEventListener('mousedown', startPosition);
    window.addEventListener('mouseup', endPosition);
    window.addEventListener('mousemove', draw);
    // <--Key Events -->
    window.addEventListener('keydown', function (e) {
        if (e.keyCode == 8)
            clearCanvas();
        console.log(e.keyCode);
    });
    window.addEventListener('resize', function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
