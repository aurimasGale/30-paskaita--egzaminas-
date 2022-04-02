/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" reikšmė ir "avatar_url" paveiklslėlis (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const contEl = document.getElementById("output");
const btnEl = document.getElementById("btn");
const divEl = document.createElement("div");
divEl.className = "container";

async function getProperties() {
  const res = await fetch(ENDPOINT);
  const dataArr = await res.json();
  console.log("data ===", dataArr);
  renderCards(dataArr);
}
// getProperties();

function renderCards(arr) {
  arr.forEach((arrObj) => {
    const cardEl = document.createElement("div");
    cardEl.className = "single-card";

    const imgEl = document.createElement("img");
    imgEl.src = arrObj.avatar_url;

    const loginEl = document.createElement("p");
    loginEl.className = "card-text";
    loginEl.textContent = arrObj.login;

    cardEl.append(imgEl);
    cardEl.append(loginEl);

    contEl.append(cardEl);
  });
}
// btnEl.addEventListener('click',getProperties() )
