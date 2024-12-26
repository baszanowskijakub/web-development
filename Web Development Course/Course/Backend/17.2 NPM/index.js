import generateName from "sillyname";
import superheroes, { randomSuperhero } from "superheroes";

var sillyName = generateName();
const superHeroName = randomSuperhero();

console.log(`My name is ${sillyName}.`);
console.log(`Also known as ${superHeroName}.`)

