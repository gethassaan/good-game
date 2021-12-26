import { ERROR_MESSAGE } from "./constants/index-constants";
import { SplitCurrentNumberIntoWarriorsInterface } from "./interfaces/index-interface";

/**
 * ********** Instructions for Generate Random Number **********
 * 1- using Math.floor to return the largest round number
 * 2- using Math.random to generate a random number between maximumRange, mininmumRange
 *  and adding 1 so that the eaxct targeted number's value can be reached as maximum number
 *  returned is always lesser than the provided maximum range in Math.random
 */


export function generateRandomNumber(maximumRange: number, minimumRange: number): number {
    return Math.floor(Math.random() * (maximumRange - minimumRange) + 1); // points (1, 2)
}

/**
 *  ********** Split Current Number Into Warriors ***********
 * 1- initializing all required variables
 * 2- Handling the case where the input is less than 3
 * 3- looping to reach before the desired range of parts
 * 4- calling generateRandomNumber to get a random number within range
 * 5- pushing the data into array so that can be used afterwords
 * 6- adding the current random to targetNumbersCalculatedSum so that we know the found range
 * 7- getting Spearmen and Swordsmen from the array
 * 8- subracting the targetNumber from targetNumbersCalculatedSum so that we can get the remaining number (Archers)
 * 9- returning Spearmen, Swordsmen, Archers
 */

export function splitCurrentNumberIntoWarriors(targetNumber: number): SplitCurrentNumberIntoWarriorsInterface | string {

  let targetNumbersCalculatedSum = 0, sums = [], requiredParts = 3; // point (1)

  if (targetNumber < 3) { // point (2)
    return (ERROR_MESSAGE);
  }

  for (let startingIndex = 0; startingIndex < requiredParts - 1; startingIndex++) { //point (3)
    const currentRandomNumber = generateRandomNumber(targetNumber, targetNumbersCalculatedSum); // point (4)
    sums.push(currentRandomNumber); // point (5)
    targetNumbersCalculatedSum += currentRandomNumber; // point (6)
  }

  const [Spearmen, Swordsmen] = sums; // point (7)

  const Archers = targetNumber - targetNumbersCalculatedSum; // point (8)

  return { Spearmen, Swordsmen, Archers }; // point (9)
}