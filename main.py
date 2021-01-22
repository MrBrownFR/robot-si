def on_press_power():
    pass
maqueenIR.on_press_event(RemoteButton.POWER, on_press_power)

speed = 255
time = 4.3 * Math.PI
while True:
    maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, speed)
    time = 0