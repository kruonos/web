import { expect, test } from 'vitest';
import { sum } from './index';

test('sum adds numbers', () => {
  expect(sum(1, 2)).toBe(3);
});
