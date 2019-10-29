function vibeCheck (vibes){
    if(vibes === "true"){
        alert("You have passed the Vibe Check");
    } else {
        alert("Vibe's off bro. Check yourself");
    }
}

let form = document.querySelector("#vibeCheck");
form.addEventListener("submit", function(e){
    e.preventDefault();
    formData = new FormData(form);
    vibeCheck(
        formData.get("vibes"));
    form.reset(); 
});