function stop () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    0
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    0
    )
}
radio.onReceivedString(function (receivedString) {
    let speed = 0
    // 下方最左
    if (receivedString == "停止") {
        stop()
    }
    // 下方最左
    if (receivedString == "下") {
        sensors.DDMmotor(
        AnalogPin.P1,
        1,
        AnalogPin.P8,
        255
        )
        basic.pause(40)
        sensors.DDMmotor(
        AnalogPin.P1,
        1,
        AnalogPin.P8,
        0
        )
    }
    if (receivedString == "上") {
        sensors.DDMmotor(
        AnalogPin.P1,
        0,
        AnalogPin.P8,
        255
        )
        basic.pause(40)
        sensors.DDMmotor(
        AnalogPin.P1,
        1,
        AnalogPin.P8,
        0
        )
    }
    if (receivedString == "開") {
        sensors.DDMmotor(
        AnalogPin.P12,
        0,
        AnalogPin.P2,
        255
        )
        basic.pause(40)
        sensors.DDMmotor(
        AnalogPin.P12,
        1,
        AnalogPin.P2,
        0
        )
    }
    if (receivedString == "合") {
        sensors.DDMmotor(
        AnalogPin.P12,
        1,
        AnalogPin.P2,
        255
        )
        basic.pause(40)
        sensors.DDMmotor(
        AnalogPin.P12,
        1,
        AnalogPin.P2,
        0
        )
    }
    if (receivedString == "右轉") {
        sensors.DDMmotor(
        AnalogPin.P13,
        1,
        AnalogPin.P14,
        255
        )
        sensors.DDMmotor(
        AnalogPin.P15,
        1,
        AnalogPin.P16,
        255
        )
        basic.pause(40)
        stop()
    }
    if (receivedString == "左轉") {
        sensors.DDMmotor(
        AnalogPin.P13,
        0,
        AnalogPin.P14,
        speed - 75
        )
        sensors.DDMmotor(
        AnalogPin.P15,
        0,
        AnalogPin.P16,
        speed - 75
        )
        basic.pause(40)
        stop()
    }
    if (receivedString == "前進") {
        sensors.DDMmotor(
        AnalogPin.P13,
        1,
        AnalogPin.P14,
        speed
        )
        sensors.DDMmotor(
        AnalogPin.P15,
        0,
        AnalogPin.P16,
        speed
        )
        basic.pause(50)
        stop()
    }
    if (receivedString == "後退") {
        sensors.DDMmotor(
        AnalogPin.P13,
        0,
        AnalogPin.P14,
        speed
        )
        sensors.DDMmotor(
        AnalogPin.P15,
        1,
        AnalogPin.P16,
        speed
        )
        basic.pause(50)
        stop()
    }
})
basic.showLeds(`
    # # # # #
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
radio.setGroup(8)
