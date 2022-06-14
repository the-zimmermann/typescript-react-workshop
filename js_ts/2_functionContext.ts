const hi = () => {
  console.log("hi", this);
};

function hi2() {
  console.log("hi2", this);
}

const Person = {
  name: "Hi",
  getName() {
    console.log(this, arguments);
    return this.name;
  },

  arrowName: test => {
    console.log(arguments, this, test);
    return this.name;
  },
};

hi();
hi2();

console.log(Person.getName());
console.log(Person.getName.call({ name: "Test" }));
console.log(Person.arrowName.call({ name: "Test" }));
