//% weight=100 color=#0fbc11 icon="⏱" block="Timer"
namespace timer {
    let startTime = 0
    let elapsedTime = 0
    let running = false

    /**
     * Start the timer
     */
    //% block
    export function startTimer(): void {
        if (!running) {
            startTime = control.millis()
            running = true
        }
    }

    /**
     * Stop the timer
     */
    //% block
    export function stopTimer(): void {
        if (running) {
            elapsedTime += control.millis() - startTime
            running = false
        }
    }

    /**
     * Reset the timer
     */
    //% block
    export function resetTimer(): void {
        startTime = 0
        elapsedTime = 0
        running = false
    }

    /**
     * Get the elapsed time in milliseconds
     */
    //% block
    export function getElapsedTime(): number {
        if (running) {
            return elapsedTime + (control.millis() - startTime)
        } else {
            return elapsedTime
        }
    }
}
