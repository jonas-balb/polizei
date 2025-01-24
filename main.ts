let ultrasonic_distance = 0
Environment.ledBrightness(AnalogPin.P4, false)
Environment.ledBrightness(AnalogPin.P3, false)
basic.forever(function () {
    OLED.init(128, 64)
    ultrasonic_distance = Environment.sonarbit_distance(Environment.Distance_Unit.Distance_Unit_cm, DigitalPin.P1)
    if (ultrasonic_distance > 10 && ultrasonic_distance < 60) {
        OLED.writeStringNewLine("Achtung Achtung !!!")
        pins.servoWritePin(AnalogPin.P2, 180)
        basic.showIcon(IconNames.No)
        Environment.ledBrightness(AnalogPin.P3, true)
        Environment.ledBrightness(AnalogPin.P4, false)
        basic.pause(2000)
        music.setBuiltInSpeakerEnabled(true)
        music.play(music.createSoundExpression(WaveShape.Square, 2129, 0, 121, 0, 2000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        music.play(music.createSoundExpression(WaveShape.Sine, 649, 500, 255, 255, 2000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        music.play(music.createSoundExpression(WaveShape.Square, 2129, 0, 121, 0, 2000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        music.play(music.createSoundExpression(WaveShape.Sine, 649, 500, 255, 255, 2000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        music.setBuiltInSpeakerEnabled(false)
    } else {
        OLED.writeStringNewLine("Alles ist in Ordnung")
        basic.showIcon(IconNames.Happy)
        Environment.ledBrightness(AnalogPin.P3, false)
        Environment.ledBrightness(AnalogPin.P4, true)
        pins.servoWritePin(AnalogPin.P2, 0)
        basic.pause(2000)
    }
})
