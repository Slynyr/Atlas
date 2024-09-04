---
sidebar_position: 1
---

## Overview

All of the examples provided on this page are written using the Arduino framework. If you are new to Arduino or microcontroller programming it is important to understand the basics of how the framework functions

## Understanding Setup and Loop

When you first create an Arduino project, it will likely look something like the code snippet below. Everything within ```setup() {}``` is ran once when the device/microcontroller boots. You can use this function to initialize different components of your code. Everything within ```loop() {}``` is ran on every tick. This is where the majority of your program will be. 

```cpp
#include <Arduino.h>

void setup() {}

void loop() {}
```

## Using Pins and Serial

The example below shows how microcontroller pins can be initialized and used. More importantly, it also goes over how you can use the serial monitor for both debugging and printing data/states. Most of the time, using serial prints is one of the most efficient ways of debugging and understanding what is going on in your code. You can easily read serial data from your microcontroller using the serial monitor. Please note that while PlatformIO does come with a built-in serial monitor, there is a much better serial monitor extension available from Microsoft. If you haven't already installed it, it would be highly suggested that you go to the [installation section](/docs/PlatformIO/Installation) and follow the steps provided. 

```cpp
#include <Arduino.h>

#define LED_PIN 1       // Defining LED pin
#define BUTTON_PIN 2    // Defining Button pin

void setup() {
    Serial.begin(115200);                   // Initializing serial with a baud rate of 115200
    Serial.println("Initializing pins");    // Printing to serial

    pinMode(LED_PIN, OUTPUT);               // Setting pin mode of LED pin to output
    pinMode(BUTTON_PIN, INPUT_PULLUP);      // Initializing button pin as an input 
}

void loop() {
    bool isButtonPressed = digitalRead(BUTTON_PIN); // Reading button state 
    Serial.println(isButtonPressed);                // Printing button state to serial

    // Checking if button is pressed
    if (isButtonPressed) {                           
        digitalWrite(LED_PIN, HIGH);                // Setting LED state to on
    } else {
        digitalWrite(LED_PIN, LOW);                 // Setting LED state to off
    }
}
```

