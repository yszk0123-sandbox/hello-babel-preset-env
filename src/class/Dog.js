import Animal from './Animal';

export default class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  say() {
    console.log(`[dog] ${this.name}`);
  }
}
