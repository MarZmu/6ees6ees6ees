class ForagerBee extends Bee {
  // TODO..
  constructor(age) {
    super(age || 10);
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }

  forage() {
    this.treasureChest.push('treasure');
  }
}
