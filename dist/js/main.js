var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Gameobject = (function () {
    function Gameobject(elementname, htmlelement, x, y) {
        this.div = document.createElement(elementname);
        htmlelement.appendChild(this.div);
        this.x = x;
        this.y = y;
        this.draw();
    }
    Gameobject.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return Gameobject;
}());
var Driver = (function (_super) {
    __extends(Driver, _super);
    function Driver(char, kart, x, y) {
        _super.call(this, char, kart, x, y);
        Message.logMessage("Created a driver!");
    }
    return Driver;
}(Gameobject));
var Kart = (function (_super) {
    __extends(Kart, _super);
    function Kart(char, x, y) {
        _super.call(this, "kart", document.body, x, y);
        this.speed = 3;
        Message.logMessage("Created a kart!");
        this.driver = new Driver(char, this.div, 0, 0);
    }
    return Kart;
}(Gameobject));
var Game = (function () {
    function Game() {
        var k1 = new Kart("mario", 200, 200);
        var k2 = new Kart("luigi", 400, 200);
        var k3 = new Kart("peach", 600, 200);
        var k4 = new Kart("toad", 800, 200);
    }
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Message = (function () {
    function Message() {
    }
    Message.logMessage = function (str) {
        console.log(str);
    };
    return Message;
}());
//# sourceMappingURL=main.js.map