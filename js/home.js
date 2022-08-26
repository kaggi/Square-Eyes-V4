let homeLink = document.querySelector("#home_link");
homeLink.classList.add("current_page");

const squareEyesUrl = "https://squareeyes.lolalohne.com/wp-json/wc/store/products";





async function getFilms() {
    
    try {
        const response = await fetch(squareEyesUrl);
        const results = await response.json();
        console.log(results);
    }

    catch( error ) {
        console.log("An error occured getting films");
    }
}

getFilms();