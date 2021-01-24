speed = 0
time = 0

def on_forever():
    global speed, time
    speed = 255
    while time < 100 * 60 * 1155:
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, speed)
        time = control.millis() * 1000
    maqueen.motor_stop(maqueen.Motors.ALL)
basic.forever(on_forever)
