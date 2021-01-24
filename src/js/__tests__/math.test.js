// eslint-disable-next-line import/extensions
import Magician from '../magician.js';

// eslint-disable-next-line no-undef
test('check Magician attack', () => {
  const wizard = new Magician('Маг', null, 2);
  wizard.attack = 100;
  wizard.stoned = true;
  // eslint-disable-next-line no-undef
  expect(wizard.attack).toBe(85);
});

// eslint-disable-next-line no-undef
test('check distance 2, attack 9', () => {
  const wizard = new Magician('Маг', null, 2);
  // eslint-disable-next-line no-undef
  expect(wizard.attack).toBe(9);
});

// eslint-disable-next-line no-undef
test('check distance 3, attack 8', () => {
  const wizard = new Magician('Маг', null, 3);
  // eslint-disable-next-line no-undef
  expect(wizard.attack).toBe(8);
});

// eslint-disable-next-line no-undef
test('check stoned true', () => {
  const wizard = new Magician('Маг', null, 1);
  wizard.stoned = true;
  // eslint-disable-next-line no-undef
  expect(wizard.stoned).toBe(true);
});
