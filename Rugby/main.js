
// import {Player} from "player.js";
// import {Unit} from "unit.js";
// import * as PIXI from 'pixi.js';
import { Background } from './layer.js';
import { UI } from './ui.js'


let startGameBtn = document.querySelector('#startGame');
startGameBtn.addEventListener('click', () => {

    startGameBtn.style.display='none';

    let canv =document.createElement('canvas');
    canv.id = 'canvas';
    document.body.append(canv);

    //Получаю канвас, получаю контекст как инструмент управления/написания на канвасе, задаю высоту и ширину для канваса
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 500;

    console.log(startGameBtn);

    //объединяющий класс для игры, принимает ширину и высоту канваса
    class Game {
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.background = new Background();  //Устанавливаю бэграунд через класс Background
            this.ui = new UI(this);               //Устанавливаю интерфейс UI через класс UI и передаю в него игру
            //Игрок первый, временно обозначен как 1, будут передаваться данные с сервера, образуется через класс Player
            //по итогу: this.playerOne = new Player(image.type1 к примеру);   
            this.playerOne = 1;  
            //по итогу: this.playerTwo = new Player(image.type2 к примеру);                  
            this.playerTwo = 2;
            // Будет считывать очки игрока 1
            this.scoreOne = 0;
            // Будет считывать очки игрока 2
            this.scoreTwo = 0;
            //Отсчет времени игры, сделаю ограничение в 30 сек к примеру
            this.time = 0;
            //для определения закончена ли игра
            this.gameOver = false;
        }

        //Метод для апдейта, будет считывать изменения в управлении игроками и тд и перерисовывать игру
        //Дельтатайм это время-период в который происходит перерисовка игры, как fps???
        update(deltaTime) {
            //Так мы изменяем счет в игре
            this.time += deltaTime;
            // this.background.update();
            
    
        }

        //Метод для отрисовки игры и всех принятых классов в игре
        draw(context) {
            this.background.draw(context);
            this.ui.draw(context);
        }
    }


    //Создаю игру по нажатию кнопки
    const game = new Game(canvas.width, canvas.height);
    //Нужен для отчета дельта тайм
    let lastTime = 0;

    //Функция анимэйт прорисовывает канвас
    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;
        //console.log(deltaTime);
        lastTime = timeStamp;
        //Очищаю канвас от предыдущих отрисованных кадров
        ctx.clearRect(0, 0, canvas.width, canvas. height);
        //обновляю новые поступленные данные управления и тд и отрисовываю их
        game.update(deltaTime);
        game.draw(ctx);
        //Пока игра не закончена будет идти плавная перерисовака при помощи функции requestAnimationFrame
        if (!game.gameOver) requestAnimationFrame(animate) ;
        // Когда игра будет окончена можно удалить эту игру, gameOver будет true когда закончится время
        else if (game.gameOver) 
    }
    animate(0);  

})
