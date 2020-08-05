//export var serial: any;
/*var Serialport = require("serialport");
var serial = new Serialport("usb1", { baudRate: 115200 });
serial.on("open");*/
const SEND_INTERVAL: number = 100;

class Move {
  constructor() {}
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
    //serial.write("U");
    console.log("U");
  }

  liftdown(): void {
    //serial.write("D");
    console.log("D");
  }

  MotorProtate(): void {
    //serial.write("p");
    console.log("p");
  }

  MotorRrotate(): void {
    //serial.write("r");
    console.log("r");
  }

  MotorStop(): void {
    //serial.write("s");
    console.log("s");
  }
}

class EventJudge {
  private act: string;
  private $intervalId: number;
  private M: Move = new Move();
  constructor(activity: string) {
    this.act = activity;
  }

  detectMousedown() {
    this.$intervalId = window.setInterval(() => {
      //const M: Move = new Move();
      switch (this.act) {
        case "fwrd":
          this.M.fwrd();
          break;

        case "back":
          this.M.back();
          break;

        case "left":
          this.M.left();
          break;

        case "rigt":
          this.M.rigt();
          break;

        case "liftdown":
          this.M.liftdown();
          break;

        case "liftup":
          this.M.liftup();
          break;

        case "p":
          this.M.MotorProtate();
          break;

        case "r":
          this.M.MotorRrotate();
          break;
      }
    }, SEND_INTERVAL);
  }

  detectMouseup() {
    window.clearInterval(this.$intervalId);
  }
}

class EventIgnition {
  private EJ: EventJudge;
  private Motorstate: number = 0;
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
      //const s = document.getElementById("motorSt");

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

      p.addEventListener("click", () => {
        this.Motorstate++;
        this.EJ = new EventJudge("motorPr");
        if (this.Motorstate % 2 == 1) {
          this.EJ.detectMousedown();
        } else {
          this.EJ.detectMouseup();
        }
      });

      r.addEventListener("click", () => {
        this.Motorstate++;
        this.EJ = new EventJudge("motorRr");
        if (this.Motorstate % 2 == 1) {
          this.EJ.detectMousedown();
        } else {
          this.EJ.detectMouseup();
        }
      });
    });
  }
}

var EI = new EventIgnition();
