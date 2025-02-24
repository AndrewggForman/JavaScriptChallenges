class Dog {
    constructor(name, species, size){
        this.name = name;
        this.species = species;
        this.size = size;
    }

    bark(){
        if(this.size > 60){
            return "Grrr! Grrr!";
        } else{
            return "Woof! Woof!";
        }
    }
}



const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

class Character {
    constructor(name, health, strength) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.xp = 0; // XP is always zero for new characters
      this.money = 10;
      this.keys = 1;
    }
    // Attack a target
    attack(target) {
      if (this.health > 0) {
        const damage = this.strength;
        console.log(
          `${this.name} attacks ${target.name} and causes ${damage} damage points`
        );
        target.health -= damage;
        if (target.health > 0) {
          console.log(`${target.name} has ${target.health} health points left`);
        } else {
          target.health = 0;
          const bonusXP = 10;
          console.log(
            `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${target.money} gold and ${target.keys} key(s)`
          );
          this.keys += target.keys;
          this.money += target.money;
          this.xp += bonusXP;
        }
      } else {
        console.log(`${this.name} can't attack (they've been eliminated)`);
      }
    }
    // Return the character description
    describe() {
      return `${this.name} has ${this.health} health points, ${this
        .strength} as strength and ${this.xp} XP points, ${this.money} gold and ${this.keys} key(s)`;
    }
  }

class BankAccount{
    constructor(name){
        this.name = name;
        this.balance = 0;
    }

    credit(value){
        this.balance += value;
    }

    describe(){
        return `owner: ${this.name}, balance: ${this.balance}`
    }
}

const seanAccount = new BankAccount("Sean");
const bradAccount = new BankAccount("Brad");
const georgeAccount = new BankAccount("Georges");

let accounts = [];
accounts.push(seanAccount);
accounts.push(bradAccount);
accounts.push(georgeAccount);

for(const account of accounts){
    account.credit(1000);
    account.describe();
}