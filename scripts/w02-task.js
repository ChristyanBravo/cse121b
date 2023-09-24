/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
var FullName = "Christyan Paul Bravo silva";
var CurrentYear = new Date().getFullYear();
var ProfilePicture = "image/profilepicture.png";




/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.getElementById("profileImage");



/* Step 4 - Adding Content */
nameElement.innerHTML = '<strong>${FullName}</strong>';
yearElement.textContent = CurrentYear;
imageElement.setAttribute('src', ProfilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);







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





