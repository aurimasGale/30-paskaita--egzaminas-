/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: "audi",
  model: "A6",
  year: 2005,
  color: "white",
};
function objToArr(obj) {
  const obValues = Object.values(obj);
  return obValues;
}
const objArr = objToArr(audi);
console.log("new array ===", objArr);
