/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */
const ENDPOINT = "cars.json";

const outputEl = document.getElementById("output");

async function getData() {
  const res = await fetch(ENDPOINT);
  const data = await res.json();
  console.log("data ===", data);
  createCard(data);
}
getData();

function createCard(arr) {
  arr.forEach((arrObj) => {
    const divEl = document.createElement("div");
    divEl.className = "card";
    const h2El = document.createElement("h2");
    h2El.className = "brand";
    const pEl = document.createElement("p");
    pEl.className = "models";

    h2El.textContent = arrObj.brand;
    pEl.textContent = `Models: ${arrObj.models.join(", ")}`;
    divEl.append(h2El);
    divEl.append(pEl);
    outputEl.append(divEl);
  });
}
