/// <reference path="kart.ts"/>
/// <reference path="driver.ts"/>

class Game {

    constructor() {
        let k1: Kart = new Kart("mario", 200, 200);
        let k2: Kart = new Kart("luigi", 400, 200);
        let k3: Kart = new Kart("peach", 600, 200);
        let k4: Kart = new Kart("toad", 800, 200);
    }

}

// load
window.addEventListener("load", function () {
    new Game();
});