import {getPassword} from "./challenge-1";

describe('challenge 1 validator', () => {
    const testData = `
    L68
    L30
    R48
    L5
    R60
    L55
    L1
    L99
    R14
    L82
    `

    const input = testData.split('\n').map(e => e.trim());

    it('should return 3', () => {
        const password = getPassword(50, input);
        expect(password).toBe(3);
    })
});