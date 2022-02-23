// Modules - Encapsulated Code (only share minimum )
// CommonJS, every file is module (by default)

//import module
const { firstName, middleName, lastName } = require("./4_names");
const { fullName } = require("./5_utils");
const person = require('./6_alternative-flavor')


//using module

require('./7_mind-grenade')
setTimeout(() => {
    console.info(fullName("Cholid", "Firdaus", "Abada"));
}, 5000);
console.info(fullName(firstName, middleName, lastName));
console.log(fullName(person.firstName, person.middleName, person.lastName))
