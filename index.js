const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let weekDays = new Set(days);

function getActualSleepHours() {
  // Use literal numbers to represent sleep hours for each day and sum them.
  return 8 + 8 + 8 + 8 + 8 + 8 + 8; // Assuming 8 hours per night for all days.
}

// design getIdealSleepHours() to accept an argument for ideal hours per night
function getIdealSleepHours(idealHoursPerNight) {
  return idealHoursPerNight * 7; // Calculate ideal hours per week.
}

function calculateSleepDebt(idealHoursPerNight) {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(idealHoursPerNight); // Pass the ideal hours as an argument.

  let difference = actualSleepHours - idealSleepHours;
  console.log('The difference in sleep hours is ' + difference);
  if (actualSleepHours > idealSleepHours) {
    return 'You slept ' + difference + ' hours more than ideal.';
  } else if (actualSleepHours === idealSleepHours) {
    return 'You slept exactly the ideal amount.';
  } else {
    return 'You need ' + Math.abs(difference) + ' hours more sleep than ideal.';
  }
}

console.log(calculateSleepDebt(8)); // Example with ideal hours per night set to 8.
