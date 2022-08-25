let searchLink = document.querySelector("#search_link");
searchLink.classList.add("current_page");


const comments = document.querySelector(".comments");


const form = document.querySelector(".add_comment");
const myComment = document.querySelector("#add_comment_field");

const commentError = document.querySelector(".errorMessage");



let commentOK = false;

function checkForm(event) {
    event.preventDefault();

    if (testLength(myComment.value, 3)) {
        commentOK = true;
        commentError.style.display = "none";     }
    else {
        commentError.style.display = "block";                 
    }

    if(commentOK) {
        comments.innerHTML =  `<div class="watcher_comment_box">
                                <p id="watcher_screenname">By: Screenname</p>
                                <p>${myComment.value}</p></div>` + comments.innerHTML;
        form.reset();
        commentOK = false;
    }


}

function testLength(value, testValue) {
    if (value.trim().length > testValue) {        
        return true;
    }
    else {        
        return false;
    }
}




form.addEventListener("submit", checkForm);