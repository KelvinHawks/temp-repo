// console.log(__dirname);
// setInterval(()=>{
//   console.log('hello world');
// }, 1000)

//modules

const {john, peter} = require('./2-name')
const sayHi = require('./3-sayHello')
//console.log(names);
//const dataItem = require('./4-alternative-flavor')

sayHi('kelvin')
sayHi(john)
sayHi(peter)
const sum = require('./7-grenade')
console.log(sum);
