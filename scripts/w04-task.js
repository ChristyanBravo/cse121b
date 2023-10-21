/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Christyan Bravo",
    photo: "C:/Users/LENOVO/Desktop/PATHWAY CHRISTYAN/cse121b/images/Pic.jpg",
    favoriteFoods: ["Encebollado", "Ceviche", "Pollo a la Brasa", "Chaulafan", "Chicharron"],
    hobbies: ["Soccer", "Videogames", "Netflix"],
    placesLived: [],

};

/* Populate Profile Object with placesLive objects */
let newPlace = {
    place: "Guayaquil",
    length: "17 years"
};
myProfile.placesLived.push(newPlace);

myProfile.placesLived.push({
    place: "Salt Lake City",
    length: "4 years"
});

myProfile.placesLived.push({
    place: "Peru",
    length: "8 years"
});
/* DOM Manipulation - Output */

document.querySelector('#name').textContent = myProfile.name;/* Name */

/* Photo with attributes */

let photoElement = document.querySelector('#photo');
photoElement.src = myProfile.photo;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });


/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobbies;
    document.querySelector('#hobbies').appendChild(li);
  });

/* Places Lived DataList */

let placesLivedList = document.getElementById('places-lived');
myProfile.placesLived.forEach(function(place) {
    let dtElement = document.createElement('dt');
    dtElement.textContent = place.place;
    let ddElement = document.createElement('dd');
    ddElement.textContent = place.length;
    placesLivedList.appendChild(dtElement);
    placesLivedList.appendChild(ddElement);
});
