const squareEyesUrl = "https://squareeyes.lolalohne.com/wp-json/wc/v3/products"
const key = "?consumer_key=ck_47030114aa4adcc4293df0789ccc57a7afed6eb1&consumer_secret=cs_dfb83376c47783e1ff3a4f793571e841275f9f44"; 
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

console.log(params);

const filmId = params.get("id");

const filmURL = squareEyesUrl + `/${filmId}` + key; 

let filmTitle = "Title";
let creatorScreenname = "Screenname";
let fullFilmURL = "";

const error_message = document.querySelector(".error_message");

const film = document.querySelector(".film_container");
const heading2 = document.querySelector("h2");
const heading3 = document.querySelector("h3");




async function getFilm() {
    
    film.innerHTML = "<p>Film info loading, please wait</p>";
    
    try {

        
        const response = await fetch(filmURL); 
        results = await response.json();         
        
        filmTitle = results.name;
        creatorScreenname = results.attributes[1].options[0]; 
        fullFilmURL = results.attributes[3].options[0];

        console.log(filmTitle);
        console.log(creatorScreenname);
        console.log(fullFilmURL);
        showFilm();
        
        
    }
    catch(error) {     
        
        error_message.innerHTML = "An error occured";
        

    }
}

function showFilm() {
    

    film.innerHTML = `
            <h1>Enjoy the film</h1>
            <h2>${filmTitle}</h2>
            <video src="${fullFilmURL}" controls class="video">            
            </video> `

}

getFilm();