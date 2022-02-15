
// type 확인
import getType from './getType.js'


console.log(typeof 'hello');
console.log(typeof 'hello');
console.log(typeof []);
console.log(typeof {});
console.log(typeof null);

// function getType(data){
//   return Object.prototype.toString.call(data).slice(8,-1);
// }

console.log(getType(123));
console.log(getType(false));



