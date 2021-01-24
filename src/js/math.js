import Character from './character.js';

export default class MathCh extends Character {
  constructor(name, type, distance) {
    super(name, type);
    this.distance = distance;
    this.defense = 40;
    this.attack = 10;
    this.stoned = false;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get attack() {
    let attack = this._attack * ((11 - this.distance) / 10);

    if (this.stoned) {
      attack -= Math.log2(this.distance) * 5;
    }
    return (attack > 0) ? Math.round(attack) : 0;
  }

  set attack(value) {
    this._attack = value;
  }
}
