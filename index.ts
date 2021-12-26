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
