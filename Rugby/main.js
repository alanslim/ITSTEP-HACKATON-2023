
// import {Player} from "player.js";
// import {Unit} from "unit.js";
// import * as PIXI from 'pixi.js';
import { Background } from './layer.js'


let startGameBtn = document.getElementById('startGame');
startGameBtn.addEventListener('click', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 500;

    class Game {
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.background = new Background(this);
            this.time = 0;
        }

        update(deltaTime) {
            this.time += deltaTime;
            this.background.update();
    
        }

        draw(context) {
            this.background.draw(context);
        }
    }


    const game = new Game(canvas.width, canvas.height);
    let lastTime = 0;

    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;
        //console.log(deltaTime);
        lastTime = timeStamp;
        ctx.clearRect(0, 0, canvas.width, canvas. height);
        game.update(deltaTime);
        game.draw(ctx);
        // if (!game.gameOver) requestAnimationFrame(animate) ;
    }
    animate(0);  

})
