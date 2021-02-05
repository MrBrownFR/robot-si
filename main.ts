function right (num: number) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    maqueen.motorStop(maqueen.Motors.M2)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
}
function left (num: number) {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    maqueen.motorStop(maqueen.Motors.M1)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
}
function backward () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 218)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
}
function auto () {
    forward()
    basic.pause(Math.floor(100 * 60 / 1155 * 1000))
    maqueen.motorStop(maqueen.Motors.All)
}
maqueen.IR_callbackUser(function (message) {
    if (message == 64) {
        forward()
    }
    if (message == 25) {
        backward()
    }
    if (message == 7) {
        left(1)
    }
    if (message == 9) {
        right(1)
    }
    if (message == 21) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.showIcon(IconNames.No)
    }
    if (message == 67) {
        auto()
    }
})
function forward () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 218)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
}
let time = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    basic.pause(1)
    time += 1 / 1000
})
