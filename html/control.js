var Sendchar = /** @class */ (function () {
    function Sendchar() {
        var message = "Hello! TypeScript!";
        console.log(message);
        //var serial = new Serial("usb1");
    }
    Sendchar.prototype.fwrd = function () {
        //serial.write("F"),
        console.log("F");
    };
    Sendchar.prototype.left = function () {
        //serial.write("L"),
        console.log("L");
    };
    Sendchar.prototype.rigt = function () {
        //serial.write("R"),
        console.log("R");
    };
    Sendchar.prototype.back = function () {
        //serial.write("B"),
        console.log("B");
    };
    Sendchar.prototype.liftup = function () {
        //serial.write("LU"),
        console.log("LU");
    };
    Sendchar.prototype.liftdown = function () {
        //serial.write("LD"),
        console.log("LD");
    };
    return Sendchar;
}());
var s = new Sendchar();
