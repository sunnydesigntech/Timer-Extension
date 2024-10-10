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
// Start the timer when button A is pressed
input.onButtonPressed(Button.A, function () {
    timer.startTimer()
})

// Stop the timer when button B is pressed
input.onButtonPressed(Button.B, function () {
    timer.stopTimer()
})

// Display the elapsed time on the LED screen in milliseconds
basic.forever(function () {
    basic.showNumber(timer.getElapsedTime())
})
```

## Example Usage
### Installation
To use this extension in your micro:bit project:

- Open the MakeCode Editor.
- Click on the Extensions under the gearwheel menu.
- Paste this GitHub repository URL: "https://github.com/sunnydesigntech/Timer-Extension" in the search box.
- Add the extension to your project and use the timer blocks from the timer namespace.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

