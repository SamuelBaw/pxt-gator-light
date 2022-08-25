/**
* Andy England @ SparkFun Electronics
* September 6, 2018
* https://github.com/sparkfun/pxt-light-bit

* Development environment specifics:
* Written in Microsoft Makecode
* Tested with a SparkFun gatorlight sensor and micro:bit
*
* This code is released under the [MIT License](http://opensource.org/licenses/MIT).
* Please review the LICENSE.md file included with this example. If you have any questions
* or concerns with licensing, please contact techsupport@sparkfun.com.
* Distributed as-is; no warranty is given.
*/


/**
 * Functions to operate the gatorlight sensor
 */


//% color=#f44242 icon="\uf185"
namespace gatorlight {

    // Functions for reading light from the gatorlight in lux or straight adv value

    /**
    * Reads the number
    */
    //% weight=30 blockId="xPos" block="Get LED xPos"
    export function xPos(): number{
      
        return getXPos()
      }
    
    //% weight=30 blockId="yPos" block="Get LED yPos"
    export function yPos(): number {

        return getYPos()
    }

	/**
     * Function used for simulator, actual implementation is in gatorlight.cpp
     */
    //% shim=gatorlight::getXPos
    function getXPos(): number {
        // Fake function for simulator
        return 0
    }
    /**
     * Function used for simulator, actual implementation is in gatorlight.cpp
     */
    //% shim=gatorlight::getYPos
    function getYPos(): number {
        // Fake function for simulator
        return 0
    }

    }
