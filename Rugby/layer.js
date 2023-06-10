
export class Background {
    constructor() {
        this.width = 800;
        this.height = 500;
        this.image = document.getElementById('layer1');
        this.x = 0;
        this.y = 0;
    }
    // update() {
    //     this.backgroundLayers.forEach(layer => {
    //         layer.update();
    //     })
    // }
    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }
}