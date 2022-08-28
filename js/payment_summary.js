
const filmTitle = document.querySelector("#title");
const filmCreator = document.querySelector("#creator");
const toPay = document.querySelector("#sum");
const freeFilm = document.querySelector(".topayment");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let filmName = params.get("title");
let screenName = params.get("creator");
let price = params.get("price");
let filmId = params.get("id");

console.log(filmId);


console.log(price);

if(price != 0) {
    filmTitle.innerHTML = filmName;
    filmCreator.innerHTML = screenName;
    toPay.innerHTML = "NOK " + price;
}

else {

    freeFilm.innerHTML = `<p>This is a free film. Follow the link to watch</p>
                          <a href="paid_film.html?id=${filmId}">${filmName}</a>
                        `
}