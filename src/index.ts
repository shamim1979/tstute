import type {Person, Address} from "./person.js";

let name: string = "Md Shah Alam Shamim";
let age: number = 45;
let active: boolean = true;
const names: string[] = [
    "shah",
    "alam",
    "shamim"
]

const person: Person = {
    name: "John",
    age: 20,
    address: {
        street: "John",
        city: "kalis",
        state: "Kenya",
        country: "Kenya"
    },
    greet(message: string): string {
        return `Hello, ${this.name}! ${message}!`;
    }
}

const { address } = person;
const { country } = address;
console.log(country);

