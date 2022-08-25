/**
* Andy England @ SparkFun Electronics
* September 6, 2018
* https://github.com/sparkfun/pxt-light-bit
*
* Development environment specifics:
* Written in Microsoft PXT
* Tested with a SparkFun temt6000 sensor and micro:bit
*
* This code is released under the [MIT License](http://opensource.org/licenses/MIT).
* Please review the LICENSE.md file included with this example. If you have any questions
* or concerns with licensing, please contact techsupport@sparkfun.com.
* Distributed as-is; no warranty is given.
*/
#include "pxt.h"
#include <cstdint>
#include <math.h>

using namespace pxt;

int xPos = 0;
int yPos = 0;

namespace gatorlight {
    /*
    * Calculates the light in Lux based on the ADC value passed in. 1 step in adcVal is equal to .488 uA or .976 lux at 5V
    */
    //%
    uint16_t getLux() {
        int bla = 2;
        return bla;
    }

    uint16_t getXPos() {
        xPos = xPos + 1;
        if(xPos == 5)
        {
            xPos = 0
        }
        return xPos;
    }

    uint16_t getYPos() {
        yPos = yPos + 1;
        if(yPos == 5)
        {
            yPos = 0
        }
        return yPos;
    }

}
