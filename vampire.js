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
    let numberOfVampires = 0;
    let curiousVampire = this;
    while (curiousVampire.creator) {
      curiousVampire = curiousVampire.creator;
      numberOfVampires++;
    }
    return numberOfVampires;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal)
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    let vampireFound = null;

    if (this.name === name) {
      vampireFound = this;
    }

    // depth first traversal
    for (const vampireInquired of this.offspring) {
      const vampireLookedFor = vampireInquired.vampireWithName(name);
      if (vampireLookedFor) {
        return vampireLookedFor;
      }
    }

    return vampireFound;
  }

  // Returns the total number of vampires that exist under a vampire
  get totalDescendents() {
    let numberOfChildrenVampires = 0;

    for (const parentVampire of this.offspring){
      numberOfChildrenVampires += parentVampire.totalDescendents;
      numberOfChildrenVampires ++;
    }
    return numberOfChildrenVampires;
  };

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    
    let millenialVampires = [];

    if (this.yearConverted > 1980){
      millenialVampires.push(this);
    };

    for (const vampireAskedForAge of this.offspring){
      const millenialVampiresAdding = vampireAskedForAge.allMillennialVampires;
      millenialVampires = millenialVampires.concat(millenialVampiresAdding);
    }

    return millenialVampires;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    const vampire1 = this;
    let vampire = vampire.creator;
    while (vampire1.creator || vampire){
      if (isMoreSeniorThan(vampire1.creator)){
        
      }
    }
  }
}

module.exports = Vampire;









// test for numberOfVampiresFromOriginal

// const godric = new Vampire("Godric", -8000);
// const eric = new Vampire("Eric", 1067);
// const pamela = new Vampire("Pamela", 1767);
// const tara = new Vampire("Tara", 2014);
// godric.addOffspring(eric);
// eric.addOffspring(pamela);
// pamela.addOffspring(tara);
// console.log(tara.numberOfVampiresFromOriginal);






// test for addOffspring
// const viago = new Vampire("Viago", 1640);
// const catherine = new Vampire("Catherine", 2014);

// viago.addOffspring(catherine)
// console.log(`${viago.name} has turned a new vampire! Meet: ${viago.offspring[0].name}!`);


