let stred = [2, 2]
led.plotBrightness(stred[0], stred[1], 155)
let triangle = [[0, 1], [1, 2], [2, 0]]
function rozsvitBody() {
    basic.clearScreen()
    led.plotBrightness(stred[0], stred[1], 155)
    for (let bod of triangle) {
        led.plot(bod[0], bod[1])
    }
}

rozsvitBody()
function otoc(vpravo: boolean) {
    let tempNula: number;
    for (let i = 0; i < 3; i++) {
        tempNula = triangle[i][0]
        if (vpravo) {
            triangle[i][0] = -triangle[i][1] + stred[1] + stred[0]
            triangle[i][1] = tempNula - stred[0] + stred[1]
        } else {
            triangle[i][0] = triangle[i][1] - stred[1] + stred[0]
            triangle[i][1] = -tempNula + stred[0] + stred[1]
        }
        
    }
    rozsvitBody()
}

// +90°
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    otoc(true)
})
// -90°
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    otoc(false)
})
