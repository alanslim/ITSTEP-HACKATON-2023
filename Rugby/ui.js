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
        context.fillText( `Player ${this.game.playerOne}`, 20, 50);
        // context.textAlign = 'center';
       //score
       context.fillText('Score: ' + this.game.score, 20, 80);
       //timer
       context.font = this.fontSize* 0.8 + 'px ' + this.fontFamily;
       context.fillText('Time: ' + (this.game.time * 0.001).toFixed(1), 20, 100);
       //game over message
        
        context.restore();
    }
}