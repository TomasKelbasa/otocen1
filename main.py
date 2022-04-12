stred = [2, 2]
led.plot_brightness(stred[0], stred[1], 155)

triangle = [[0,1], [1,2], [2,0]]

def rozsvitBody():
    basic.clear_screen()
    led.plot_brightness(stred[0], stred[1], 155)
    for bod in triangle:
        led.plot(bod[0], bod[1])

rozsvitBody()

def otoc(vpravo):
    for i in range(0, 3):
        tempNula = triangle[i][0]
        if vpravo:
            triangle[i][0] = -triangle[i][1] + stred[1] + stred[0]
            triangle[i][1] = tempNula - stred[0] + stred[1]
        else:
            triangle[i][0] = triangle[i][1] - stred[1] + stred[0]
            triangle[i][1] = -tempNula + stred[0] + stred[1]
    rozsvitBody()

def on_button_pressed_a():
    otoc(True)
    #+90°
input.on_button_pressed(Button.A, on_button_pressed_a)
def on_button_pressed_b():
    otoc(False)
    #-90°
input.on_button_pressed(Button.B, on_button_pressed_b)