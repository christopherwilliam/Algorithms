import Stack from './stackObject'
test('stacks can be instantiated', () => {
  expect(new Stack).toBeInstanceOf(Stack);
});

test('stacks instantiated with 3 arguments will have a size of 3', () => {
  const stack = new Stack(1, 2, 3);
  expect(stack).toHaveProperty('size', 3);
});

test('stacks instantiated with no arguments have a length of 0', () => {
  const stack = new Stack;
  expect(stack).toHaveProperty('size', 0);
});

describe('methods', () => {
  test('pushing an item to a stack increases the size by 1', () => {
    const stack = new Stack;
    stack.push(1);
    expect(stack).toHaveProperty('size', 1);
  });
  test('popping an item from a stack decreases the size by 1', () => {
    const stack = new Stack('top item');
    stack.pop();
    expect(stack).toHaveProperty('size', 0);
  });
  test('popping when the stack has 0 items will throw an error', () => {
    const stack = new Stack();
    expect(() => stack.pop()).toThrow('stack is empty');
  });
  test('popping a stack gives the top item', () => {
    const topItem = [1, 2, 3];
    const stack = new Stack(topItem);
    expect(stack.pop()).toBe(topItem);
  });
  test('pushing an item to a stack puts that item on top', () => {
    const item = ['a'];
    const stack = new Stack;
    stack.push(item);
    expect(stack.pop()).toBe(item);
  });
  test('setting size throws an error', () => {
    const stack = new Stack();
    expect(() => stack.size = 1).toThrow('*softly* ...don\'t');
  });
});