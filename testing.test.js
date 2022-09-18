import { captitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./testing";

test('capitalize first letter', () => {
    expect(captitalize('hello mortals')).toBe('Hello mortals');
});

test('reverse a string', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('do some calculations', () => {
    expect(calculator.add(1,2)).toBe(3);
    expect(calculator.subtract(1,2)).toBe(-1);
    expect(calculator.multiply(1,2)).toBe(2);
    expect(calculator.divide(1,2)).toBe(0.5);
});

test('make some ceasar ciphers', () => {
    expect(caesarCipher(
        "Hello Mortals.", 1
    )).toBe(
        "Ifmmp Npsubmt."
    );
    expect(caesarCipher(
        "Hello Mortals.", 27
    )).toBe(
        "Ifmmp Npsubmt."
    );
    expect(caesarCipher(
        "Hello Mortals.", 53
    )).toBe(
        "Ifmmp Npsubmt."
    );
});

test('analyze array', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});
