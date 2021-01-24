let distance = 0
let time = 0
while (time < 100 * 60 / 1155) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
}
maqueen.motorStop(maqueen.Motors.All)
basic.forever(function () {
    time = control.millis() * 1000
})
