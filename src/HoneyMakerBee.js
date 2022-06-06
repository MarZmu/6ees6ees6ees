class HoneyMakerBee extends Bee {
  // TODO..
  constructor(age) {
    super(age || 10);
    this.job = 'make honey';
    this.honeyPot = 0;
  }

  makeHoney() {
    this.honeyPot++;
  }

  giveHoney() {
    this.honeyPot--;
  }
}
