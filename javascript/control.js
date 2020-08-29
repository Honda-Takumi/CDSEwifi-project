//export var serial: any;
/*var Serialport = require("serialport");
var serial = new Serialport("usb1", { baudRate: 115200 });
serial.on("open");*/
var SEND_INTERVAL = 500;
var Move = /** @class */ (function () {
    function Move() {
    }
    Move.prototype.fwrd = function () {
        serial.write("F");
        console.log("F");
    };
    Move.prototype.left = function () {
        serial.write("L");
        console.log("L");
    };
    Move.prototype.rigt = function () {
        serial.write("R");
        console.log("R");
    };
    Move.prototype.back = function () {
        serial.write("B");
        console.log("B");
    };
    Move.prototype.liftup = function () {
        serial.write("U");
        console.log("U");
    };
    Move.prototype.liftdown = function () {
        serial.write("D");
        console.log("D");
    };
    Move.prototype.MotorProtate = function () {
        serial.write("p");
        console.log("p");
    };
    Move.prototype.MotorRrotate = function () {
        serial.write("r");
        console.log("r");
    };
    Move.prototype.MotorStop = function () {
        serial.write("s");
        console.log("s");
    };
    return Move;
}());
var EventJudge = /** @class */ (function () {
    function EventJudge(activity) {
        this.M = new Move();
        this.act = activity;
    }
    EventJudge.prototype.mousedown = function () {
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
                case "motorPr":
                    _this.M.MotorProtate();
                    break;
                case "motorRr":
                    _this.M.MotorRrotate();
                    break;
            }
        }, SEND_INTERVAL);
    };
    EventJudge.prototype.mouseup = function () {
        window.clearInterval(this.$intervalId);
    };
    return EventJudge;
}());
var EventIgnition = /** @class */ (function () {
    function EventIgnition() {
        var _this = this;
        this.EJP = new EventJudge("motorPr");
        this.EJR = new EventJudge("motorRr");
        this.Motorstate = 0;
        window.addEventListener("load", function (e) {
            var F = document.getElementById("fwrd");
            var B = document.getElementById("back");
            var R = document.getElementById("rigt");
            var L = document.getElementById("left");
            var U = document.getElementById("liftup");
            var D = document.getElementById("liftdown");
            var p = document.getElementById("motorPr");
            var r = document.getElementById("motorRr");
            //const s = document.getElementById("motorSt");
            F.addEventListener("mousedown", function () {
                _this.EJ = new EventJudge("fwrd");
                _this.EJ.mousedown();
            });
            F.addEventListener("mouseup", function () {
                _this.EJ.mouseup();
            });
            B.addEventListener("mousedown", function () {
                _this.EJ = new EventJudge("back");
                _this.EJ.mousedown();
            });
            B.addEventListener("mouseup", function () {
                _this.EJ.mouseup();
            });
            R.addEventListener("mousedown", function () {
                _this.EJ = new EventJudge("rigt");
                _this.EJ.mousedown();
            });
            R.addEventListener("mouseup", function () {
                _this.EJ.mouseup();
            });
            L.addEventListener("mousedown", function () {
                _this.EJ = new EventJudge("left");
                _this.EJ.mousedown();
            });
            L.addEventListener("mouseup", function () {
                _this.EJ.mouseup();
            });
            U.addEventListener("mousedown", function () {
                _this.EJ = new EventJudge("liftup");
                _this.EJ.mousedown();
            });
            U.addEventListener("mouseup", function () {
                _this.EJ.mouseup();
            });
            D.addEventListener("mousedown", function () {
                _this.EJ = new EventJudge("liftdown");
                _this.EJ.mousedown();
            });
            D.addEventListener("mouseup", function () {
                _this.EJ.mouseup();
            });
            p.addEventListener("change", function () {
                if (document.motor.elements[0].checked) {
                    if (document.motor.elements[1].checked) {
                        document.motor.elements[1].checked = false;
                        _this.EJR.mouseup();
                    }
                    _this.EJP.mousedown();
                }
                else {
                    _this.EJP.mouseup();
                }
            });
            r.addEventListener("change", function () {
                if (document.motor.elements[1].checked) {
                    if (document.motor.elements[0].checked) {
                        document.motor.elements[0].checked = false;
                        _this.EJP.mouseup();
                    }
                    _this.EJR.mousedown();
                }
                else {
                    _this.EJR.mouseup();
                }
            });
        });
    }
    return EventIgnition;
}());
var serial;
webiopi().ready(init);
function init() {
    serial = new Serial("usb1");
}
var EI = new EventIgnition();
