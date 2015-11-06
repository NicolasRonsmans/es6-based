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
  static desc = 'A male (♂) organism is the physiological sex that produces sperm. Each spermatozoon can fuse with a larger female gamete, or ovum, in the process of fertilization. A male cannot reproduce sexually without access to at least one ovum from a female, but some organisms can reproduce both sexually and asexually. Most male mammals, including male humans, have a Y chromosome, which codes for the production of larger amounts of testosterone to develop male reproductive organs.'
}

export default Male;
