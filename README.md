# micro:bit Timer Extension

The **micro:bit Timer Extension** allows users to easily add timer functionality to their BBC micro:bit projects. It includes blocks for starting, stopping, resetting, and getting the elapsed time. Ideal for time-based tasks in games, experiments, or educational projects.

## Features

- **Start Timer**: Begin tracking time when needed.
- **Stop Timer**: Pause the timer and record the elapsed time.
- **Reset Timer**: Reset the timer back to zero.
- **Get Elapsed Time**: Retrieve the total elapsed time in milliseconds.

## Blocks

- `startTimer()`: Starts the timer.
- `stopTimer()`: Stops the timer and saves the elapsed time.
- `resetTimer()`: Resets the timer to zero.
- `getElapsedTime()`: Returns the total time passed since the timer started, in milliseconds.

## Example Usage

Here’s a simple example of how to use the timer in a micro:bit project:

```javascript
let running = true

// Start the timer
timer.startTimer()

// Main loop to check elapsed time and stop the code after 3 seconds
basic.forever(function () {
    // Check if the timer has reached 3 seconds (3000 milliseconds) and the code is still running
    if (running && timer.getElapsedTime() >= 3000) {
        // Stop the code execution
        running = false
        basic.clearScreen()
        basic.showString("STOP")  // Display "STOP" when the timer reaches 3 seconds
    } else if (running) {
        // Code to execute before the 3-second timer ends
        basic.showIcon(IconNames.Heart)  // Show a heart icon
        basic.pause(1000)                // Wait for 1 second
        basic.showIcon(IconNames.SmallHeart)  // Show a small heart icon
        basic.pause(1000)                // Wait for 1 second
    }
})

```

## Example Usage
### Installation
To use this extension in your micro:bit project:

- Open the MakeCode Editor.
- Click on the Extensions under the gearwheel menu.
- Paste this GitHub repository URL: https://github.com/sunnydesigntech/Timer-Extension in the search box.
- Add the extension to your project and use the timer blocks from the timer namespace.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

