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
    return (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal);
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


