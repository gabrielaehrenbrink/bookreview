function getUserInput(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var review = document.getElementById("review").value;
    document.getElementById("Reviews").innerHTML += name + " " + email + ":   " + review;
}

const reviews = document.querySelector('.reviews');

function addReview({ name, email, text }) {
  const html = reviews.insertAdjacentHTML('beforeend', html);
}


var myText = document.getElementById("review");
var result = document.getElementById("info");
var limit = 140;
result.textContent = 0 + "/" + limit;

myText.addEventListener("input",function(){
    var textLength = myText.value.length;
    result.textContent = textLength + "/" + limit;

    if(textLength > limit){
        myText.style.borderColor = "#ff2851";
        result.style.color = "#ff2851";
    }
    else{
        myText.style.borderColor = "#b2b2b2";
        result.style.color = "#737373";
    }
});
