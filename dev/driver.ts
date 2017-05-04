/// <reference path="gameobject.ts"/>

class Driver extends Gameobject {

    constructor(char: string, kart: HTMLElement, x: number, y: number) {
        super(char, kart, x, y);

        Message.logMessage("Created a driver!");
    }
}