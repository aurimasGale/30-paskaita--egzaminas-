/* ------------------------------ TASK 9 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funcijos
-------------------------------------------------------------------------------------------- */

import composition from "./modules/math/composition.js";
import division from "./modules/math/division.js";
import substraction from "./modules/math/subtraction.js";
import * as mltp from "./modules/math/multiplication.js";

import { one, two, three, four, five } from "./modules/numbers/numbers.js";

let a = composition(one, four);
let b = division(four, two);
let c = substraction(three, two);
let d = mltp.multiplication(five, two);

console.log("composition ===", a);
console.log("division ===", b);
console.log("substraction ===", c);
console.log("multiplication ===", d);

// console.log(`multiplication of ${five} and ${two} is ${d}`);
