//export var serial: any;
class Move {
  constructor() {
    //const message: string = "Hello! TypeScript!";
    //console.log(message);
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

class EventJudge {
  private act: string;
  private $intervalId: number;

  constructor(activity: string) {
    this.act = activity;
  }

  detectMousedown() {
    this.$intervalId = window.setInterval(() => {
      const M: Move = new Move();
      switch (this.act) {
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
          break;

        case "liftup":
          M.liftup();
          break;
      }
    }, 100);
  }

  detectMouseup() {
    //console.log(this.$intervalId);
    window.clearInterval(this.$intervalId);
  }
}

class MotorEventIgnition {
  private EJ: EventJudge;
  constructor() {
    window.addEventListener("load", (e) => {
      const F = document.getElementById("fwrd");
      const B = document.getElementById("back");
      const R = document.getElementById("rigt");
      const L = document.getElementById("left");
      const U = document.getElementById("liftup");
      const D = document.getElementById("liftdown");
      const p = document.getElementById("motorPr");
      const r = document.getElementById("motorRr");
      const s = document.getElementById("MotorSt");

      F.addEventListener("mousedown", () => {
        this.EJ = new EventJudge("fwrd");
        this.EJ.detectMousedown();
      });
      F.addEventListener("mouseup", () => {
        this.EJ.detectMouseup();
      });

      B.addEventListener("mousedown", () => {
        this.EJ = new EventJudge("back");
        this.EJ.detectMousedown();
      });
      B.addEventListener("mouseup", () => {
        this.EJ.detectMouseup();
      });

      R.addEventListener("mousedown", () => {
        this.EJ = new EventJudge("rigt");
        this.EJ.detectMousedown();
      });
      R.addEventListener("mouseup", () => {
        this.EJ.detectMouseup();
      });

      L.addEventListener("mousedown", () => {
        this.EJ = new EventJudge("left");
        this.EJ.detectMousedown();
      });
      L.addEventListener("mouseup", () => {
        this.EJ.detectMouseup();
      });

      U.addEventListener("mousedown", () => {
        this.EJ = new EventJudge("liftup");
        this.EJ.detectMousedown();
      });
      U.addEventListener("mouseup", () => {
        this.EJ.detectMouseup();
      });

      D.addEventListener("mousedown", () => {
        this.EJ = new EventJudge("liftdown");
        this.EJ.detectMousedown();
      });
      D.addEventListener("mouseup", () => {
        this.EJ.detectMouseup();
      });
    });
  }
}

var EI = new MotorEventIgnition();
