import { Unit } from "./unit.js";
// import {Unit} from "unit.js";
// import * as PIXI from 'pixi.js';
import { Background } from './background.js';
import { InputHandler } from './input.js';
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

    //Получаю канвас, получаю контекст как инструмент управления/написания на канвасе, задаю высоту и ширину для канваса
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

    //объединяющий класс для игры, принимает ширину и высоту канваса
    class Game {
        constructor(width, height){
            this.hostOne =
            this.width = width;
            this.height = height;
            this.background = new Background();  //Устанавливаю бэграунд через класс Background
            this.ui = new UI(this);               //Устанавливаю интерфейс UI через класс UI и передаю в него игру
            this.input = new InputHandler(this);
            //Игрок первый, временно обозначен как 1, будут передаваться данные с сервера, образуется через класс Player
            //по итогу: this.playerOne = new Player(image.type1 к примеру);   
            this.playerOne = new Unit(this, 'playerOne', 180, 2);  
            //по итогу: this.playerTwo = new Player(image.type2 к примеру);                  
            this.playerTwo = new Unit(this, 'playerTwo', 535, 1);
            // Будет считывать очки игрока 1
            this.scoreOne = 0;
            // Будет считывать очки игрока 2
            this.scoreTwo = 0;
            //Отсчет времени игры, сделаю ограничение в 30 сек к примеру
            this.time = 0;
            //Это максимальное время игры. Пока 50 сек
            this.maxTime = 50000;
            //для определения закончена ли игра
            this.gameOver = false;
        }

        //Метод для апдейта, будет считывать изменения в управлении игроками и тд и перерисовывать игру
        //Дельтатайм это время-период в который происходит перерисовка игры, как fps???
        update(deltaTime) {
            //Так мы изменяем счет в игре
            this.time += deltaTime;
            // Когда время игры будет 50 сек то игра окончена...
            if(this.time > this.maxTime) this.gameOver = true;

            this.playerOne.update(this.input.keys, deltaTime);
            this.playerTwo.update(this.input.keys, deltaTime);
        }

        //Метод для отрисовки игры и всех принятых классов в игре
        draw(context) {
            this.background.draw(context);
            this.ui.draw(context);
            this.playerOne.draw(context);
            this.playerTwo.draw(context);
        }
    }
    
    const game = new Game(canvas.width, canvas.height);
    //Нужен для отчета дельта тайм
    let lastTime = 0;
    console.log('game',game)

    //Функция анимэйт прорисовывает канвас
    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update(deltaTime);
        game.draw(ctx);
        if (!game.gameOver) requestAnimationFrame(animate);
        else if(game.gameOver) {
            game = null;
            startGameBtn.style.display='block';
        }
    }
    animate(0);  
});
