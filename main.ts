
namespace MicroOS {
    let booted = false;

    //% block="MicroOS boot system"
    //% weight=100
    export function boot() {
        booted = true;
        basic.showIcon(IconNames.Diamond);
        basic.pause(500);
        basic.showString("MICROOS");
        home();
    }

    //% block="MicroOS show home screen"
    //% weight=90
    export function home() {
        basic.showIcon(IconNames.Happy);
    }

    //% block="MicroOS show notification %message"
    //% weight=80
    export function notification(message: string) {
        basic.showString(message);
    }

    //% block="MicroOS clear screen"
    //% weight=70
    export function clear() {
        basic.clearScreen();
    }
}
