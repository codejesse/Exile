//1: fetch the data from the files (conditionally either if they pass the condition based on the menuType button)
//2: Access the files and append them to their respective elements
let turkishButton = document.getElementById("Turkish");
let englishButton = document.getElementById("English");
let drinksDiv = document.getElementById("drinksdiv");
let foodDiv = document.getElementById("fooddiv");
let turkish = document.getElementById("turkish");
let english = document.getElementById("english");
let turkish2 = document.getElementById("turkish2");
let english2 = document.getElementById("english2");

let result = [];

function getMenu() {
  fetch("./menu_tr.json")
    .then((response) => {
      return response.json();
    })
    .then((jsondata) => {
      // console.log(jsondata)
      result = jsondata;
      for (let i = 0; i < result.drinks.length && result.Food.length; i++) {
        //for turkish
        let div = document.createElement("h3");
        let desc = document.createElement("p");
        div.innerHTML = `${result.drinks[i].name} (${result.drinks[i].amount})`;
        desc.innerHTML = result.drinks[i].desc;
        turkish.appendChild(div);
        turkish.appendChild(desc);
        //for food section
        let div2 = document.createElement("h3");
        let desc2 = document.createElement("p");
        div2.innerHTML = `${result.Food[i].name} ${result.Food[i].amount}`;
        desc2.innerHTML = result.Food[i].desc;
        turkish2.appendChild(div2);
        turkish2.appendChild(desc2);
      }
    });
}
getMenu();

function getEnglish() {
  fetch("./menu_en.json")
    .then((response) => {
      return response.json();
    })
    .then((jsondata) => {
      result = jsondata;
      for (let i = 0; i < result.drinks.length && result.Food.length; i++) {
        let div = document.createElement("h3");
        let desc = document.createElement("p");
        div.innerHTML = `${result.drinks[i].name} (${result.drinks[i].amount})`;
        desc.innerHTML = result.drinks[i].desc;
        //for English
        english.appendChild(div);
        english.appendChild(desc);

        //for food section
        let div2 = document.createElement("h3");
        let desc2 = document.createElement("p");
        div2.innerHTML = `${result.Food[i].name} ${result.Food[i].amount}`;
        desc2.innerHTML = result.Food[i].desc;
        english2.appendChild(div2);
        english2.appendChild(desc2);
      }
    });
}
getEnglish();

//buttons logic
function turkishAction() {
  english.classList.toggle("english-class");
  turkish.classList.toggle("english-class");
  english2.classList.toggle("english-class");
  turkish2.classList.toggle("english-class");
  console.log(turkish2);
}

function englishAction() {
  english.classList.toggle("english-class");
  turkish.classList.toggle("english-class");
  english2.classList.toggle("english-class");
  turkish2.classList.toggle("english-class");
  console.log(turkish);
}
