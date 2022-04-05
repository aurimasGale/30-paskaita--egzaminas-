/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
class Calculator {
  constructor(nr1, nr2) {
    this.nr1 = nr1;
    this.nr2 = nr2;
  }
  sum() {
    return this.nr1 + this.nr2;
  }
  subtraction() {
    return this.nr1 - this.nr2;
  }

  multiplication() {
    return this.nr1 * this.nr2;
  }

  division() {
    return this.nr1 / this.nr2;
  }
}
const p1 = new Calculator(3, 2);

console.log("sum ===", p1.sum());
console.log("subtraction ===", p1.subtraction());
console.log("multiplication ===", p1.multiplication());
console.log("division ===", p1.division());
