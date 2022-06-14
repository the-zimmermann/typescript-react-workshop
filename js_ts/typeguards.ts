type Ball = {
  brand: string;
  size: number;
};

type Game = {
  name: string;
  price: number;
  play: () => void;
};

const game: Game = {
  name: "Super Mario",
  price: 50,
  play: () => {},
};

const ball: Ball = {
  brand: "Nike",
  size: 10,
};

const stuff = [ball, game];

/**
 * @todo: Write a typeguard called isGame to check if a value is a Game and than call play
 */

for (const thing of stuff) {
  if (isGame(thing)) {
    thing.play();
  }
}
