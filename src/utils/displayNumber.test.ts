import displayNumber from './displayNumber';

describe('displayNumber', () => {
  test('1234 should be 1.2k', () => {
    expect(displayNumber(1234)).toBe('1.2k');
  });

  test('124 should be 124', () => {
    expect(displayNumber(124)).toBe('124');
  });

  test('123453 should be 123.4k', () => {
    expect(displayNumber(123453)).toBe('123.4k');
  });

  test('2341235 should be 2.3m', () => {
    expect(displayNumber(2341235)).toBe('2.3m');
  });

  test('12343526 should be 12.3m', () => {
    expect(displayNumber(12343526)).toBe('12.3m');
  });

  test('1234567890 should be 1234567890', () => {
    expect(displayNumber(1234567890)).toBe('1234.5m');
  });
});
