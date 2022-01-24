import orbit from "./orbit.js";

class app{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
        this.width = document.body.clientWidth;
        this.height = document.body.clientHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        new orbit(this.width, this.height, this.ctx);

    }
}

window.onload = () => {
    new app();
}