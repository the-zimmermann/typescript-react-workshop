interface Food {
  name: string;
}

interface Hay extends Food {
  name: "hay";
}

interface Animal {
  name: string;
  age: number;
  eat: (food: Food) => void;
}

interface Chicken extends Animal {
  name: "chicken";
}

type Fuel = {};

type Gasoline = Fuel & {
  name: "gasoline";
};

type Vehicle = {
  name: string;
  vendor: string;
  drive: (fuel: Fuel) => void;
};

type Car = Vehicle & {
  name: "car";
};

type VehicleOrChicken = Vehicle | Chicken;
