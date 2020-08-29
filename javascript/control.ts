//export var serial: any;
/*var Serialport = require("serialport");
var serial = new Serialport("usb1", { baudRate: 115200 });
serial.on("open");*/

const SEND_INTERVAL: number = 500;


class Move {
  constructor() {}
  fwrd(): void {
    serial.write("F");
    console.log("F");
  }

  left(): void {
    serial.write("L");
    console.log("L");
  }

  rigt(): void {
    serial.write("R");
    console.log("R");
  }

  back(): void {
    serial.write("B");
    console.log("B");
  }

  liftup(): void {
    serial.write("U");
    console.log("U");
  }

  liftdown(): void {
    serial.write("D");
    console.log("D");
  }

  MotorProtate(): void {
    serial.write("p");
    console.log("p");
  }

  MotorRrotate(): void {
    serial.write("r");
    console.log("r");
  }

  MotorStop(): void {
    serial.write("s");
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

  mousedown() {
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

        case "motorPr":
          this.M.MotorProtate();
          break;

        case "motorRr":
          this.M.MotorRrotate();
          break;
      }
    }, SEND_INTERVAL);
  }

  mouseup() {
    window.clearInterval(this.$intervalId);
  }
}

class EventIgnition {
  private EJ: EventJudge;
  private EJP: EventJudge = new EventJudge("motorPr");
  private EJR: EventJudge = new EventJudge("motorRr");

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
        this.EJ.mousedown();
      });
      F.addEventListener("mouseup", () => {
        this.EJ.mouseup();
      });

      B.addEventListener("mousedown", () => {
        this.EJ = new EventJudge("back");
        this.EJ.mousedown();
      });
      B.addEventListener("mouseup", () => {
        this.EJ.mouseup();
      });

      R.addEventListener("mousedown", () => {
        this.EJ = new EventJudge("rigt");
        this.EJ.mousedown();
      });
      R.addEventListener("mouseup", () => {
        this.EJ.mouseup();
      });

      L.addEventListener("mousedown", () => {
        this.EJ = new EventJudge("left");
        this.EJ.mousedown();
      });
      L.addEventListener("mouseup", () => {
        this.EJ.mouseup();
      });

      U.addEventListener("mousedown", () => {
        this.EJ = new EventJudge("liftup");
        this.EJ.mousedown();
      });
      U.addEventListener("mouseup", () => {
        this.EJ.mouseup();
      });

      D.addEventListener("mousedown", () => {
        this.EJ = new EventJudge("liftdown");
        this.EJ.mousedown();
      });
      D.addEventListener("mouseup", () => {
        this.EJ.mouseup();
      });

      p.addEventListener("change", () => {
        if (document.motor.elements[0].checked) {
          if (document.motor.elements[1].checked) {
            document.motor.elements[1].checked = false;
            this.EJR.mouseup();
          }
          this.EJP.mousedown();
        } else {
          this.EJP.mouseup();
        }
      });

      r.addEventListener("change", () => {
        if (document.motor.elements[1].checked) {
          if (document.motor.elements[0].checked) {
            document.motor.elements[0].checked = false;
            this.EJP.mouseup();
          }
          this.EJR.mousedown();
        } else {
          this.EJR.mouseup();
        }
      });
    });
  }
}

var serial;
webiopi().ready(init);
function init(): void{
  serial = new Serial("usb1")
}
var EI = new EventIgnition();
