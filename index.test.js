const manhattanDistance = require('./index');

describe('Manhattan Distance - Working', () => {
  it('zeroes example', () => {
    const p = [0];
    const q = [0];

    expect(manhattanDistance(p, q)).toBe(0);
  });

  it('all positive example', () => {
    const p = [1, 2, 3];
    const q = [4, 7, 10];

    expect(manhattanDistance(p, q)).toBe(15);
  });

  it('all negative example', () => {
    const p = [-1, -2, -3];
    const q = [-4, -7, -10];

    expect(manhattanDistance(p, q)).toBe(15);
  });

  it('mixed positive and negative example', () => {
    const p = [1, -2, 3, -4];
    const q = [4, 5, -6, -7];

    expect(manhattanDistance(p, q)).toBe(22);
  });
});

describe('Manhattan Distance - Not Working', () => {
  it('should fail on mismatching dimension', () => {
    const p = [1, 2, 3];
    const q = [1];

    expect(() => {
      manhattanDistance(p, q);
    }).toThrow('Input not of equal dimension');
  });

  it('should fail on zero dimension arrays', () => {
    const p = [];
    const q = [];

    expect(() => {
      manhattanDistance(p, q);
    }).toThrow('Input should not have dimension zero');
  });
});
