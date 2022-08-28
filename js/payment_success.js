const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let filmId = params.get("id");

const filmPageLink = document.querySelector(".full_film_link");

filmPageLink.innerHTML += ` <a href="paid_film.html?id=${filmId}" id="paid_film_link">
                           <p>Click here to watch your film.</p></a>
                           <p id="payment_success_p">Happy watching!</p>`;