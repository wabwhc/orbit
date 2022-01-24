import ball from "./ball.js";

export default class orbit{
    constructor(w, h, ctx){
        this.x = w;
        this.y = h;
        this.ctx = ctx;
        this.oribt = 100;
        this.imfor = [];
        for(let i = 0; i < 10; i++){
            this.imfor[i] = [];
        }
        this.makeball();
        this.orbitLine();
    }

    makeball(){
        for(let i = 0; i < 10; i++){
            this.fillStyle = "#" + Math.round(Math.random() * 0xffffff).toString(16);
            new ball(this.x, this.y, this.ctx, (this.oribt += 20), this.fillStyle);
            this.imfor[i][0] = this.fillStyle;
            this.imfor[i][1] = this.oribt;
        }
    }

    orbitLine(){
        for(let i = 0; i < 10; i++){
            this.ctx.beginPath();
            this.ctx.strokeStyle = this.imfor[i][0];
            this.ctx.arc(this.x / 2, this.y / 2, this.imfor[i][1], 0, Math.PI * 2, false);
            this.ctx.stroke();
            this.ctx.closePath();
        }
        requestAnimationFrame(this.orbitLine.bind(this));
    }

}