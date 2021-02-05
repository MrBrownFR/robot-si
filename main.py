def right(num: number):
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    maqueen.motor_stop(maqueen.Motors.M2)
    basic.show_leds("""
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        """)
def left(num: number):
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    maqueen.motor_stop(maqueen.Motors.M1)
    basic.show_leds("""
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        """)
def backward():
    maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CCW, 255)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 218)
    basic.show_leds("""
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        """)
def auto():
    forward()
    basic.pause(Math.floor(100 * 60 / 1155 * 1000))
    maqueen.motor_stop(maqueen.Motors.ALL)

def on_ir_callbackuser(message):
    if message == 64:
        forward()
    if message == 25:
        backward()
    if message == 7:
        left(1)
    if message == 9:
        right(1)
    if message == 21:
        maqueen.motor_stop(maqueen.Motors.ALL)
        basic.show_icon(IconNames.NO)
maqueen.IR_callbackUser(on_ir_callbackuser)

def forward():
    maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 255)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 218)
    basic.show_leds("""
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        """)
time = 0
basic.show_icon(IconNames.YES)

def on_forever():
    global time
    basic.pause(1)
    time += 1 / 1000
basic.forever(on_forever)
