let homeLink = document.querySelector("#home_link");
homeLink.classList.add("current_page");

const url = "http://squareeyes.lolalohne.com/wp-json/wc/store/products";

const displayLastUploadedFilms = document.querySelector("homepage_new_uploads");

async function getFilms() {
    
    try {
        const response = await fetch(url);
        const results = await response.json();
        console.log(results);
    }

    catch( error ) {
        console.log("An error occured getting films");
    }
}