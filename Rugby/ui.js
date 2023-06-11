export class UI {
    constructor(game){
        this.game = game;
        this.fontSize = 30;
        this.fontFamily = 'Monospace';
        this.livesImage = document.getElementById('heart');
    }

    draw(context) {
        context.save();
        context.font = this.fontSize + 'px ' + this.fontFamily;
        context.textAlign = 'left';
        context.fillStyle = 'black';
        //first player
        context.fillText( `Player ${this.game.playerOne}`, 20, 35);
       // first player score
       context.fillText('Score: ' + this.game.score, 20, 60);
       //second player
       context.fillText( `Player ${this.game.playerTwo}`, 640, 35);
       // second player score
       context.fillText('Score: ' + this.game.score, 640, 60);
       //timers
       context.font = this.fontSize* 0.8 + 'px ' + this.fontFamily;
       context.fillText('Time: ' + (this.game.time * 0.001).toFixed(1), 320, 35);
       //game over message
        
        context.restore();
    }
}