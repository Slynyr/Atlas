---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

[RemoteXY](https://remotexy.com/) is a quick and simple way of controlling WiFi enabled microcontrollers such as the ESP32 with your smartphone. The majority of the scripting is done through the RemoteXY online editor which allows you to throw together simple interfaces with minimal programming knowledge. Please do note that compared to other methods of controlling the ESP32 over WiFi, in order to use RemoteXY, you are required to use the mobile app. If you want to make your project more accessible, perhaps consider using a web page instead.

:::note
    There are alternative ways of implementing controls that do not require the user to install an app. You can find an example of this in the ```Web Server Control``` lab
:::

## Objectives
- Utilize RemoteXY to control an LED connected to an ESP32

## Wiring Diagram
<p align="center">
  <img src="/Atlas/img/LAB-BasicIO.png" alt="PlatformIO Banner"/>
</p>

## Implementing RemoteXY
### Creating Interface
Navigate to the RemoteXY website and open the editor. Once you are in the editor, you will be presented with a variety of different types of controls, sensors, and indicators. For the purposes of this example, you only need a way of toggling the LED. In order to do so, drag a switch from the Elements panel to the smartphone. The arrangement of widgets/elements will be reflected on your smartphone as displayed in the editor. 
<p align="center">
  <img src="/Atlas/img/RemoteXYElements.png" alt="PlatformIO Banner"/>
</p>

### Configuring Element and Generating Code
Once you have placed an element on the screen, you can edit its properties on the right-hand side of the editor. While there are many different properties you can edit such as style, color, captions, etc, the most important of all is ```Variable (C++ rules):```. This is the variable to which the value/state of your widget/element will be written to. Once you have finished editing, you can generate the code by clicking the ```Get source code``` button on the top right. 
<p align="center">
  <img src="/Atlas/img/RemoteXYCode.png" alt="PlatformIO Banner"/>
</p>

### Implementing Code
Once you click ```Get source code```, the editor will automatically generate the required code that will allow you to interface with the RemoteXY mobile app. Create a new PlatformIO project and paste the code in. Avoid touching anything under ```RemoteXY include library``` as this is auto generated and should not require tinkering. You can implement your code below ```END RemoteXY include ``` as shown in the example below. 
Please also note that you will need to install the [RemoteXY library](https://registry.platformio.org/libraries/remotexy/RemoteXY) in order for the generated code to work properly. 

```cpp
/*
-- New project --

This source code of graphical user interface 
has been generated automatically by RemoteXY editor.
To compile this code using RemoteXY library 3.1.13 or later version 
download by link http://remotexy.com/en/library/
To connect using RemoteXY mobile app by link http://remotexy.com/en/download/                   
    - for ANDROID 4.13.13 or later version;
    - for iOS 1.10.3 or later version;
    
This source code is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.    
*/

//////////////////////////////////////////////
//        RemoteXY include library          //
//////////////////////////////////////////////

// you can enable debug logging to Serial at 115200
//#define REMOTEXY__DEBUGLOG    

// RemoteXY select connection mode and include library 
#define REMOTEXY_MODE__SOFTSERIAL

#include <SoftwareSerial.h>

// RemoteXY connection settings 
#define REMOTEXY_SERIAL_RX 2
#define REMOTEXY_SERIAL_TX 3
#define REMOTEXY_SERIAL_SPEED 9600


#include <RemoteXY.h>

// RemoteXY GUI configuration  
#pragma pack(push, 1)  
uint8_t RemoteXY_CONF[] =   // 36 bytes
{ 255,1,0,0,0,29,0,17,0,0,0,31,1,106,200,1,1,1,0,2,
33,77,44,22,1,2,26,31,31,79,78,0,79,70,70,0 };

// this structure defines all the variables and events of your control interface 
struct {

    // input variables
uint8_t switch_01; // =1 if switch ON and =0 if OFF

    // other variable
uint8_t connect_flag;  // =1 if wire connected, else =0

} RemoteXY;   
#pragma pack(pop)

/////////////////////////////////////////////
//           END RemoteXY include          //
/////////////////////////////////////////////

#define LED_PIN 25 // Defining LED pin 
bool lastSwitchState = false; 

void setup() 
{
    RemoteXY_Init (); 

    pinMode(LED_PIN, OUTPUT); // Setting pin mode for LED pin to OUTPUT
}

void loop() 
    { 
    RemoteXY_Handler ();

    // Checking if state has changed since last tick for optimization purposes
    if (switch_01 != lastSwitchState) {
        lastSwitchState = switch_01;
        // Checking state of switch variable | NOTE: This whole if statement can be replaced with a ternary 
        if (switch_01) {
            digitalWrite(LED_PIN, HIGH); // Turning LED on
        } else { 
            digitalWrite(LED_PIN, LOW); // Turning LED off
        }
    } 
}
```

### Connecting App 
[Download the RemoteXY app](https://remotexy.com/en/download/) from the app store and boot your ESP32/device. After a few seconds, you should see a RemoteXY WiFi network appear.
Once you have connected to it and launched the app, the interface you created in the editor should now be reflected on your device. You should now be able
to use the buttons to toggle the LED between on/off! 



