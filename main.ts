let stred = [2, 2]
led.plotBrightness(stred[0], stred[1], 155)
let bodA = [0, 0]
let bodB = [0, 2]
let bodC = [2, 0]
function rozsvitBody() {
    led.plot(bodA[0], bodA[1])
    led.plot(bodB[0], bodB[1])
    led.plot(bodC[0], bodC[1])
}

rozsvitBody()
