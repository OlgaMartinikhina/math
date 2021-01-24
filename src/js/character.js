export default class Character {
  constructor(name, type, attack, defense) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defense = defense;
    if (this.name.length > 10 || this.name.length < 2) {
      throw new Error('Имя должно состоять от 2-х до 10-ти символов');
    }
    const typesOfChar = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!(typesOfChar.includes(this.type))) {
      throw new Error('Недопустимый тип персонажа');
    }
  }
}
