// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

// Turple
let turple: [number] = [2];

// Union
let unionType: number | string;

// Interface
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// Class
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is registered!`;
  }
}

const brad = new Person(1, 'Brad');











// Generics

function getArray(items: any[]): any[] {
  return new Array().concat(items);
}

let numArray = getArray([1,2,3,4,5]);
let strArray = getArray(['Brad', 'John', 'Jack']);
