let time = 0
let speed = 255
while (time < 100 * 60 * 1155) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, speed)
    time = control.millis() * 1000
}
maqueen.motorStop(maqueen.Motors.All)
basic.forever(function () {
	
})
