/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window Binding -- Used when none of the other rules apply
 * 2. Implicit Binding -- Automatically used when the function is invoked. The 'this' refers to the left of the dote
 * 3. New Binding -- When a constructor function is used, 'this' refers to the specific instance of the object
 * 4. Explicit Binding -- Used when the apply or call method is used in JS
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const myDog = {
  name: "Kaldi",
  breed: "golden retriever",
  sound: "woof woof",
  talk: function() {
    console.log(this.sound);
  }
};

myDog.talk();

// Principle 3

// code example for New Binding

function Dog(speak) {
  this.speak = speak;
}

const graemeDog = new Dog("Graeme the Irish Wolfhound!");
console.log(graemeDog.speak);

// Principle 4

// code example for Explicit Binding
function explainDog() {
  console.log(`${this.name} is a ${this.breed}.`);
}

explainDog.call(myDog);
