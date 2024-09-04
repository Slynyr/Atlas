---
title: Non-Blocking Timers
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Blocking vs Non-Blocking

When developing your projects, you may find the need to make use of a timer/delay. Within the Arduino framework, the simplest way to create a delay is by using the ```delay(<Time in ms>)``` method however, it does have its downsides. When the ```delay()``` is called, the whole main loop is paused while waiting for the delay to finish. This means that the whole microcontroller effectively pauses, preventing your program from carrying out any other tasks. 

### Example
Below is an example of both a blocking and non-blocking implementation for switching an LED on/off every 5 seconds. If you are having trouble understanding the difference between the two, upload the script to an Arduino or ESP32 and open the serial monitor. You will notice that the ```"Im Running"``` print statement will only run once every 5 seconds on the blocking version in comparison to constantly on the non-blocking version. 

<Tabs>
    <TabItem value="blocking" label="Blocking" default>
        ```cpp
        #include <Arduino.h>

        #define LED_PIN 1                   // Defining LED pin
        long stateChangeInterval = 5000;    // Defining LED state change interval (ms)

        void setup() {
            Serial.begin(115200);           // Initializing Serial
            pinMode(LED_PIN, OUTPUT);       // Setting pin mode for LED as OUTPUT
        }

        void loop() {
            Serial.println("Im running");   // Printing to serial
            digitalWrite(LED_PIN, HIGH);    // Setting LED state to ON
            delay(stateChangeInterval);     // Waiting 5000ms
            digitalWrite(LED_PIN, LOW);     // Setting LED state to OFF
            delay(stateChangeInterval);     // Waiting 5000ms
            // Last delay above is required as the loop starts again from the top which has no delay
            // Without it, the LED would be turned off and then immediately on again
        }
        ```
    </TabItem>
    <TabItem value="nonBlocking" label="Non-Blocking" default>
        ```cpp
        #include <Arduino.h>

        #define LED_PIN 1                   // Defining LED pin
        long lastStateChange = millis();    // Defining LED state change interval (ms)
        long stateChangeInterval = 5000;    // Defining interval between state changes (5000ms)
        bool isLEDOn = false;               // Defining LED state (on/off)

        void manageLEDState();              // Declaring LED management method from below

        void setup(){
            Serial.begin(115200);           // Initializing Serial with baud rate of 115200
            pinMode(LED_PIN, OUTPUT);       // Setting pin mode of LED pin to output
        }

        void loop(){
            Serial.println("Im running!");  // Printing to serial
            manageLEDState();               // Calling LED manager method
        }

        void manageLEDState() {
            // Checking if it has been more than 5000ms since the last time change
            if ((millis() - lastStateChange) > stateChangeInterval) {
                lastStateChange = millis();                     // Updating state change timestamp
                isLEDOn = !isLEDOn;                             // Flipping LED state
                digitalWrite(LED_PIN, isLEDOn ? HIGH : LOW);    // Setting LED pin to LED state
            }
        }
        ```
        </TabItem>
</Tabs>

:::note

LED is not required to run the script. If you want to try the script out yourself, you can rely on the print statement to get a better understanding

:::

