let distance = 0
let time = 0
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
basic.pause(Math.round(100 * 60 / 1155 * 1000))
maqueen.motorStop(maqueen.Motors.All)
basic.forever(function () {
    basic.showString("STONKS")
    time = control.millis() * 1000
})
