import Human from './Human.js';

class Male extends Human {
  constructor(name) {
    super('Male');

    this.setName(name);
  }
  setName(name) {
    this.name = name;
  }
  getName(name) {
    return this.name;
  }
}

export default Male;
