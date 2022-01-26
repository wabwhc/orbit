import ball from "./ball.js";

export default class orbit{
    constructor(w, h, ctx){
        this.x = w;
        this.y = h;
        this.ctx = ctx;
        this.oribt = 100;
        this.imfor = [];
        for(let i = 0; i < 7; i++){
            this.imfor[i] = [];
        }
        this.balls = []
        this.makeball();
        this.orbitLine();
    }

    makeball(){
        for(let i = 0; i < 7; i++){
            this.fillStyle = "#" + Math.round(Math.random() * 0xffffff).toString(16);
            this.balls[i] = new ball(this.x, this.y, this.ctx, (this.oribt += 20), this.fillStyle);
            this.imfor[i][0] = this.fillStyle;
            this.imfor[i][1] = this.oribt;
        }
        this.drawBall();
    }

    orbitLine(){
        for(let i = 0; i < 7; i++){
            this.ctx.beginPath();
            this.ctx.strokeStyle = this.imfor[i][0];
            this.ctx.arc(this.x / 2, this.y / 2, this.imfor[i][1], 0, Math.PI * 2, false);
            this.ctx.stroke();
            this.ctx.closePath();
        }
        requestAnimationFrame(this.orbitLine.bind(this));
    }

    drawBall(){
        this.ctx.clearRect(0,0,this.x, this.y);
        for(let i =0; i < 7; i++){
            this.balls[i].draw();
        }
        requestAnimationFrame(this.drawBall.bind(this))
    }

}