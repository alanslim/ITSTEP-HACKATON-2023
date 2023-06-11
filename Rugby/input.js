export class InputHandler {
    constructor (game, host, port) {
        this.game = game;
        this.host = host;
        this.port = port;
        this.key = '';

        setInterval(() => {
            fetch(`http://${this.host}:${this.port}/action?unit=N`)
              .then(response => response.json())
              .then(response => {
                console.log(response);
                this.unit = response[unit];
                if(response.action[angle] === 0){
                    this.key = 'up';
                }else if(response.action[angle] === 180){
                    this.key = 'down';
                }else if(response.action[angle] === 90){
                    this.key = 'right';
                }else if(response.action[angle] === 270){
                    this.key = 'left';
                }else if(response.action[type] === 'catch'){
                    this.key = 'catch';
                }else if(response.action[type] === 'throw'){
                    this.key = 'throw';
                }
                
              });
          }, 20000);
          

            // GET http://<this_host>:<port>/action?unit=N  - запрос действий от игрока, N - номер активного юнита.
            // Ответ: код статуса 200 + json-строка. Пример:
            // {select: "auto"} или {"unit": 4, "action": {"type": "run", "angle": 45, "force": 100}}

    }
}