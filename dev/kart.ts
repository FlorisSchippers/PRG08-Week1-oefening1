/// <reference path="gameobject.ts"/>

class Kart extends Gameobject {

    private speed: number;
    private driver: Driver;

    constructor(char: string, x: number, y: number) {
        super("kart", document.body, x, y);
        this.speed = 3;

        Message.logMessage("Created a kart!");

        this.driver = new Driver(char, this.div, 0, 0);
    }

    move() {
        this.x += this.speed;
        this.draw();
    }

}