let searchLink = document.querySelector("#search_link");
searchLink.classList.add("current_page");

const search_results_section = document.querySelector(
  ".search_results_section"
);
const search = document.querySelector("#search_input");
const searchFieldError = document.querySelector("#searchFieldError");

const button = document.querySelector("#search_button");

let searchOK = false;

function checkSearchField(event) {
  event.preventDefault();
  if (testLength(search.value, 0)) {
    searchOK = true;
    searchFieldError.style.display = "none";
  } else {
    searchFieldError.style.display = "block";
  }

  if (searchOK) {
    search_results_section.style.display = "flex";
    search_results_section.style.flexDirection = "column";
    let searchInput = document.querySelector("#search_input");
    console.log(searchInput.value);
    const searchValue = searchInput.value;
    const searchUrl = squareEyesUrl + `&search=${searchValue}`;
    console.log( searchUrl );
    getSearchResults ( searchUrl );
    
    searchOK = false;
  } else {
    search_results_section.style.display = "none";
  }
}

function testLength(value, testValue) {
  if (value.trim().length > testValue) {
    return true;
  } else {
    return false;
  }
}

function showResults(event) {
  search_results_section.style.display = "flex";
  search_results_section.style.flexDirection = "column";
}

button.addEventListener("click", checkSearchField);

const squareEyesUrl = "https://squareeyes.lolalohne.com/wp-json/wc/v3/products?consumer_key=ck_47030114aa4adcc4293df0789ccc57a7afed6eb1&consumer_secret=cs_dfb83376c47783e1ff3a4f793571e841275f9f44";
const collection = "&per_page=20";

const displayCollection = document.querySelector(".display_collection_section");

async function getFilms() {
    
  try {
      const response = await fetch( squareEyesUrl + collection);
      const results = await response.json();
      console.log( "Here are our collection" );
      console.log( results );
      console.log( "Film items" );

      displayFilms ( results );
      
  }

  catch( error ) {
      console.log( "An error occured getting films" );
  }
}

function displayFilms( array ) {

  displayCollection.innerHTML = "";

  for(let i = 0; i < array.length; i++) {        
      
      console.log( array[i].id );   
      console.log( array[i].images[0].src );
      console.log( "Alt text " + array[i].images[0].name)
      console.log( array[i].name );
      console.log( "By " + array[i].attributes[1].options[0] );

      let filmTitle = array[i].name;
      let filmPosterUrl = array[i].images[0].src;
      let filmPosterAltText = array[i].images[0].name;
      let filmCreatorScreenname = array[i].attributes[1].options[0];

      displayCollection.innerHTML += `
      <!--film item-->

      <div class="film_item">
       
       <div class="film_item_image">  
        <img src=${filmPosterUrl} alt=${filmPosterAltText} />
       </div>
     
       <div class="film_item_links">
        <a href="film.html" class="list_link" id="film_title">${filmTitle}</a>
        <a href="creator_public.html" id="film_creator">By: ${filmCreatorScreenname}></a>
       </div>
      
      </div>
     
     <!--End film item-->`;  
    }

  }

  async function getSearchResults( url ) {
    const response = await fetch( url );
    const results = await response.json();

    displayFilms ( results );
  }

  getFilms();