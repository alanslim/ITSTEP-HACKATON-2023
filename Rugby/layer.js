<<<<<<< Updated upstream

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
=======
export class Background {
    constructor(game){
        this.game = game;
        this.width = 800;
        this.height = 500;
        this.layer1image = document.getElementById('layer1');
        this.x = 0;
        this.y = 0;
    }
>>>>>>> Stashed changes
    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }
<<<<<<< Updated upstream
}
=======
}

// export class Background {
//     constructor(game) {
//         this.game = game;
//         this.width = 800;
//         this.height = 500;
//         this.layer1image = document.getElementById('layer1');
//         this.layer1 = new Layer(this.game, this.width, this.height, 0, this.layer1image);
//     }
//     // update() {
//     //     this.backgroundLayers.forEach(layer => {
//     //         layer.update();
//     //     })
//     // }
//     draw(context) {
//         context.drawImage(this.image, this.x, this.y, this.width, this.height);
//         context.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
//     }
// }
>>>>>>> Stashed changes
