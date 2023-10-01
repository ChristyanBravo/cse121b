/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let FullName = 'Christyan Paul Bravo Silva';
let CurrentYear = new Date().getFullYear();
let ProfilePicture = 'PATHWAY CHRISTYAN\cse121b\images\PictureProfile.jpg';




/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
let imageElement = document.querySelector("#PictureProfile");


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${FullName}</strong>`;
yearElement.textContent = CurrentYear;
imageElement.setAttribute('src', ProfilePicture);
imageElement.setAttribute("alt", `Profile image of ${FullName}`);







/* Step 5 - Array */
var favoriteFoods = [];

foodElement.innerHTML = favoriteFoods.join(",");

var singleFavoriteFood = "French Fries"; // 

favoriteFoods.push(singleFavoriteFood);

foodElement.innerHTML += "<br>" + singleFavoriteFood;

favoriteFoods.shift();

foodElement.innerHTML += "<br>" + favoriteFoods.join("<br>");

favoriteFoods.pop();

foodElement.innerHTML += "<br>" + favoriteFoods.join("<br>");





