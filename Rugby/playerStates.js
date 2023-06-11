
const states = {
    DOWN: 0,
    LEFT: 1,
    RIGHT: 2,
    UP: 3,
    CATCH: 4,
    THROW: 5,
}


class State {
    constructor(state, game){
        this.state = state;
        this.game = game;
    }
}

export class Down {
    constructor(game){
        super('DOWN', game)
    }
    enter() {
        this.game.player.frameX = 0;
        this.game.player.frameY = 0;
    }
    handlerInput(input){
        if(input.includes('ArrowLeft') || input.includes('ArrowRight')) {
            this.game.player.setState(states.RUNNING, 1);
        } else if(input.includes('Enter')) {
            this.game.player.setState(states.ROLLING, 2);
        }  
    }
}