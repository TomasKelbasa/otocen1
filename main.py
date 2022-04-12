stred = [2, 2]
led.plot_brightness(stred[0], stred[1], 155)

bodA = [0,0]
bodB = [0,2]
bodC = [2,0]

def rozsvitBody():
    led.plot(bodA[0], bodA[1])
    led.plot(bodB[0], bodB[1])
    led.plot(bodC[0], bodC[1])

rozsvitBody()