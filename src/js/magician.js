// eslint-disable-next-line import/extensions
import MathCh from './math.js';

export default class Magician extends MathCh {
  constructor(name, type, distance) {
    super(name, 'Magician', distance);
    // this.attack = 10;
    // this.defense = 40;
  }
}
