// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 * Counter1 has closure because it returns a function and the variable is defined and used in the function scope and not the global scope.
 * 2. Which of the two uses a closure? How can you tell?
 * Counter1 because it returns a function instead of using a variable in the global scope.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 * Counter1 is better if you only want to mutate the count through counter1. Counter2 is better if you want to reference and mutate count in other ways.
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  };
}

const counter1 = counterMaker();
// counter2 code
let count = 0;

function counter2() {
  return count++;
}

/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(points) {
  return Math.floor(Math.random() * Math.floor(points));
}
inning(3);

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(cb, numOfInnings) {
  let totalPoints = [];

  for (let i = 0; i <= numOfInnings; i++) {
    totalPoints.push(inning(3));
  }
  const add = (a, b) => a + b;
  const sum = totalPoints.reduce(add);

  let totalPoints2 = [];

  for (let i = 0; i <= numOfInnings; i++) {
    totalPoints2.push(inning(3));
  }
  const add2 = (a, b) => a + b;
  const sum2 = totalPoints2.reduce(add2);

  let homePoints = sum;
  let awayPoints = sum2;

  let game = {
    Home: homePoints,
    Away: awayPoints,
  };
  return game;
}
//  console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each point in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(numOfPoints, numOfInnings) {
  let homeScore = 0;
  let awayScore = 0;

  for (var i = 0; i <= numOfInnings; i++) {
    if (i === 1) {
      homeScore += Math.round(Math.random(numOfPoints));
      awayScore += Math.round(Math.random(numOfPoints));
      console.log(`${i}st inning: ${homeScore} - ${awayScore}`);
    } else if (i === 2) {
      homeScore += Math.round(Math.random(numOfPoints));
      awayScore += Math.round(Math.random(numOfPoints));
      console.log(`${i}nd inning: ${homeScore} - ${awayScore}`);
    } else if (i === 3) {
      homeScore += Math.round(Math.random(numOfPoints));
      awayScore += Math.round(Math.random(numOfPoints));
      console.log(`${i}rd inning: ${homeScore} - ${awayScore}`);
    } else if (i > 3 && i !== numOfInnings) {
      homeScore += Math.round(Math.random(numOfPoints));
      awayScore += Math.round(Math.random(numOfPoints));
      console.log(`${i}th inning: ${homeScore} - ${awayScore}`);
    } else if (i === numOfInnings) {
      homeScore += Math.round(Math.random(numOfPoints));
      awayScore += Math.round(Math.random(numOfPoints));
      console.log(`${i}th inning: ${homeScore} - ${awayScore}`);
      console.log(`Final Score: ${homeScore} - ${awayScore}`);
    }
  }
}

scoreboard(inning(0, 2), 9);
