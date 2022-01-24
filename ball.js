export default class ball{
    constructor(x, y, ctx){
        this.x = x / 2;
        this.y = y / 2;
        this.radius = 20;
        this.ctx = ctx;
        this.time = Math.random()
        this.draw();
    }

    draw(){
        this.orbitX = this.x + Math.cos(this.time - 0.005) * 200;
        this.orbitY = this.y + Math.sin(this.time - 0.005) * 200;
        this.ctx.beginPath();
        this.ctx.fillStyle = 'white';
        this.ctx.arc(this.orbitX, this.orbitY, this.radius + 1, 0, Math.PI * 2, false);
        this.ctx.fill();
        this.ctx.closePath();
        this.orbitX = this.x + Math.cos(this.time += 0.005) * 200;
        this.orbitY = this.y + Math.sin(this.time += 0.005) * 200;
        this.ctx.beginPath();
        this.ctx.fillStyle ='black';
        this.ctx.arc(this.orbitX, this.orbitY, this.radius, 0, Math.PI * 2, false);
        this.ctx.fill();
        this.ctx.closePath();
        requestAnimationFrame(this.draw.bind(this));
    }

}