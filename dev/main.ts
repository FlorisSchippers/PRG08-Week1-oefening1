/// <reference path="kart.ts"/>
/// <reference path="driver.ts"/>

class Game {

    mario: Kart;
    luigi: Kart;
    peach: Kart;
    toad: Kart;

    constructor() {
        this.mario = new Kart("mario", 200, 200);
        this.luigi = new Kart("luigi", 400, 200);
        this.peach = new Kart("peach", 600, 200);
        this.toad = new Kart("toad", 800, 200);

        requestAnimationFrame(() => this.gameLoop());
    }

    gameLoop() {
        this.mario.move();
        requestAnimationFrame(() => this.gameLoop());
    }
}

// load
window.addEventListener("load", function () {
    new Game();
});