//export var serial: any;
var Move = /** @class */ (function () {
    function Move() {
        //const message: string = "Hello! TypeScript!";
        //console.log(message);
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
        //serial.write("LU");
        console.log("U");
    };
    Move.prototype.liftdown = function () {
        //serial.write("LD");
        console.log("D");
    };
    return Move;
}());
var EventJudge = /** @class */ (function () {
    function EventJudge(activity) {
        this.act = activity;
    }
    EventJudge.prototype.detectMousedown = function () {
        var _this = this;
        this.$intervalId = window.setInterval(function () {
            var M = new Move();
            switch (_this.act) {
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
    };
    EventJudge.prototype.detectMouseup = function () {
        //console.log(this.$intervalId);
        window.clearInterval(this.$intervalId);
    };
    return EventJudge;
}());
var MotorEventIgnition = /** @class */ (function () {
    function MotorEventIgnition() {
        var _this = this;
        window.addEventListener("load", function (e) {
            var F = document.getElementById("fwrd");
            var B = document.getElementById("back");
            var R = document.getElementById("rigt");
            var L = document.getElementById("left");
            var U = document.getElementById("liftup");
            var D = document.getElementById("liftdown");
            var p = document.getElementById("motorPr");
            var r = document.getElementById("motorRr");
            var s = document.getElementById("MotorSt");
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
    return MotorEventIgnition;
}());
var EI = new MotorEventIgnition();
