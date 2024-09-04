---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## What are header files?
In C and C++, header files are files that contain declarations of functions, variables, constants, macros, and data types. They serve as an interface between different parts of a program, allowing functions and variables defined in one file to be accessed in another. Header files are particularly useful for organizing large projects, as they help keep the codebase modular and maintainable by separating declarations from the actual implementation.

## Using Header files
### File Structure
Below is an example of what a typical project file structure would look like, containing a header file for randomizer.cpp. In this situation, there are functions we want to use from randomizer.cpp in main.cpp and in order to do so, you would need to create a header file for randomizer.cpp. When creating header files, ensure that they have the same name as the C++ script they are storing declarations for (```randomizer.cpp``` | ```randomizer.h```).

```
ProjectName/
│
└── src/
    ├── main.cpp
    ├── randomizer.cpp
    └── randomizer.h
```

### Creating Header File
<Tabs>
    <TabItem value="randomizer.cpp" label="randomizer.cpp" default>
        ```cpp
        #include <Arduino.h>

        int getRandomNumber(int min, int max) {
            return random(min, max); // Returning a random number between min and max
        }
        ```
    </TabItem>
    <TabItem value="randomizer.h" label="randomizer.h" default>
        ```cpp
        #ifndef RANDOMIZER_H // Definition must match file name in all caps with spaces and dots replaced with "_"
        #define RANDOMIZER_H // Definition must match file name in all caps with spaces and dots replaced with "_"

        int getRandomNumber(int min, int max); // Declaring function from randomizer.cpp

        #endif              // Ending Header
        ```
    </TabItem>
</Tabs>

### Importing and Utilizing Header File 
Now that a header file for randomizer.cpp has been created, you will be able to access ```int getRandomNumber(min, max)``` by simply importing the header file wherever you need the function. As shown in the example below, the header is imported in main, allowing for the function to be called without it being declared in the same script. 

```cpp
#include <Arduino.h>
#include "randomizer.h"     // Importing randomizer.cpp header

void setup() {
    Serial.begin(115200);   // Initializing Serial with baud rate of 115200
}

void loop() {
    int randomNumber = getRandomNumber(1, 100);     // Using method from randomizer.cpp and generating a random number between 1 and 100 
    Serial.println(randomNumber);                   // Printing generated number 
    delay(5000);                                    // Adding a 5 second delay between every number generation
}

```

