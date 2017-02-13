import Animal from './Animal';

export default class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  say() {
    console.log(`[cat] ${this.name}`);
  }
}
