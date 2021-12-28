function kakutei_O () {
    music.playTone(69, music.beat(BeatFraction.Quarter))
    music.playTone(370, music.beat(BeatFraction.Sixteenth))
    music.playTone(277, music.beat(BeatFraction.Sixteenth))
    music.playTone(740, music.beat(BeatFraction.Sixteenth))
    music.playTone(554, music.beat(BeatFraction.Sixteenth))
    for (let index = 0; index < 2; index++) {
        music.playTone(466, music.beat(BeatFraction.Sixteenth))
        music.playTone(370, music.beat(BeatFraction.Sixteenth))
        music.playTone(932, music.beat(BeatFraction.Sixteenth))
        music.playTone(740, music.beat(BeatFraction.Sixteenth))
        music.playTone(554, music.beat(BeatFraction.Sixteenth))
        music.playTone(466, music.beat(BeatFraction.Sixteenth))
        music.playTone(1108, music.beat(BeatFraction.Sixteenth))
        music.playTone(932, music.beat(BeatFraction.Sixteenth))
    }
    music.playTone(587, music.beat(BeatFraction.Sixteenth))
    music.playTone(466, music.beat(BeatFraction.Sixteenth))
    music.playTone(1174, music.beat(BeatFraction.Sixteenth))
    music.playTone(932, music.beat(BeatFraction.Sixteenth))
    for (let index = 0; index < 2; index++) {
        music.playTone(698, music.beat(BeatFraction.Sixteenth))
        music.playTone(587, music.beat(BeatFraction.Sixteenth))
        music.playTone(1174, music.beat(BeatFraction.Sixteenth))
        music.playTone(1396, music.beat(BeatFraction.Sixteenth))
    }
}
input.onButtonPressed(Button.AB, function () {
    if (button == 3) {
    	
    } else {
    	
    }
})
function millionGod () {
    music.setVolume(127)
    for (let index = 0; index < 1; index++) {
        for (let index = 0; index < 4; index++) {
            music.playTone(659, music.beat(BeatFraction.Eighth))
            music.playTone(330, music.beat(BeatFraction.Eighth))
            music.playTone(740, music.beat(BeatFraction.Eighth))
            music.playTone(370, music.beat(BeatFraction.Eighth))
            music.playTone(784, music.beat(BeatFraction.Eighth))
            music.playTone(392, music.beat(BeatFraction.Eighth))
            music.playTone(880, music.beat(BeatFraction.Eighth))
            music.playTone(440, music.beat(BeatFraction.Eighth))
        }
        for (let index = 0; index < 2; index++) {
            for (let index = 0; index < 2; index++) {
                music.playTone(698, music.beat(BeatFraction.Sixteenth))
                music.playTone(440, music.beat(BeatFraction.Sixteenth))
                music.playTone(698, music.beat(BeatFraction.Sixteenth))
                music.playTone(523, music.beat(BeatFraction.Sixteenth))
            }
            music.rest(music.beat(BeatFraction.Half))
            for (let index = 0; index < 3; index++) {
                music.playTone(831, music.beat(BeatFraction.Sixteenth))
                music.playTone(523, music.beat(BeatFraction.Sixteenth))
                music.playTone(831, music.beat(BeatFraction.Sixteenth))
                music.playTone(622, music.beat(BeatFraction.Sixteenth))
            }
            music.playTone(784, music.beat(BeatFraction.Sixteenth))
            music.playTone(466, music.beat(BeatFraction.Sixteenth))
            music.playTone(784, music.beat(BeatFraction.Sixteenth))
            music.playTone(587, music.beat(BeatFraction.Sixteenth))
        }
        for (let index = 0; index < 3; index++) {
            music.playTone(698, music.beat(BeatFraction.Sixteenth))
            music.playTone(440, music.beat(BeatFraction.Sixteenth))
            music.playTone(698, music.beat(BeatFraction.Sixteenth))
            music.playTone(523, music.beat(BeatFraction.Sixteenth))
        }
        music.rest(music.beat(BeatFraction.Half))
        for (let index = 0; index < 3; index++) {
            music.playTone(1108, music.beat(BeatFraction.Sixteenth))
            music.playTone(698, music.beat(BeatFraction.Sixteenth))
            music.playTone(1108, music.beat(BeatFraction.Sixteenth))
            music.playTone(831, music.beat(BeatFraction.Sixteenth))
        }
        for (let index = 0; index < 3; index++) {
            music.playTone(932, music.beat(BeatFraction.Sixteenth))
            music.playTone(587, music.beat(BeatFraction.Sixteenth))
            music.playTone(932, music.beat(BeatFraction.Sixteenth))
            music.playTone(698, music.beat(BeatFraction.Sixteenth))
        }
        for (let index = 0; index < 3; index++) {
            music.playTone(740, music.beat(BeatFraction.Sixteenth))
            music.playTone(466, music.beat(BeatFraction.Sixteenth))
            music.playTone(740, music.beat(BeatFraction.Sixteenth))
            music.playTone(554, music.beat(BeatFraction.Sixteenth))
        }
        for (let index = 0; index < 12; index++) {
            music.playTone(932, music.beat(BeatFraction.Sixteenth))
            music.playTone(587, music.beat(BeatFraction.Sixteenth))
            music.playTone(932, music.beat(BeatFraction.Sixteenth))
            music.playTone(698, music.beat(BeatFraction.Sixteenth))
        }
    }
    return 0
}
function hyun () {
    for (let index = 0; index < 1; index++) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        button = 0
    }
}
let button = 0
music.setTempo(145)
button = 3
hyun()
basic.forever(function () {
    if (button == 0 && input.buttonIsPressed(Button.A)) {
        music.playTone(20, music.beat(BeatFraction.Half))
        basic.showLeds(`
            . # # # .
            . # . . .
            . # . # .
            . # . # .
            . # # # .
            `)
        basic.pause(500)
        button = 1
    } else if (button == 0) {
        basic.showLeds(`
            . . . . .
            # . . . .
            # # . . .
            # . . . .
            . . . . .
            `)
    } else if (button == 1 && input.buttonIsPressed(Button.AB)) {
        kakutei_O()
        basic.showLeds(`
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
        basic.pause(500)
        button = 2
    } else if (button == 1) {
        basic.showLeds(`
            . . . . .
            # . . . #
            # # . # #
            # . . . #
            . . . . .
            `)
    } else if (button == 2 && input.buttonIsPressed(Button.B)) {
        music.playTone(15, music.beat(BeatFraction.Whole))
        music.playTone(5, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . # # . .
            . # . # .
            . # . # .
            . # . # .
            . # # . .
            `)
        basic.pause(2000)
        millionGod()
        basic.pause(1000)
        button = 0
    } else if (button == 2) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # #
            . . . . #
            . . . . .
            `)
    } else {
        basic.clearScreen()
    }
})
