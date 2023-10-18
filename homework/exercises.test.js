const { capitalize, reverseStr, calculator, caesarCipher, analyzeArray } = require('./exercises')

    // Capitalize //

test('capitalize empty string', () => {
    expect(capitalize('')).toBe('');
  });

test('all uppercase', () => {
    expect(capitalize('FRANCO')).toBe('Franco');
});

test('capitalize single character', () => {
    expect(capitalize('a')).toBe('A');
  });
  
test('capitalize all lowercase', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

    // Reverse //

test('reverse', () => {
    expect(reverseStr('franco')).toBe('ocnarf');
});

test('reverse with uppercases', () => {
    expect(reverseStr('Franco')).toBe('ocnarF');
});

    // Calculator //

test('add', () => {
    expect(calculator.add(1,2)).toBe(3);
});

test('substract', () => {
    expect(calculator.substract(1,2)).toBe(-1);
});

test('divide', () => {
    expect(calculator.divide(10,2)).toBe(5);
});

test('multiply', () => {
    expect(calculator.multiply(10,2)).toBe(20);
});

    // Caesar Cipher // 

test('caesar', () => {
    expect(caesarCipher('attack at dawn', 13)).toBe('nggnpx ng qnja');
});

test('test messi', () => {
    expect(caesarCipher('lionel andres messi', 10)).toBe('vsyxov kxnboc woccs');
});

    // Analyze Array //

test('analyze array', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});

