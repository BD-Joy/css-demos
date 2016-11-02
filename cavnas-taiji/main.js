function draw() {
    let taiji = document.getElementById("taiji");
    let ctx = taiji.getContext("2d");

    let x = taiji.width / 2;
    let y = taiji.height / 2;
    let radius = 80;

    fillArc(ctx, "#fff", x, y, radius, 1.5 * Math.PI, 0.5 * Math.PI);

    fillArc(ctx, "#000", x, y, radius, 0.5 * Math.PI, 1.5 * Math.PI);

    fillArc(ctx, "#fff", x, (y - radius / 2), (radius / 2), 0, 2 * Math.PI);

    fillArc(ctx, "#000", x, (y + radius / 2), (radius / 2), 0, 2 * Math.PI);

    fillArc(ctx, "#000", x, (y - radius / 2), (radius / 8), 0, 2 * Math.PI);

    fillArc(ctx, "#fff", x, (y + radius / 2), (radius / 8), 0, 2 * Math.PI);
}

function fillArc(ctx, fillColor, x, y, radius, startAngle, endAngle) {
    ctx.fillStyle = fillColor;
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
}


window.onload = function () {
    draw();
}