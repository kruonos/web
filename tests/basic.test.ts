import { expect, test } from 'vitest';
import { sum } from '../packages/core/src';

test('sum works', () => {
  expect(sum(2, 3)).toBe(5);
});
