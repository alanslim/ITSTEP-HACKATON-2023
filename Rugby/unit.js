import {Player} from "./player.js";

export class Unit {
    constructor (playerId, x, frameY) {
        // this.speed = speed;
        // this.haste = haste;
        // this.direction = direction;
        this.x = x;
        // this.playerFrameY = frameY;
        this.player1 = new Player(playerId, frameY);
        this.player2 = new Player(playerId, frameY);
        this.player3 = new Player(playerId, frameY);
        this.player4 = new Player(playerId, frameY);
        this.player5 = new Player(playerId, frameY);
        this.player6 = new Player(playerId, frameY);
    }

    update(deltaTime){

    }

    draw(context){
        this.player1.draw(context, this.x, 120);
        this.player2.draw(context, this.x, 220);
        this.player3.draw(context, this.x, 320);
        this.player4.draw(context, this.x + 50, 120);
        this.player5.draw(context, this.x + 50, 220);
        this.player6.draw(context, this.x + 50, 320);
    }
}