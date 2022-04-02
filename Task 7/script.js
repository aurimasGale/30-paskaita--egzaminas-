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
function showObjectKeys(obj) {
  const obValues = Object.keys(obj);
  return obValues;
}
const objArr = showObjectKeys(audi);
console.log("obj keys to array ===", objArr);
