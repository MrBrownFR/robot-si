function forward () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 218)
}
let distance = 0
let time = 0
forward()
basic.pause(Math.floor(100 * 60 / 1155 * 1000))
maqueen.motorStop(maqueen.Motors.All)
basic.forever(function () {
    basic.showString("POUSSEZ-VOUS")
    time = control.millis() * 1000
})
