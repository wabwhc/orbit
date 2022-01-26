export default class ball{
    constructor(x, y, ctx, orbit, fillStyle){
        this.x = x / 2;
        this.y = y / 2;
        this.radius = 10;
        this.ctx = ctx;
        this.Start = Math.random()* 10;
        this.orbit = orbit;
        this.speed = Math.random() / 100 + 0.005;
        this.fillStyle = fillStyle;
    }

    draw(){
        this.orbitX = this.x + Math.cos(this.Start += this.speed) * (this.orbit);
        this.orbitY = this.y + Math.sin(this.Start += this.speed) * (this.orbit);
        this.ctx.beginPath();
        this.ctx.fillStyle = this.fillStyle;
        this.ctx.arc(this.orbitX, this.orbitY, this.radius, 0, Math.PI * 2, false);
        this.ctx.fill();
        this.ctx.closePath();
    }

}