abstract class Gameobject {

    protected div: HTMLElement;
    public x: number;
    public y: number;

    constructor(elementname: string, htmlelement: HTMLElement, x: number, y: number) {
        this.div = document.createElement(elementname);
        htmlelement.appendChild(this.div);

        this.x = x;
        this.y = y;
        this.draw();
    }

    public draw(): void {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    }
}