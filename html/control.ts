class Sendchar {
  constructor() {
    const message: string = "Hello! TypeScript!";
    console.log(message);
    //var serial = new Serial("usb1");
  }
  fwrd(): void {
    //serial.write("F"),
    console.log("F");
  }

  left(): void {
    //serial.write("L"),
    console.log("L");
  }

  rigt(): void {
    //serial.write("R"),
    console.log("R");
  }

  back(): void {
    //serial.write("B"),
    console.log("B");
  }

  liftup(): void {
    //serial.write("LU"),
    console.log("LU");
  }

  liftdown(): void {
    //serial.write("LD"),
    console.log("LD");
  }
}

var s: Sendchar = new Sendchar();
//http://www.shurey.com/js/samples/1_tips16.html
