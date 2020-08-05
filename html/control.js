//export var serial: any;
/*var Serialport = require("serialport");
var serial = new Serialport("usb1", { baudRate: 115200 });
serial.on("open");*/
var SEND_INTERVAL = 100;
var Move = /** @class */ (function () {
    function Move() {
    }
    Move.prototype.fwrd = function () {
        //serial.write("F");
        console.log("F");
    };
    Move.prototype.left = function () {
        //serial.write("L");
        console.log("L");
    };
    Move.prototype.rigt = function () {
        //serial.write("R");
        console.log("R");
    };
    Move.prototype.back = function () {
        //serial.write("B");
        console.log("B");
    };
    Move.prototype.liftup = function () {
        //serial.write("U");
        console.log("U");
    };
    Move.prototype.liftdown = function () {
        //serial.write("D");
        console.log("D");
    };
    Move.prototype.MotorProtate = function () {
        //serial.write("p");
        console.log("p");
    };
    Move.prototype.MotorRrotate = function () {
        //serial.write("r");
        console.log("r");
    };
    Move.prototype.MotorStop = function () {
        //serial.write("s");
        console.log("s");
    };
    return Move;
}());
var EventJudge = /** @class */ (function () {
    function EventJudge(activity) {
        this.M = new Move();
        this.act = activity;
    }
    EventJudge.prototype.detectMousedown = function () {
        var _this = this;
        this.$intervalId = window.setInterval(function () {
            //const M: Move = new Move();
            switch (_this.act) {
                case "fwrd":
                    _this.M.fwrd();
                    break;
                case "back":
                    _this.M.back();
                    break;
                case "left":
                    _this.M.left();
                    break;
                case "rigt":
                    _this.M.rigt();
                    break;
                case "liftdown":
                    _this.M.liftdown();
                    break;
                case "liftup":
                    _this.M.liftup();
                    break;
            }
        }, SEND_INTERVAL);
    };
    EventJudge.prototype.detectMouseup = function () {
        window.clearInterval(this.$intervalId);
    };
    return EventJudge;
}());
var EventIgnition = /** @class */ (function () {
    function EventIgnition() {
        var _this = this;
        window.addEventListener("load", function (e) {
            var F = document.getElementById("fwrd");
            var B = document.getElementById("back");
            var R = document.getElementById("rigt");
            var L = document.getElementById("left");
            var U = document.getElementById("liftup");
            var D = document.getElementById("liftdown");
            F.addEventListener("mousedown", function () {
                _this.EJ = new EventJudge("fwrd");
                _this.EJ.detectMousedown();
            });
            F.addEventListener("mouseup", function () {
                _this.EJ.detectMouseup();
            });
            B.addEventListener("mousedown", function () {
                _this.EJ = new EventJudge("back");
                _this.EJ.detectMousedown();
            });
            B.addEventListener("mouseup", function () {
                _this.EJ.detectMouseup();
            });
            R.addEventListener("mousedown", function () {
                _this.EJ = new EventJudge("rigt");
                _this.EJ.detectMousedown();
            });
            R.addEventListener("mouseup", function () {
                _this.EJ.detectMouseup();
            });
            L.addEventListener("mousedown", function () {
                _this.EJ = new EventJudge("left");
                _this.EJ.detectMousedown();
            });
            L.addEventListener("mouseup", function () {
                _this.EJ.detectMouseup();
            });
            U.addEventListener("mousedown", function () {
                _this.EJ = new EventJudge("liftup");
                _this.EJ.detectMousedown();
            });
            U.addEventListener("mouseup", function () {
                _this.EJ.detectMouseup();
            });
            D.addEventListener("mousedown", function () {
                _this.EJ = new EventJudge("liftdown");
                _this.EJ.detectMousedown();
            });
            D.addEventListener("mouseup", function () {
                _this.EJ.detectMouseup();
            });
        });
    }
    return EventIgnition;
}());
var ClickIgnition = /** @class */ (function () {
    function ClickIgnition() {
        this.EJP = new EventJudge("MotorPr");
        this.EJR = new EventJudge("MotorRr");
        this.M = new Move();
        window.addEventListener("load", function (e) {
            var motor = document.getElementsByName("Radio");
            //const r = document.getElementById("motorRr");
            //const s = document.getElementById("motorSt");
            motor.forEach(function (e) {
                e.addEventListener("click", function () {
                });
            });
            /*if (motor[0].cheched) {
              this.M.MotorProtate();
            }
            if (motor[1].checked) {
              this.M.MotorRrotate();
            }
            if (motor[2].checked) {
            }*/
            /*
            p.addEventListener("click", () => {
              do{
              this.EJP.detectClick("p");
            }while(r.checked);}
            );
      
            r.addEventListener("click", () => {
              if (this.MotorPr_index % 2 == 1) {
                this.EJP.detectMouseup();
              }
              this.EJR.detectClick("r");
            });*/
        });
    }
    return ClickIgnition;
}());
//https://uxmilk.jp/39148
var EI = new EventIgnition();
