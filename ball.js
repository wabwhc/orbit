export default class ball{
    constructor(x, y, ctx, orbit, fillStyle){
        this.x = x / 2;
        this.y = y / 2;
        this.radius = 10;
        this.ctx = ctx;
        this.time = Math.random()* 10;
        this.draw();
        this.orbit = orbit;
        this.fillStyle = fillStyle;
    }

    draw(){
        this.orbitX = this.x + Math.cos(this.time - 0.006) * (this.orbit);
        this.orbitY = this.y + Math.sin(this.time - 0.006) * (this.orbit);
        this.ctx.beginPath();
        this.ctx.fillStyle = 'white';
        this.ctx.arc(this.orbitX, this.orbitY, this.radius + 1.5 , 0, Math.PI * 2, false);
        this.ctx.fill();
        this.ctx.closePath();
        this.orbitX = this.x + Math.cos(this.time += 0.006) * (this.orbit);
        this.orbitY = this.y + Math.sin(this.time += 0.006) * (this.orbit);
        this.ctx.beginPath();
        this.ctx.fillStyle = this.fillStyle;
        this.ctx.arc(this.orbitX, this.orbitY, this.radius, 0, Math.PI * 2, false);
        this.ctx.fill();
        this.ctx.closePath();
        requestAnimationFrame(this.draw.bind(this));
    }

}