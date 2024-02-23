# Simple demo of of the WS2801/SPI-like addressable RGB LED lights.
import time
import RPi.GPIO as GPIO
import random

# Import the WS2801 module.
import Adafruit_WS2801
import Adafruit_GPIO.SPI as SPI
 
from colour import Color
from collections import deque

# Configure the count of pixels:
PIXEL_COUNT = 160
 
# Alternatively specify a hardware SPI connection on /dev/spidev0.0:
SPI_PORT   = 0
SPI_DEVICE = 0
pixels = Adafruit_WS2801.WS2801Pixels(PIXEL_COUNT, spi=SPI.SpiDev(SPI_PORT, SPI_DEVICE), gpio=GPIO)

def adjustBrightness(colour, amount):
    for i in range(len(colour)):
        colour[i] = colour[i] + amount
    return colour

def easeInOutQuad(t, b, c, d):
	t /= d/2
	if t < 1:
		return c/2*t*t + b
	t-=1
	return -c/2 * (t*(t-2) - 1) + b

def randomiseIntensity (pixels, colour=[40, 210, 210], adjustmentRange=40):
    pixelIntensityRangeMap = []
    for i in range(pixels.count()):
        # Create randomised amount of variance within the adjustment range for each pixel and store it
        adjustment = random.randint( 1 , adjustmentRange + 1 )
        pixelIntensityRangeMap.append({
            'adjustment': adjustment,
            'inc': True if random.randint(1,2) == 1 else False
        })
        # Set the starting colour
        pixels.set_pixel(i, Adafruit_WS2801.RGB_to_color( colour[0], colour[2], colour[1]))
    pixels.show()
    # Loop through each pixel and adjust it's colour by 1 until we hit the range limit or colour limit (0 or 255)
    while 1 == 1:
        for i in range(pixels.count()):
            pixelColour = list(pixels.get_pixel_rgb(i))
            if pixelIntensityRangeMap[i]['inc']:
                if pixelColour[0] != colour[0] + pixelIntensityRangeMap[i]['adjustment']:
                    pixelColour = adjustBrightness(pixelColour, 1)
                else:
                    pixelIntensityRangeMap[i]['inc'] = False
                    pixelColour = adjustBrightness(pixelColour, -1)
            else:
                if pixelColour[0] != colour[0] - pixelIntensityRangeMap[i]['adjustment']:
                    pixelColour = adjustBrightness(pixelColour, -1)
                else:
                    pixelIntensityRangeMap[i]['inc'] = True
                    pixelColour = adjustBrightness(pixelColour, 1)
            pixels.set_pixel(i, Adafruit_WS2801.RGB_to_color( pixelColour[0], pixelColour[2], pixelColour[1]))
        pixels.show()
        time.sleep(0.3)

def cyclicalAnimatedGradient(pixels, startColour=Color('yellow'), endColour=Color('pink')):
    # Create the gradient across half of the pixels
    gradientColours = deque(startColour.range_to(endColour, PIXEL_COUNT / 2))
    # Create the reverse of the gradient across the second half of the pixels so it appears cyclical
    gradientColours += deque(endColour.range_to(startColour, PIXEL_COUNT / 2))
    while 1 == 1:
        for i in range(pixels.count()):
            pixels.set_pixel(i, Adafruit_WS2801.RGB_to_color( int(gradientColours[i].rgb[0] * 255), int(gradientColours[i].rgb[2] * 255), int(gradientColours[i].rgb[1] * 255)))
        pixels.show()
        gradientColours.rotate(1)
        time.sleep(0.05)
        

def bounce(pixels, colour=(0, 0, 0)):
    pos = 0
    bgColour = (255, 255, 255)
    while 1 == 1:
        if pos == pixels.count() - 1:
            loopRange = reversed(range(pixels.count()))
        else:
            loopRange = range(pixels.count()) 
        for pos in loopRange:
            for i in range(pixels.count()):
                pxColour = bgColour
                if i == pos - 1 or i == pos or i == pos +1:
                    pxColour = colour
                pixels.set_pixel(i, Adafruit_WS2801.RGB_to_color( pxColour[0], pxColour[1], pxColour[2] ))
            pixels.show()
        # for pos in reversed(range(pixels.count())):
        #     for i in range(pixels.count()):
        #         pxColour = bgColour
        #         if i == pos:
        #             pxColour = colour
        #         pixels.set_pixel(i, Adafruit_WS2801.RGB_to_color( pxColour[0], pxColour[1], pxColour[2] ))
        #     pixels.show()
        #     time.sleep(0.0001)
 
if __name__ == "__main__":
    # Clear all the pixels to turn them off.
    pixels.clear()
    pixels.show()  # Make sure to call show() after changing any pixels!

    cyclicalAnimatedGradient(pixels)
