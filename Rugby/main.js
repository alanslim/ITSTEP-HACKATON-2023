// import {Player} from "player.js";
// import {Unit} from "unit.js";
// import * as PIXI from 'pixi.js';
import { Background } from './layer.js';
import { UI } from './ui.js'

export function random (max, min) {
    return Math.trunc(Math.random() * (max - min) + min);
}

let startGameBtn = document.querySelector('#startGame');
startGameBtn.addEventListener('click', () => {

    startGameBtn.style.display='none';

    let canv = document.createElement('canvas');
    canv.id = 'canvas';
    document.body.append(canv);


    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 500;

    const playerSkin = [
        './sprites/type1.png',
        './sprites/type2.png',
        './sprites/type3.png',
        './sprites/type4.png',
        './sprites/type5.png'
    ];

    class Game {
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.background = new Background();
            this.ui = new UI(this);
            this.playerOne = 1;
            this.playerTwo = 2;
            this.score = 0;
            this.time = 0;
        }

        update(deltaTime) {
            this.time += deltaTime;
            // this.background.update();
    
        }

        draw(context) {
            this.background.draw(context);
            this.ui.draw(context);
        }
    }
    
    const game = new Game(canvas.width, canvas.height);
    let lastTime = 0;
    console.log('game',game)

    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update(deltaTime);
        game.draw(ctx);
        if (!game.gameOver) requestAnimationFrame(animate);
    }
    animate(0);  

})
