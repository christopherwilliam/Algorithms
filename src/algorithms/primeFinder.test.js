import isPrime from './primeFinder'
import {primeFactors} from './primeFinder'
describe('isPrime', () => {
    test('running isPrime on an even number should return false', () => {
        let number = 4;
        expect(isPrime(number)).toBe(false);
    });
    test('running isPrime on a prime number should return True', () => {
        let number = 13;
        expect(isPrime(number)).toBe(true);
    });
});
describe('primeFactors', () => {
    test('running primeFactors on a number should return an object which contains a list of its prime factors', () => {
        let number = 13 * 4 * 7 * 5;
        expect(primeFactors(number)).toEqual({
            1: 13,
            2: 7,
            3: 5,
            4: 2
        });
    });
});
