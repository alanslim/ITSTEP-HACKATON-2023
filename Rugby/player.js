import {random} from "./main.js";
import {Animate} from "./states.js";

export class Player {
    r = 0;    // текущая строка в спрайт-листе
    c = 0;    // текущая колонка в спрайт-листе
    x = 0;    // текущая x координата на холсте
    y = 0;    // текущая y координата на холсте

    constructor (imageId, frameY) {
        this.image = document.getElementById(imageId);
        // this.game = game;
        this.width = 32;
        this.height = 32;
        // this.x = 0;
        // this.y = 50;
        // this.vy = 0; //vertical speed
        this.frameX = 0;
        this.frameY = frameY;
        this.maxFrame = 3;
        this.frameInterval = 1000/ this.fps;
        this.frameTimer = 0;
        // this.collision = new Animate();
    }

    update (input, deltaTime) {
        this.checkCollision();
        this.currentState.handlerInput(input);

        //sprite animation
        if(this.frameTimer > this.frameInterval){
            this.frameTimer = 0;
            if (this.frameX < this.maxFrame) this.frameX++;
            else this.frameX = 0;
        } else {
            this.frameTimer += deltaTime;
        }
    }

    draw (ctx, x, y) {
        ctx.drawImage(
            this.image, 
            this.frameX * this.width, 
            this.frameY * this.height, 
            this.width, 
            this.height, 
            x, 
            y, 
            this.width, 
            this.height
        );
    };

    // checkCollision() {
    //     if(
    //         enemy.x < this.x + this.width &&
    //         enemy.x + enemy.width > this.x &&
    //         enemy.y < this.y + this.height &&
    //         enemy.y + enemy.height > this.y
    //     ) {
    //         //collision detected
    //         enemy.markedForDeletion = true;

    //         if(
    //             this.currentState === this.states[4] || 
    //             this.currentState === this.states[5]
    //         ) {
    //             this.game.score++;
    //         }else {
    //             this.setState(6, 0);
    //         }
            
    //     } 
    // }
}

export class Moves {
    rows = 0;
    cols = 0;

    animate(direction, x, y, c, r) {
        switch (direction) {
            case 'right':
                this.hide(); // Скрываем героя
                x += 10; // Делаем движения
                c += 1; // Добавляем следующий спрайт

                // Если спрайты закончились переходим обратно к первому спрайту
                if (c >= this.cols) c = 0;

                r = 3; // Строка спрайта
                this.show(x, y);
                break;

            case 'left':
                this.hide();
                x -= 10;
                c += 1;

                if (c >= this.cols) c = 0;

                r = 1;
                this.show(x, y);
                break;

            case 'down':
                this.hide();
                y += 10;
                c += 1;

                if (c >= this.cols) c = 0;

                r = 0;
                this.show(x, y);
                break;

            case 'up':
                this.hide();
                y -= 10;
                c += 1;

                if (c >= this.cols) c = 0;

                r = 2;
                this.show(x, y);
                break;

            default: return;
        }
    };
}