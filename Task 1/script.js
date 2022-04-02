/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const formEl = document.forms[0];
const divEl = document.getElementById("output");
const inputEl = document.getElementById("search");
const ulEl = document.createElement("ul");

const li1El = document.createElement("ol");
const li2El = document.createElement("ol");
const li3El = document.createElement("ol");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(inputEl.value);
  const parsed = parseInt(inputEl.value);
  console.log(parsed);
  if (parsed == inputEl.value) {
    kgConversion(parsed);
  } else {
    showFailAlert();
    setTimeout(() => {
      location.reload();
    }, 2000);
  }

  function kgConversion(parsed) {
    const toLb = parsed * 2.2046;
    const toG = parsed * 1000;
    const toOz = parsed * 35.274;
    console.log(toLb);

    ulEl.textContent = `${parsed} kilograms are equal to:`;
    li1El.textContent = `${toLb.toFixed(2)} pounds,`;
    li2El.textContent = `${toG} grams,`;
    li3El.textContent = `or ${toOz.toFixed(2)} ounces.`;
    console.log(li1El);

    ulEl.append(li1El, li2El, li3El);
    divEl.append(ulEl);
  }

  function showFailAlert() {
    divEl.textContent = "Please enter a number";
    divEl.style.textAlign = "center";
    divEl.style.color = "tomato";
    setTimeout(() => {
      divEl.remove();
    }, 2000);
  }
});
