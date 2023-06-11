export class InputHandler {
    constructor (game) {
        this.game = game;
        // this.host = host;
        // this.port = port;
        this.key = '';

        // setInterval(() => {
        //     fetch(`http://${this.host}:${this.port}/action?unit=N`)
        //       .then(response => response.json())
        //       .then(response => {
        //         console.log(response);
        //         this.unit = response[unit];
        //         if(response.action[angle] === 0){
        //             this.key = 'up';
        //         }else if(response.action[angle] === 180){
        //             this.key = 'down';
        //         }else if(response.action[angle] === 90){
        //             this.key = 'right';
        //         }else if(response.action[angle] === 270){
        //             this.key = 'left';
        //         }else if(response.action[type] === 'catch'){
        //             this.key = 'catch';
        //         }else if(response.action[type] === 'throw'){
        //             this.key = 'throw';
        //         }
                
        //       });
        //   }, 20000);
          

            // GET http://<this_host>:<port>/action?unit=N  - запрос действий от игрока, N - номер активного юнита.
            // Ответ: код статуса 200 + json-строка. Пример:
            // {select: "auto"} или {"unit": 4, "action": {"type": "run", "angle": 45, "force": 100}}

            this.keys = [];
            window.addEventListener('keydown', e => {
                console.log(e);
                //Эти нажатые кнопки добавляются в массив инпут в игре, отсюда при составлении апдейта для игрока,
                //ореентируясь на киКод в массиве инпут, будем менять движениие/направление/фрейм игрока в игре/из источника
                if((e.keyCode === 83 ||     //Down handler key=S
                    e.keyCode === 87 ||    //UP handler Key= W
                    e.keyCode === 65 ||    //LEFT handler Key=A
                    e.keyCode === 68 ||    //RIGHT handler Key=D
                    e.keyCode === 13) &&  //ATTACK handler Key=ENTER
                    this.keys.indexOf(e.keyCode) === -1
                ){
                    this.keys.push(e.keyCode);
                } else if(e.key === 'z') this.game.debug = !this.game.debug;
    
                console.log(this.keys);
            });
            //При этом после того как мы переестаем нажимать на кнопку, массив инпут полностью очищается,
            //Чтобы при след нажатии правильно среагировать на нажатую кнопку
            window.addEventListener('keyup', e => {
                
                if( e.keyCode === 83 ||     //Down handler key=S
                    e.keyCode === 87 ||     //UP handler Key= W
                    e.keyCode === 65 ||     //LEFT handler Key=A
                    e.keyCode === 68  ||    //RIGHT handler Key=D)
                    e.keyCode === 13        //ATTACK handler Key=ENTER
                ) {
                    this.keys.splice(this.keys.indexOf(e.keyCode), 1);
                }
    
                console.log(this.keys);
            });

    }
}