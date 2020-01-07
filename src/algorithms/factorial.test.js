import {factorial, recursiveFactorial} from './factorial';
describe('factorial', () => {
  test('0! should equal 1', () => {
    expect(factorial(0)).toBe(1);
  });

  test('1! should equal 1', () => {
    expect(factorial(1)).toBe(1);
  });

  test('2! should equal 2', () => {
    expect(factorial(2)).toBe(2);
  });

  test('3! should equal 6', () => {
    expect(factorial(3)).toBe(6);
  });

  test('12! should equal 479001600', () => {
    expect(factorial(12)).toBe(479001600);
  });
});

describe('recursiveFactorial', () => {
  test('0! should equal 1', () => {
    expect(recursiveFactorial(0)).toBe(1);
  });

  test('1! should equal 1', () => {
    expect(recursiveFactorial(1)).toBe(1);
  });

  test('2! should equal 2', () => {
    expect(recursiveFactorial(2)).toBe(2);
  });

  test('3! should equal 6', () => {
    expect(recursiveFactorial(3)).toBe(6);
  });

  test('12! should equal 479001600', () => {
    expect(recursiveFactorial(12)).toBe(479001600);
  });
})