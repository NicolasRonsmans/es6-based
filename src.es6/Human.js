class Human {
  constructor(gender) {
    this.setGender(gender);
  }
  setGender(gender) {
    this.gender = gender;
  }
  getGender(gender) {
    return this.gender;
  }
  static desc = 'Modern humans (Homo sapiens, primarily ssp. Homo sapiens sapiens) are the only extant members of the hominin clade (or human clade), a branch of the great apes; they are characterized by erect posture and bipedal locomotion, manual dexterity and increased tool use, and a general trend toward larger, more complex brains and societies.'
}

export default Human;
