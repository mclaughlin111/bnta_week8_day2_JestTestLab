const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 5000;
    actual = sum(2000, 3000);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -50;
    actual = sum(-20, -30);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 5;
    actual = sum(5, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

  test('can subtract two small positive numbers', () => {
    expected = -1;
    actual = subtract(2, 3);
    expect(actual).toBe(expected);
  });

  test('can subtract two large positive numbers', () => { 
    expected = -1000;
    actual = subtract(2000, 3000);
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', () => {
    expected = 10;
    actual = subtract(-20, -30);
    expect(actual).toBe(expected);
  });

  test('can subtract zero', () => {
    expected = 5;
    actual = subtract(5, 0);
    expect(actual).toBe(expected);
  });

});

describe('multiply', () => {

  test('can multiply two small positive numbers', () => {
    expected = 6;
    actual = multiply(2, 3);
    expect(actual).toBe(expected);

  });
  
  test('can multiply two large positive numbers', () => { 
    expected = 6000000;
    actual = multiply(2000, 3000);
    expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers', () => {
    expected = 600;
    actual = multiply(-20, -30);
    expect(actual).toBe(expected);
  });

  test('can multiply zero', () => {
    expected = 0;
    actual = multiply(5, 0);
    expect(actual).toBe(expected);
  });

});

describe('divide', () => {

  test('can divide two small positive numbers', () => {
    expected = 5;
    actual = divide(10, 2);
    expect(actual).toBe(expected);

  });
  
  test('can divide two large positive numbers', () => { 
    expected = 50;
    actual = divide(1000, 20);
    expect(actual).toBe(expected);
  });

  test('can divide two negative numbers', () => {
    expected = 10;
    actual = divide(-20, -2);
    expect(actual).toBe(expected);
  });

  test('can divide zero', () => {
    expected = Infinity;
    actual = divide(10, 0);
    expect(actual).toBe(expected);
  });


});

describe('modulus', () => {

  test('can take modulus without remainder', () => {
    expected = 0;
    actual = modulus(10, 2);
    expect(actual).toBe(expected);

  });

  test('can take modulus with remainder', () => {
    expected = 1;
    actual = modulus(10, 3);
    expect(actual).toBe(expected);

  });
});

describe('even', () => {

  test('can discern even', () => {
    expected = true;
    actual = even(10);
    expect(actual).toBe(expected);

  });

  test('can discern not even', () => {
    expected = false;
    actual = even(9);
    expect(actual).toBe(expected);

  });

});

describe('odd', () => {

  test('can discern odd', () => {
    expected = false;
    actual = odd(10);
    expect(actual).toBe(expected);

  });

  test('can discern not odd', () => {
    expected = true;
    actual = odd(9);
    expect(actual).toBe(expected);

  });

});
