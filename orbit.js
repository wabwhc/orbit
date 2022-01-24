import ball from "./ball.js";

export default class orbit{
    constructor(w, h, ctx){
        this.x = w;
        this.y = h;
        this.ctx = ctx;
        new ball(this.x, this.y, this.ctx);
        new ball(this.x, this.y, this.ctx);
    }

}