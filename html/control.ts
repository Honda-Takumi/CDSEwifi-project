//npm install browserify vinyl-source-stream rx --save
import "./style.css";
import { Observable } from "Observable";
import { fromEvent } from "observable/fromEvent";
import { tap, delay } from "operators";

//export var serial: any;
class Move {
  constructor() {
    const message: string = "Hello! TypeScript!";
    console.log(message);
  }
  fwrd(): void {
    //serial.write("F");
    console.log("F");
  }

  left(): void {
    //serial.write("L");
    console.log("L");
  }

  rigt(): void {
    //serial.write("R");
    console.log("R");
  }

  back(): void {
    //serial.write("B");
    console.log("B");
  }

  liftup(): void {
    //serial.write("LU");
    console.log("LU");
  }

  liftdown(): void {
    //serial.write("LD");
    console.log("LD");
  }
}
class Buttontap {
  _el: any;
  intervalId: number;

  constructor(element) {
    console.log("test");
    this._el = element;
    /*window.addEventListener("onmousedown", (event) => {
      console.log("push");
    });*/
    this.detect();
  }
  detect() {
    const mousedown$: Observable<Event> = fromEvent(this._el, "mousedown");
    const mouseup$: Observable<Event> = fromEvent(this._el, "mouseup");
    mousedown$.pipe(
      (this.intervalId = window.setInterval(() => {
        var M: Move = new Move();
        switch (this._el) {
          case "fwrd":
            M.fwrd();
            break;
          case "back":
            M.back();
            break;
          case "left":
            M.left();
            break;
          case "rigt":
            M.rigt();
            break;
          case "liftdown":
            M.liftdown();
          case "liftup":
            M.liftup();
            break;
        }
      }, 100))
    );

    mouseup$.pipe(window.clearInterval(this.intervalId));
  }
}
