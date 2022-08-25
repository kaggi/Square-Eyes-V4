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
  if (testLength(search.value, 0)) {
    searchOK = true;
    searchFieldError.style.display = "none";
  } else {
    searchFieldError.style.display = "block";
  }

  if (searchOK) {
    search_results_section.style.display = "flex";
    search_results_section.style.flexDirection = "column";

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
