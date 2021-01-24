// eslint-disable-next-line import/extensions
import Character from '../character.js';

// eslint-disable-next-line no-undef
test('Check name F', () => {
  // eslint-disable-next-line no-undef
  expect(() => {
    // eslint-disable-next-line no-new
    new Character('F', 'Bowman');
  }).toThrowError('Имя должно состоять от 2-х до 10-ти символов');
});

// eslint-disable-next-line no-undef
test('Check name Fdsafdsafdsa', () => {
  // eslint-disable-next-line no-undef
  expect(() => {
    // eslint-disable-next-line no-new
    new Character('Fdsafdsafdsa', 'Zombie');
  }).toThrowError('Имя должно состоять от 2-х до 10-ти символов');
});

// eslint-disable-next-line no-undef
test('Check type Golem', () => {
  // eslint-disable-next-line no-undef
  expect(() => {
    // eslint-disable-next-line no-new
    new Character('Name', 'Golem');
  }).toThrowError('Недопустимый тип персонажа');
});
