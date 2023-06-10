class Layer {
    constructor(game, width, height, speedModifier, image){
        this.game = game;
        this.width = width;
        this.height = height;
        //нужен потому что каждый бгрнд будет двигаться со своей скоростью
        this.speedModifier = speedModifier; 
        this.image = image;
        this.x = 0;
        this.y = 0;
    }
    update() {
        //В случае если движение вышло из брнда, картинка 
        //возвращалась в значение 0, чтобы сделать имитацию бесконечного бэка
        if(this.x < -this.width) this.x = 0;
        //каждый бэк даижется со скоростью игры*свою скорость, чтобы сделать Paralax эффект
        else this.x -= this.game.speed * this.speedModifier;

    }
    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }
}

export class Background {
    constructor(game) {
        this.game = game;
        this.width = 800;
        this.height = 500;
        this.layer1image = document.getElementById('layer1');
        this.layer1 = new Layer(this.game, this.width, this.height, 0, this.layer1image);
        this.backgroundLayers = [this.layer1];
    }
    update() {
        this.backgroundLayers.forEach(layer => {
            layer.update();
        })
    }
    draw(context) {
        this.backgroundLayers.forEach( layer => {
            layer.draw(context);
        })
    }
}