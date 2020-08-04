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
    console.log("U");
  }

  liftdown(): void {
    //serial.write("LD");
    console.log("D");
  }
}

class Detect {
  constructor() {
    const fwrd = document.getElementById("fwrd");
    const back = document.getElementById("back");
    const rigt = document.getElementById("rigt");
    const left = document.getElementById("left");
    const liftup = document.getElementById("liftup");
    const liftdown = document.getElementById("liftdown");
    const motorPr = document.getElementById("motorPr");
    const motorRr = document.getElementById("motorRr");
    const motorSt = document.getElementById("MotorSt");
  }
}
class Buttontap {
  _el: any;
  intervalId: number;

  constructor(element) {
    console.log("test");
    this._el = element;
    this.detect();
  }
  detect() {
    window.addEventListener("onmousedown", _el => {
      console.log("push");
    
      this.intervalId = window.setInterval(() => {
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
      }, 100
    );
  );  
}
