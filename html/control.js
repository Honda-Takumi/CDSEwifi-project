"use strict";
exports.__esModule = true;
//npm install browserify vinyl-source-stream rx --save
require("./style.css");
var fromEvent_1 = require("observable/fromEvent");
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
        console.log("LU");
    };
    Move.prototype.liftdown = function () {
        //serial.write("LD");
        console.log("LD");
    };
    return Move;
}());
var Buttontap = /** @class */ (function () {
    function Buttontap(element) {
        console.log("test");
        this._el = element;
        /*window.addEventListener("onmousedown", (event) => {
          console.log("push");
        });*/
        this.detect();
    }
    Buttontap.prototype.detect = function () {
        var _this = this;
        var mousedown$ = fromEvent_1.fromEvent(this._el, "mousedown");
        var mouseup$ = fromEvent_1.fromEvent(this._el, "mouseup");
        mousedown$.pipe((this.intervalId = window.setInterval(function () {
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
        }, 100)));
        mouseup$.pipe(window.clearInterval(this.intervalId));
    };
    return Buttontap;
}());