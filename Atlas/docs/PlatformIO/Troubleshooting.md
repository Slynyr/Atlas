---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Function Not Declared in Scope

Coming over from Arduino IDE, you may notice that some of your projects may not work out of the box. In most cases, this is due to methods not being declared in scope. The Arduino IDE compiler is a little beginner friendly and in a way attempts to hold your hand when it comes to making declaration mistakes as shown below. PlatformIO is a little less forgiving but learning to do it right is really simple!

### Incorrect way to do it (Fixed by Arduino IDE Compiler)

```cpp
void setup() {}

void loop() {
    int number = method1(1); 
}

int method1(int value) {
    return value; 
}
```

### Why is this wrong?
In the example above, ```method1()``` is called within ```loop()``` however, the method is only declared after the ```loop()``` function. When the compiler attempts to compile the code, it cannot find a reference to ```method1()``` because the function hasn't been declared before its usage. To put it simply, the code is parsed sequentially from top to bottom, so the compiler needs to know about a function before it encounters a call to it. To resolve this, you can use one of the three methods listed below. 
<Tabs>
    <TabItem value="movingmethodup" label="Moving Method Up" default>
        ```cpp
        int method1(int value) {
            return value; 
        }

        void setup() {}

        void loop() {
            int number = method1(1);
        }
        ```

        ### Explanation

        In this example, ```method1()``` is simply moved above ```loop()``` where its first called. By doing so, the compiler would have already gone over the method when it reaches the call in ```loop()```.

    </TabItem>
    <TabItem value="declaringMethodAbove" label="Adding Declaration Above" default>
        ```cpp
        int method1(int value);

        void setup() {}

        void loop() {
            int number = method1(1); 
        }

        int method1(int value) {
            return value; 
        }
        ```

        ### Explanation
        In this example, instead of moving the ```method1()``` above ```loop()```, we declare the method signature at the top of the script. This tells the compiler that ```method1()``` exists and will be defined later. If you want to avoid the use of a header file, this is one of the neatest ways of solving this issue. 

    </TabItem>
    <TabItem value="usingHeaderFile" label="Using Header File" default>
        #### Script.cpp

        ```cpp
        #include "script.h"

        void setup() {}

        void loop() {
            int number = method1(1); 
        }

        int method1(int value) {
            return value; 
        }
        ```

        #### script.h
        ```cpp
        #ifndef SCRIPT_H
        #define SCRIPT_H

        int method1(int value); 

        #endif
        ```

        ### Explanation
        By creating a header file and including it at the top of your script, you allow the compiler to recognize method declarations before they are fully defined. Amongst many other benefits, using a header file is by far the neatest solution of the three and can prove useful in larger projects. You can learn more about the utilization of header files [here](/docs/Programming/Header%20Files). 
    </TabItem>
</Tabs>

:::note
If you choose to create a header file, ensure that the file has the same exact name as the target script **(e.g. ```main.cpp``` & ```main.h```)**. Also note that when creating your #ifndef and #define statements, you have to use the filename in all capital letters, and with spaces and full stops replaced by "_". For example, ```test script.h``` would be defined as ```ifndef TEST_SCRIPT_H```.  
:::

***

## Unable to Deploy to Microcontroller
When using ESP32s and many other MCUs, at times you may find that you are unable to upload your code. This is often accompanied by an ```Exit status 1``` or ```Exit status 2``` error thrown in your terminal. More often than not, this is due to the serial port being busy. Many MCUs have serial ports which are used not only for transmitting serial data, but also for handling different processes such as Bluetooth or WiFi. Most MCU devkits use serial 1 for uploading firmware/code which means that if the serial port is busy, your IDE won't be able to make a successful upload. While some boards may have the capability of automatically interrupting busy serial ports, sometimes this process doesn't work as intended which means you will have to manually interrupt the MCU as shown below.    

### Manually Interrupting Microcontroller (ESP32)

On your ESP32 devkit, you should see 2 buttons. ```Boot``` and ```Reset/Enable```. Firmly hold the ```Boot``` button for a few seconds and then while still holding the ```Boot``` button, click the ```Reset/Enable``` button. You may then release all buttons and upload  your code. If this doesn't work, you can also try to not release the ```Boot``` button after clicking ```Reset/Enable``` until the upload begins. 

<p align="center">
  <img src="/img/Interrupt_ESP32.png" alt="PlatformIO Banner"/>
</p>

:::note
    If you manually interrupt the controller, your newly uploaded code will not run on its own. You need to click reset once more in order to restart the microcontroller after it has been interrupted. 
:::
