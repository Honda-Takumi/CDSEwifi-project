//export var serial: any;
var Move = /** @class */ (function () {
    function Move() {
        var message = "Hello! TypeScript!";
        console.log(message);
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
var Buttontap = /** @class */ (function () {
    function Buttontap(element) {
        console.log("test");
        this._el = element;
        this.detect();
    }
    Buttontap.prototype.detect = function () {
        var _this = this;
        window.addEventListener("onmousedown", function (_el) {
            console.log("push");
            _this.intervalId = window.setInterval(function () {
                var M = new Move();
                switch (_this._el) {
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
        window.addEventListener("onmouseup", function (_el) {
            window.clearInterval(_this.intervalId);
        });
    };
    return Buttontap;
}());
var Detect = /** @class */ (function () {
    function Detect() {
        var F = document.getElementById("fwrd");
        var B = document.getElementById("back");
        var R = document.getElementById("rigt");
        var L = document.getElementById("left");
        var U = document.getElementById("liftup");
        var D = document.getElementById("liftdown");
        var p = document.getElementById("motorPr");
        var r = document.getElementById("motorRr");
        var s = document.getElementById("MotorSt");
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
    return Detect;
}());
var De = new Detect();