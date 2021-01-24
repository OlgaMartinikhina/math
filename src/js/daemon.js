// eslint-disable-next-line import/extensions
import MathCh from './math.js';

export default class Daemon extends MathCh {
  constructor(name, type, distance) {
    super(name, 'Daemon', distance);
  }
}
