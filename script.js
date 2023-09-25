function init() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");



        ctx.lineWidth = 5; // Adjust the line width to make lineCap styles more noticeable
        ctx.strokeStyle = "#F30";
        ctx.beginPath();
        ctx.moveTo(200, 50); // a
        ctx.lineTo(240, 150); // b
        ctx.lineTo(340, 150); // c
        ctx.lineTo(260, 230); // d
        ctx.lineTo(300, 330); // e
        ctx.lineTo(200, 260); // f
        ctx.lineTo(140, 330); // g
        ctx.lineTo(150, 225); // g
        ctx.lineTo(60, 150); // h
        ctx.lineTo(160, 150); // i
        ctx.closePath();
        ctx.stroke();

        ctx.fillStyle = "blue";
        ctx.fillRect(400, 80, 500, 100);

        ctx.fillStyle = "black";
        ctx.fillRect(400, 180, 500, 100);

        ctx.fillStyle = "black";
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = "black";
        ctx.strokeRect(400, 280, 500, 100);
        
        ctx.beginPath();
    ctx.arc(1200, 255, 150, 0, 2 * Math.PI);
    ctx.lineWidth = '5'
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.arc(1200, 255, 150, 4, 1.7 * Math.PI);
    ctx.lineTo(1200, 255);
    ctx.lineWidth = '5'
    ctx.fill();









    }
}
onload=init;
