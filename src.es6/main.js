import Male from './Male.js';

console.dir(Male.desc);

var male1 = new Male('Unknown');
console.log(male1.getName());
male1.setName('Nicolas');
console.log(male1.getName());
