let speed = 0
let time = 0
let distance = 0
basic.forever(function () {
    speed = 255
    time = 0
    while (distance < 100) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, speed)
        time = 0
        distance = 4.3 * Math.PI * (speed * 85.5 / 255)
    }
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
})
