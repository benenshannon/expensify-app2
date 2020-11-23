const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}`;

test('should add two numbers', () => {
  const result = add(3,5);
  expect(result).toBe(8);
});


test('name should equal name', () => {
    const result = generateGreeting('ben');
    expect(result).toBe('Hello ben');
  });