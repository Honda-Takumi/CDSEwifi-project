var serial;

function init() {
    serial = new Serial("usb1");
    console.log("MANJI");
}

function fwrd() {
    //serial.write("F"),
    console.log("F");
}

function left() {
    //serial.write("L"),
    console.log("L");
}

function rigt() {
    //serial.write("R"),
    console.log("R");
}

function back() {
    //serial.write("B"),
    console.log("B");
}

function liftup() {
    //serial.write("LU"),
    console.log("LU");
}

function liftdown() {
    //serial.write("LD"),
    console.log("LD");
}

window.onload = function () {
    // ページ読み込み時に実行

    //ここから先どうにかしてまとめて
    document.getElementById("fwrd").onmousedown = function () {
        $intervalID = setInterval(function () {
            fwrd();
        }, 100);
    };

    document.getElementById("fwrd").onmouseup = function () {
        clearInterval($intervalID);
    };

    document.getElementById("back").onmousedown = function () {
        $intervalID = setInterval(function () {
            back();
        }, 100);
    };

    document.getElementById("back").onmouseup = function () {
        clearInterval($intervalID);
    };

    document.getElementById("rigt").onmousedown = function () {
        $intervalID = setInterval(function () {
            rigt();
        }, 100);
    };
    document.getElementById("rigt").onmouseup = function () {
        clearInterval($intervalID);
    };

    document.getElementById("left").onmousedown = function () {
        $intervalID = setInterval(function () {
            left();
        }, 100);
    };

    document.getElementById("left").onmouseup = function () {
        clearInterval($intervalID);
    };
};