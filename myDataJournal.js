/* https://github.com/petersf01/cs81-module4b-mydataexplorer

I predict that:
  Tuesday had the most screen time.
  Wednesday had the best focus level.
  Caffeine intake probably does not correlate with better focus.

*/

// Array of objects representing daily data for a week
let weekdata = [
  { day: "Monday", sleepHours: 7, screenTime: 8, mood: "Poor", caffeineIntake: 2, focusLevel: 7 },
  { day: "Tuesday", sleepHours: 7, screenTime: 10, mood: "Average", caffeineIntake: 2, focusLevel: 8 },
  { day: "Wednesday", sleepHours: 6, screenTime: 9, mood: "Good", caffeineIntake: 1, focusLevel: 9 },
  { day: "Thursday", sleepHours: 7, screenTime: 9, mood: "Good", caffeineIntake: 1, focusLevel: 9 },
  { day: "Friday", sleepHours: 6, screenTime: 7, mood: "Good", caffeineIntake: 1, focusLevel: 7 },
  { day: "Saturday", sleepHours: 8, screenTime: 2, mood: "Excellent", caffeineIntake: 1, focusLevel: 8 },
  { day: "Sunday", sleepHours: 8, screenTime: 2, mood: "Excellent", caffeineIntake: 1, focusLevel: 8 }
];

// Function to find the day with the highest screen time
function findHighestScreenTime(weekdata) {
    let maxScreenTime = 0;
    let maxDay = "";
    for (let day of weekdata) {
        if (day.screenTime > maxScreenTime) {
            maxScreenTime = day.screenTime;
            maxDay = day.day;
        }
    }
    return { maxDay };
}

// Function to find the day with the highest focus level
function averageSleepHours(weekdata) {
    let totalSleep = 0;
    for (let day of weekdata) {
        totalSleep += day.sleepHours;
    }
    return totalSleep / weekdata.length;
}

// Function to find the most frequent mood
function mostFrequentMood(weekdata) {
    let moodCount = { Poor: 0, Average: 0, Good: 0, Excellent: 0 };
    for (let day of weekdata) {
        moodCount[day.mood] = moodCount[day.mood] + 1;
    }
    // Find the mood with the maximum count
    let maxMood = null; 
    let maxCount = 0;
    for (let mood in moodCount) {
        if (moodCount[mood] > maxCount) {
            maxMood = mood;
            maxCount = moodCount[mood];
        }
    }
    return maxMood;
}

// Function to find out if caffeine intake correlates with focus level
function correlateCaffeineToFocus(weekdata) {
    let highestFocusLevel = { caffeineIntake: 0, level: 0 };
    let highestCaffeineLevel = 0 ;
    // Loop through the weekdata to find the highest focus and caffeine levels
    for (let day of weekdata) {
        if (day.focusLevel > highestFocusLevel.level) {
            highestFocusLevel.level = day.focusLevel;
            highestFocusLevel.caffeineIntake = day.caffeineIntake;
        }
        if (day.caffeineIntake > highestCaffeineLevel) {
            highestCaffeineLevel = day.caffeineIntake;
        }
    }
    // Compare the highest focus level with the highest caffeine level
    if( highestFocusLevel.caffeineIntake < highestCaffeineLevel) {
        return "Caffeine does not correlate with better focus.";
    }
    else {
        return "Caffeine does correlate with better focus.";
    }
}

// test the functions
findHighestScreenTime(weekdata);

averageSleepHours(weekdata);

mostFrequentMood(weekdata);

correlateCaffeineToFocus(weekdata);



