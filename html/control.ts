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

class Buttontap {
  _el: any;
  intervalId: number;

  constructor(element) {
    console.log("test");
    this._el = element;
    this.detect();
  }
  detect() {
    window.addEventListener("onmousedown", (_el) => {
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
      }, 100);
    });

    window.addEventListener("onmouseup", (_el) => {
      window.clearInterval(this.intervalId);
    });
  }
}
class Detect {
  constructor() {
    const F = document.getElementById("fwrd");
    const B = document.getElementById("back");
    const R = document.getElementById("rigt");
    const L = document.getElementById("left");
    const U = document.getElementById("liftup");
    const D = document.getElementById("liftdown");
    const p = document.getElementById("motorPr");
    const r = document.getElementById("motorRr");
    const s = document.getElementById("MotorSt");

    if (F.onclick) {
      var temp = new Buttontap(F);
    }
    if (B.onclick) {
      var temp = new Buttontap(B);
    }
    if (R.onclick) {
      var temp = new Buttontap(R);
    }
    if (L.onclick) {
      var temp = new Buttontap(L);
    }
    if (U.onclick) {
      var temp = new Buttontap(U);
    }
    if (D.onclick) {
      var temp = new Buttontap(D);
    }
    if (p.onclick) {
      var temp = new Buttontap(p);
    }
    if (r.onclick) {
      var temp = new Buttontap(r);
    }
    if (s.onclick) {
      var temp = new Buttontap(s);
    }
  }
}

let De = new Detect();
