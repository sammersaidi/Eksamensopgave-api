
//Function that adds the person to the console, so the match can be seen in the profile page
function likeBtn() {
    const matchName = document.getElementById("Selena").value;

    localStorage.setItem("Selena", "Selena");
    window.alert("You have matched with Selena. Go to profile page to see your matches")

};


//Function that removes the person from the console
function dislikeBtn() {
   
    localStorage.removeItem("Selena", "Selena");

}



function profileInfo() {

document.getElementById("profileInfo").innerHTML = "Hi! I'm Selena. I'm 30 years old and love to drink wine";

}