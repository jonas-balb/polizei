OLED.init(128, 64)
let ultrasonic_distance = Environment.sonarbit_distance(Environment.Distance_Unit.Distance_Unit_cm, DigitalPin.P1)
if (ultrasonic_distance > 10 && ultrasonic_distance < 60) {
    OLED.writeStringNewLine("Achtung Achtung !!!")
    pins.servoWritePin(AnalogPin.P2, 180)
    basic.showIcon(IconNames.No)
    Environment.ledBrightness(AnalogPin.P3, true)
    Environment.ledBrightness(AnalogPin.P4, false)
} else {
    basic.showIcon(IconNames.Happy)
    Environment.ledBrightness(AnalogPin.P3, false)
    Environment.ledBrightness(AnalogPin.P4, true)
    pins.servoWritePin(AnalogPin.P2, 0)
}
