let searchLink = document.querySelector("#search_link");
searchLink.classList.add("current_page");

const title = document.querySelector("title");

const squareEyesUrl = "https://squareeyes.lolalohne.com/wp-json/wc/v3/products"
const key = "?consumer_key=ck_47030114aa4adcc4293df0789ccc57a7afed6eb1&consumer_secret=cs_dfb83376c47783e1ff3a4f793571e841275f9f44"; 
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

console.log(params);

const filmId = params.get("id");
const filmURL = squareEyesUrl + `/${filmId}` + key; 

const filmInfo = document.querySelector(".film_and_info");

let filmTitle = "Title";
let creatorScreenname = "Screenname";
let price = 0;
let trailerURL = "trailerURL";
let aboutFilm = "";
let results = {};

const error_loading_film = document.querySelector(".error_message");
error_loading_film.style.display = "none";

const filmDescription = document.querySelector(".film_info");


async function getFilm() {

    filmInfo.innerHTML = "<p>Film info loading, please wait</p>";
    
    try {

        
        const response = await fetch(filmURL); 
        results = await response.json();         
        
        filmTitle = results.name;
        creatorScreenname = results.attributes[1].options[0]; 
        trailerURL = results.attributes[2].options[0];
        aboutFilm = results.description;
        price = results.price;
        
        if( typeof filmTitle !== 'undefined' ) {
            showFilmInfo();
        }
    }
    catch(error) {     
        filmInfo.innerHTML = "";
        error_loading_film.style.display = "block";
    }
}

function showFilmInfo () {
    title.innerHTML = filmTitle + " | Square Eyes";
    filmInfo.innerHTML = "";
    filmInfo.innerHTML += `
                            <h1>${filmTitle}</h1>
                            <h2>Created by: ${creatorScreenname}</h2>
                            <section class="content">
                                <section class="left">
                                    <section class="video_section">                    
                                        <video src="${trailerURL}" controls class="video">
                                            
                                        </video>
                                    </section>
                                    <section class="trailer_or_pay" id="trailer_pay_options">
                                        <h3>Watch trailer on this page</h3>
                                        <p id="or">or</p>
                                        <a href="payment_summary.html?title=${filmTitle}&creator=${creatorScreenname}&price=${price}&id=${filmId}" class="cta cta_secondary" id="pay">Pay Per View</a>
                                    </section>
                                </section>
                                <section class="about_film">
                                    <h3>About this film</h3>
                                    <div class="film_info"> 
                                        ${aboutFilm}
                                    </div>
                                </section>  
                            </section>  
    `


}


getFilm();