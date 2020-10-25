let height = 0
let sum_height = 0
let counter_short = 0
let counter_medium = 0
let counter_tall = 0
let average = 0
let number = 0
let random_number = 0
let counter_green = 0
let counter_blue = 0
let counter_red = 0
let counter_even = 0
let counter_odd = 0
let counter = 0
let angle = 0
let x = 0
let y = 0
input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 30; index++) {
        height = randint(100, 200)
        basic.showNumber(height)
        sum_height += height
        sum_height = sum_height + height
        if (height <= 150) {
            basic.showNumber(height)
            basic.showString("short person")
            counter_short += 1
        } else if (height >= 151 || height <= 170) {
            basic.showNumber(height)
            basic.showString("medium height")
            counter_medium += 1
        } else if (height >= 171) {
            basic.showNumber(height)
            basic.showString("tall person")
            counter_tall += 1
        }
    }
    basic.showString("total short persons")
    basic.showNumber(counter_short)
    basic.showString("total medium persons")
    basic.showNumber(counter_medium)
    basic.showString("total tall persons")
    basic.showNumber(counter_tall)
    average = sum_height / 30
    basic.showString("average height")
    basic.showNumber(average)
})
input.onButtonPressed(Button.A, function () {
    number = 0
    while (number <= 9) {
        number += 1
        random_number = randint(1, 6)
        if (random_number == 1 || random_number == 3) {
            basic.showString("team green")
            counter_green += 1
        } else if (random_number == 2 || random_number == 5) {
            basic.showString("team blue")
            counter_blue += 1
        } else {
            basic.showString("team red")
            counter_red += 1
        }
    }
    basic.showNumber(counter_green)
    basic.showNumber(counter_blue)
    basic.showNumber(counter_red)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 10; index++) {
        number = randint(1, 100)
        basic.showNumber(number)
        if (number % 2 == 0) {
            basic.showString("even")
            counter_even += 1
        } else {
            basic.showString("odd")
            counter_odd += 1
        }
    }
    basic.showString("total even")
    basic.showNumber(counter_even)
    basic.showString("total odd")
    basic.showNumber(counter_odd)
})
input.onPinPressed(TouchPin.P1, function () {
    counter = 0
    for (let index = 0; index < 10; index++) {
        angle = randint(0, 180)
        if (angle < 90) {
            basic.showString("acute")
        } else if (angle == 90) {
            basic.showString("straight")
        } else {
            basic.showString("obtuse")
            counter += 1
        }
    }
    basic.showNumber(counter)
    basic.clearScreen()
})
basic.forever(function () {
    while (input.pinIsPressed(TouchPin.P2)) {
        x = randint(0, 5)
        y = randint(0, 5)
        led.plot(x, y)
        basic.pause(300)
        if (x == y) {
            music.playMelody("A E F G C5 E D B ", 120)
        } else {
            music.playTone(494, music.beat(BeatFraction.Half))
        }
    }
    led.unplot(x, y)
})
