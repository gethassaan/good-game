import 'jest';
import { generateRandomNumber,splitCurrentNumberIntoWarriors } from '../index';
import { ERROR_MESSAGE } from '../constants/index-constants';

describe('Functionality testing ', () => {
    it('Should return a random number with-in provided range ', () => {
        const randomNumber = generateRandomNumber(1, 0);
        expect(randomNumber).toBeLessThanOrEqual(1);
    });

    it('should return error message when providing number less than 3', () => {
        expect(splitCurrentNumberIntoWarriors(2)).toBe(ERROR_MESSAGE);
        expect(splitCurrentNumberIntoWarriors(-2)).toBe(ERROR_MESSAGE);
    });

    it('should return random number of warriors with providing correct input ', () => {
        let worriers = {};
        expect(worriers).toMatchObject({});
        expect(worriers).not.toHaveProperty('Spearmen');
        expect(worriers).not.toHaveProperty('Swordsmen');
        expect(worriers).not.toHaveProperty('Archers');

        worriers = splitCurrentNumberIntoWarriors(167);
        expect(worriers).toHaveProperty('Spearmen');
        expect(worriers).toHaveProperty('Swordsmen');
        expect(worriers).toHaveProperty('Archers');
    });

})