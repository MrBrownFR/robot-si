let time = 0
function right (num: number) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    maqueen.motorStop(maqueen.Motors.M2)
}
function left (num: number) {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    maqueen.motorStop(maqueen.Motors.M1)
}
function backward () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 218)
}
maqueen.IR_callbackUser(function (message) {
    if (message == 64) {
        forward()
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (message == 25) {
        backward()
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (message == 7) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (message == 9) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (message == 21) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.showIcon(IconNames.No)
    }
})
function forward () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 218)
}
basic.forever(function () {
    time = control.millis() * 1000
})
