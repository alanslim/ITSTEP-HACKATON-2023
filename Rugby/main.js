
import {Player} from "player.js";
import {Unit} from "unit.js";
import * as PIXI from 'pixi.js';


window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.offset;
    canvas.height = window. innerHeight - 15;

    class Game {
        constructor(width, height){
            this.width = width;
            this.height = height;
        }

        update(deltaTime) {
            this.time += deltaTime;
    
        }

        draw(context) {
            
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
        if (!game.gameOver) requestAnimationFrame(animate) ;
    }
    animate(0);  

})
