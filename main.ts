basic.forever(function () {
    if (input.compassHeading() > -20 && input.compassHeading() < 20) {
        basic.showString("" + (input.compassHeading()))
    } else if (input.compassHeading() > 80 && input.compassHeading() < 100) {
        basic.showString("E")
    } else if (input.compassHeading() > 170 && input.compassHeading() < 190) {
        basic.showString("S")
    } else if (input.compassHeading() > 260 && input.compassHeading() < 280) {
        basic.showString("O")
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    }
})
