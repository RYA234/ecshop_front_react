import { sum } from '../___tests___/foo';

test('basic', () => {
  expect(sum(1,4)).toBe(5);
});

test('basic again', () => {
  expect(sum(1, 2)).toBe(3);
});

test('basic  Pattern', () => {
    expect(sum(100, 2)).toBe(102);
  }
);