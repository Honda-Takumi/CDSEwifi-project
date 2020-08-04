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
    //serial.write("U"),
    console.log("U");
}

function liftdown() {
    //serial.write("LD"),
    console.log("D");
}

function motorPr() {
    //serial.write("p");
    console.log("p");
}

function motorRr() {
    //serial.write("r");
    console.log("r");
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


    document.getElementById("back").onmousedown = function () {
        $intervalID = setInterval(function () {
            back();
        }, 100);
    };
    document.getElementById("back").onmouseup = function () {
        clearInterval($intervalID);
    };


    document.getElementById("liftup").onmousedown = function () {
        $intervalID = setInterval(function () {
            liftup();
        }, 100);
    };
    document.getElementById("liftup").onmouseup = function () {
        clearInterval($intervalID);
    };


    document.getElementById("liftdown").onmousedown = function () {
        $intervalID = setInterval(function () {
            liftdown();
        }, 100);
    };
    document.getElementById("liftdown").onmouseup = function () {
        clearInterval($intervalID);
    };

    var pr_i = '0';
    document.getElementById("motorPr").onmousedown = function () {

        if (pr_i % '2' == '0') {
            $intervalID = setInterval(function () {
                motorPr();
            }, 100);
        } else {
            document.getElementById("motorPr").onmouseup = function () {
                clearInterval($intervalID);
            };
        }
        pr_i += '1';
    };

    var Rr_i = '0';
    document.getElementById("motorRr").onmousedown = function () {

        if (Rr_i % '2' == '0') {
            $intervalID = setInterval(function () {
                motorRr();
            }, 100);
        } else {
            document.getElementById("motorRr").onmouseup = function () {
                clearInterval($intervalID);
            };
        }
        Rr_i += '1';
    }
}