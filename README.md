# Sleep Calculator App

## Overview

This simple JavaScript application helps you calculate and analyze your sleep patterns. It provides information about the total sleep hours you've had during the week, compares it to your ideal sleep hours, and informs you whether you're meeting your sleep goals.

## Features

- **getActualSleepHours()**: Calculates the total actual hours of sleep you've had in a week. It uses predefined sleep hours for each day of the week.

- **getIdealSleepHours(idealHoursPerNight)**: Allows you to specify the ideal number of sleep hours per night. This function then calculates the ideal total sleep hours for the entire week based on your input.

- **calculateSleepDebt(idealHoursPerNight)**: Compares your actual sleep hours to your ideal sleep hours. It provides feedback on whether you're getting enough sleep or if you need to adjust your sleep habits.

## How to Use

1. Clone or download this repository to your local machine.

2. Open the `index.js` file in your code editor.

3. Modify the values inside the functions to match your own sleep patterns if needed.

4. Run the code using a JavaScript runtime environment (e.g., Node.js) or execute it in a web browser's developer console.

5. Check the output in the console to see your total sleep hours and sleep status.

6. You can also customize the ideal sleep hours by passing an argument to `getIdealSleepHours(idealHoursPerNight)` and `calculateSleepDebt(idealHoursPerNight)`.

## Example

```javascript
console.log(calculateSleepDebt(8)); // Calculates sleep debt with an ideal of 8 hours per night.
