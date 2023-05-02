class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`${this.name}`);
    }
    showStats() {
        console.log(`${this.name}, ${this.health}, ${this.speed}, ${this.strength}`);
    }
    drinkSake() {
        this.health += 10;
    }
}
class Sensei extends Ninja {
    constructor(name, health=200, wisdom=10) {
        super(name, health)
        this.speed = 10;
        this.strength = 10;
        this.wisdom = wisdom;
    }
    speakWisdom(){
        this.drinkSake()
        console.log("What one programmer can do in one month, two programmers cann do in two months.")
    }

}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();

