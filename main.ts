input.onButtonPressed(Button.AB, function () {
    input.calibrateCompass()
})
basic.showString("M")
basic.forever(function () {
    Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Top, "Strength: " + convertToText(input.magneticForce(Dimension.Strength)))
    Kitronik_VIEWTEXT32.displaySingleLineString(Kitronik_VIEWTEXT32.DisplayLine.Bottom, "" + convertToText(Math.round(input.magneticForce(Dimension.X))) + ";" + convertToText(Math.round(input.magneticForce(Dimension.Y))) + ";" + convertToText(Math.round(input.magneticForce(Dimension.Z))))
    basic.pause(500)
})
