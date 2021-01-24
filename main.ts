let time = 0
let speed = 255
// Calcule la distance en fonction des cm/sec, avec un produit en croix sur la base du 85.5 tr/min
while (time < 100 * 60 * 1155) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, speed)
    time = control.millis() * 1000
}
maqueen.motorStop(maqueen.Motors.All)
basic.forever(function () {
	
})
