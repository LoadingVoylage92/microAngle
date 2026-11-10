
namespace MicroAngle {
    let targetAngle = 90
    let tolerance = 2
    let voiceEnabled = true

    let pitchOffset = 0
    let rollOffset = 0

    //% block="pitch angle (degrees)"
    //% weight=100
    export function pitchAngle(): number {
        return input.rotation(Rotation.Pitch) - pitchOffset
    }

    //% block="roll angle (degrees)"
    //% weight=99
    export function rollAngle(): number {
        return input.rotation(Rotation.Roll) - rollOffset
    }

    //% block="calibrate current position"
    //% weight=95
    export function calibrate(): void {
        pitchOffset = input.rotation(Rotation.Pitch)
        rollOffset = input.rotation(Rotation.Roll)

        if (voiceEnabled) {
            billy.say("Calibration complete")
        }
    }

    //% block="set target angle to %degrees"
    //% degrees.defl=90
    //% degrees.min=-90 degrees.max=90
    //% weight=90
    export function setTarget(degrees: number): void {
        targetAngle = degrees
    }

    //% block="set angle tolerance to %degrees degrees"
    //% degrees.defl=2
    //% degrees.min=0 degrees.max=15
    //% weight=89
    export function setTolerance(degrees: number): void {
        tolerance = Math.abs(degrees)
    }

    //% block="is pitch at target?"
    //% weight=85
    export function isPitchAtTarget(): boolean {
        return Math.abs(pitchAngle() - targetAngle) <= tolerance
    }

    //% block="speak current angles"
    //% weight=80
    export function speakAngles(): void {
        if (voiceEnabled) {
            billy.say("Pitch")
            billy.say("" + Math.round(pitchAngle()) + " degrees")
            billy.say("Roll")
            billy.say("" + Math.round(rollAngle()) + " degrees")
        }
    }

    //% block="announce target status"
    //% weight=75
    export function announceStatus(): void {
        if (!voiceEnabled) return

        if (isPitchAtTarget()) {
            billy.say("Perfect angle")
            billy.say("Target reached")
        } else {
            billy.say("Not there yet")
            billy.say("" + Math.round(pitchAngle()) + " degrees")
        }
    }

    //% block="speak message %message"
    //% weight=70
    export function speakMessage(message: string): void {
        if (voiceEnabled) {
            billy.say(message)
        }
    }

    //% block="voice enabled %enabled"
    //% weight=65
    export function setVoiceEnabled(enabled: boolean): void {
        voiceEnabled = enabled
    }
}
