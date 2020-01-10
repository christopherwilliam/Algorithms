import Queue from './queueObject'
describe('This is a pseudo TDD build of a queue object', () => {
  test('queue can be instantiated', () => {
    expect(new Queue).toBeInstanceOf(Queue);
  });
  test('queues instantiated withh 3 items will have a length of 3', () => {
    const queue = new Queue(1, 2, 3);
    expect(queue).toHaveProperty('length', 3);
  });
  test('pushing an item to the queue lengthens the queue by 1', () => {
    const queue = new Queue;
    queue.push(1);
    expect(queue).toHaveProperty('length', 1)
  });
  test('popping an item from the queue decreases the length of the queue by 1', () => {
    const queue = new Queue(1, 2, 3);
    queue.pop();
    expect(queue).toHaveProperty('length', 2);
  });
  test('popping an empty queue will throw an error', () => {
    const queue = new Queue;
    expect(() => queue.pop()).toThrow('queue is empty');
  });
  test('popping a queue gives the first item in the queue', () => {
    const queue = new Queue(1, 2, 3);
    expect(queue.pop()).toBe(1);
  });
  test('pushing an item to the queue puts that item at the back of the queue', () => {
    const queue = new Queue(1, 2, 3,);
    queue.push(4);
    queue.pop();
    queue.pop();
    queue.pop();
    expect(queue.pop()).toBe(4);
  });
});