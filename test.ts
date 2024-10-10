// Import the timer namespace (assuming it's already part of the extension)
timer.startTimer()  // Start the timer

// Wait for 2 seconds (2000 milliseconds) to simulate a short delay
basic.pause(2000)

let elapsed = timer.getElapsedTime()  // Get the elapsed time

// Display the elapsed time on the LED screen
basic.showString("Time: ")
basic.showNumber(elapsed)  // Should show around 2000 (milliseconds)

// Wait another 1 second (1000 milliseconds)
basic.pause(1000)

// Stop the timer
timer.stopTimer()

// Get and display the final elapsed time
elapsed = timer.getElapsedTime()  // Get the elapsed time (should be 3000 ms now)
basic.showString("Final Time: ")
basic.showNumber(elapsed)

// Reset the timer
timer.resetTimer()
basic.showString("Timer Reset")
