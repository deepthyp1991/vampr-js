class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampire = 0;
    let currentVampire = this;

    // climb "up" the tree (using iteration), counting nodes, until original vampire is found
    while(currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampire ++;
    }
    return numberOfVampire;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal) {
      return true;
    }
    else {
      return false;
    }
  }

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    if (this.name === name) {
      return this;
    }
    else {
      return null;
    }
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let numberOfVampire = 0;

    numberOfVampire += this.offspring.length;

    for (const descendent of this.offspring) {
      let lengthOfDescendent = descendent.totalDescendents;
      numberOfVampire += lengthOfDescendent;
    }
    return numberOfVampire;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let millenialVampire = [];
    if (this.yearConverted >= 2000) {
      millenialVampire.push(this);
    }

    for (const descendent of this.offspring) {
      let millenialDescendent = descendent.allMillennialVampires;
      millenialVampire.push(millenialDescendent);
    }
    return millenialVampire;
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    if (this.name === name) {
      return this;
    }
    else {
      return null;
    }
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let numberOfVampire = 0;
    numberOfVampire += this.offspring.length;

    for (const descendent of this.offspring) {
      let numberOfDescendent = descendent.totalDescendents;
      numberOfVampire += numberOfDescendent;
    }
    return numberOfVampire;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let millenialVampire = [];
    if (this.yearConverted >= 2000) {
      millenialVampire.push(this);
    }

    for (const descendent of this.offspring) {
      let millenialDescendent = descendent.allMillennialVampires;
      millenialVampire.push(millenialDescendent)
    }
    return millenialVampire;
  }
}



module.exports = Vampire;