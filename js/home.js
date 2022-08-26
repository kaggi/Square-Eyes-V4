let homeLink = document.querySelector( "#home_link" );
homeLink.classList.add( "current_page" );

const squareEyesUrl = "https://squareeyes.lolalohne.com/wp-json/wc/v3/products?consumer_key=ck_47030114aa4adcc4293df0789ccc57a7afed6eb1&consumer_secret=cs_dfb83376c47783e1ff3a4f793571e841275f9f44";
const lastFilms = "&per_page=3";
const freeFilms = "&featured=true";

const displayLatestFilms = document.querySelector( "#home_new_uploads" );
const displayFreeExamples = document.querySelector( "#home_free_examples" );


async function getLastFilms() {
    
    try {
        const response = await fetch( squareEyesUrl + lastFilms );
        const results = await response.json();
        console.log( "There are latest uploads" );
        console.log( results );

        console.log( "Film items" );

        showLatestFilms ( results );
        
    }

    catch( error ) {
        console.log( "An error occured getting films" );
    }
}


async function getFreeFilms() {
    try {

        const response = await fetch( squareEyesUrl + freeFilms );
        const results = await response.json();
        console.log( "There are free films" );
        console.log( results );
        console.log( "Film items" );
    }

    catch ( error ) {

        console.log( "An error occured getting films" );
     
    }
}



function showLatestFilms( array ) {

    for(let i = 0; i < array.length; i++) {

        

        console.log( array[i].id );   
        console.log( array[i].images[0].src );
        console.log( array[i].name );
        console.log( "By " + array[i].attributes[1].options[0] );
    }
 

}

function showFreeFilms ( array ) {


}


getLastFilms();
getFreeFilms();