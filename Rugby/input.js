export class InputHandler {
    constructor (game) {
        this.game = game;
        this.
        this.keys = [];

        GET http://<this_host>:<port>/action?unit=N  - запрос действий от игрока, N - номер активного юнита.
        // Ответ: код статуса 200 + json-строка. Пример:
        // {select: "auto"} или {"unit": 4, "action": {"type": "run", "angle": 45, "force": 100}}
        
        // Контроллер...
        let controls = {
            'KeyA': {pressed: false, direction: 'left'},
            'KeyS': {pressed: false, direction: 'down'},
            'KeyD': {pressed: false, direction: 'right'},
            'KeyW': {pressed: false, direction: 'up'}
        }

        window.onkeydown = (ev) => {
            if (controls.hasOwnProperty(ev.code)) {
                const key = controls[ev.code];
        
                if (key.pressed) return;
                key.pressed = true;

                // Проверяем, не нажаты ли одновременно другие кнопки
                const simultaneousKeysPressed = Object.values(controls).some(control => control.pressed && control.direction !== key.direction);
                // Если есть одновременно нажатые кнопки, ничего не делаем
                if (simultaneousKeysPressed) return;        
                // Иначе
                this.keys.push(key.direction)
            }
        }
        
        window.onkeyup = (ev) => {
            if (controls.hasOwnProperty(ev.code)) {
                controls[ev.code].pressed = false;
                this.keys.splice(this.keys.indexOf(e.key), 1);
            }
        }
    }
}